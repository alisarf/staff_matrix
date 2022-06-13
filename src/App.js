import React,{useState,useEffect} from 'react';
import './App.css';
//Import Content
import units from "./units.json";
import './css/style.css'

//logo
import logo from './images/matrix.svg';
import icon_refresh from './images/refresh.svg';
import icon_arrow from './images/arrow.svg';

//Styled-Components
import { Button } from './styled-components/button.styled';
import { Card } from './styled-components/card.styled';
import { Select } from './styled-components/select.styled';

/**
 *Ideas : 
 * Add modal for users to add new staff type and 
 * staff to patient ratio, and change old ratios
 */


function App() {
  var unitDir = units.units;
  const [unit, setUnit] = useState('bhu');
  const [data,setData]=useState([unitDir[unit].patients]);
  const [acuityTotal, setTotal] = useState(0);
  const [toggleAcuity, setToggleAcuity] = useState(0) //sets when totalacuity is set the first time
  const [date, setDate] = useState({});
  const [timestamp, setTimestamp] = useState();
  const today = new Date();

  const [staff, setStaff] = useState({
    "provider" : 2,
    "nurse" : 6,
    "tech" : 3,
    "social worker" : 3,
    "physical therapy" : 2
  });

  const scoreScale = {
      'intubated' : {
        'yes': 16,
        'no': 0
      },
    'mobility' : {
        'ind': 0,
        'sba': 1,
        '1pa': 2,
        '2pa': 2
      },
    
    'incontinent' : {
      'yes': 2,
      'no': 0
    },
    'alert' : { 
      //all scoring below needs revising for real-life accuracy
      '1': 2,
      '2': 2,
      '3': 1,
      '4': 0
    },
    'surgery' : {
      'yes': 3,
      'no': 0
    },
    'isolation' : {
      'no': 0,
      'contact': 1,
      'droplet': 1,
      'airborne': 3
    } 
  };


  const getStaff = () => {
    const roundUp = (divider) => Math.ceil(acuityTotal/divider);
    setStaff( {
      "provider" : roundUp(10),
      "nurse" :  roundUp(16),
      "tech" :  roundUp(30),
      "social worker" :  roundUp(20),
      "physical therapy" :  roundUp(4)
    })
  };

  const getScoreScale = (type, score) => {
    //get corresponding scalescore
    return parseInt(scoreScale[type][score]);
  };

  const setScoreValue = (score, id, careType) => {
    // loop over the todos list and find the provided id.
    let updatedList = data.map(item => 
      {
        if (item.id == id){
          return {...item, [careType]: score};
        }
        return item; // else return unmodified item 
      });
    setData(updatedList);
  };


  const getAcuity = () => {
    //update individual acuity
    var newAcuity = 0;
    data.forEach((item) => {
      newAcuity = newAcuity + item.acuity;
    })

    //set toggle for first acuity set
    var x = toggleAcuity + 1;
    setToggleAcuity(x);

    setTotal(newAcuity);
  };

  const updateAcuityTotal = ()=> {
    //update total acuity
    let careTypeArr = Object.keys(scoreScale);
    let updatedListAcuity = data.map(item => 
      {   
          let total = 0;

          careTypeArr.forEach((careType)=>{
            let ref_score = getScoreScale(careType, item[careType]);
            total += ref_score;
          })
          return {...item, 'acuity' : total };
      });
    setData(updatedListAcuity);
  };

  const changeUnit = (unit) => {
    setUnit(unit);
  }

  const getDate = () => {
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let dayOfWeek = days[ today.getDay() ];
    let month = months[ today.getMonth() ];
    let dd = String(today.getDate()).padStart(2, '0');
    let yyyy = today.getFullYear();
    let formattedDate = month + ' ' + dd + ', ' + yyyy;

    setDate({"today":formattedDate , "dayOfWeek" : dayOfWeek});
  }
  
  const getTimestamp = () => {
    setTimestamp(today.toLocaleString());
  }
  

  const getCareCats = () => {
    var arr;
    for (var type in scoreScale) {
      arr.push(type);
    }
    return arr;
    //console.log(arr)
  }
  
  

  useEffect(()=>{
    //inital render of timestamp, date, and acuity total from fetch
    updateAcuityTotal();
    getDate();
    getTimestamp();
  },[]);

  useEffect(()=>{
    //render staffing the first time the total acuity changes.
    if (toggleAcuity == 2) getStaff(); //2 is the lucky number
  },[acuityTotal]);

  useEffect(()=>{
    //render acuity totals once data is fetched and set
    getAcuity();
  },[data]);

  useEffect(()=>{
    //fetch new data when user clicks new unit
    setData(unitDir[unit].patients);
  },[unit]);

  useEffect(()=>{
    //fetch new data when user clicks new unit
    //getStaff();
  },[unit]);


  return (
    <div className='App'>
    <div className="Container">
      <section className='Container__header'>
        <time className='Flex Flex__col Flex__center Align__left Font-grey-med Container__header--date'><span className='Bold-lt'>{date.dayOfWeek}</span><span>{date.today}</span></time>
        <h2 className='Flex Flex__col Flex__center Align__right Font-grey-med'>
          <span className='Font-grey-med Capitalize'>Hospital XYZ</span>
          <span className='Font-bold-lrg Capitalize'>{unitDir[unit].unitName}</span> {/*could just use {unit}*/}
        </h2>
      </section>
      <header className='Container__units'>
      <div className='Flex Flex__row Flex__center'><img className= "Logo" src={logo} alt="molecule logo" /><h1>Matrix</h1></div>
        <nav>
          <ul>
          {
              Object.keys(unitDir).map((title)=>{
                return ( 
                      <li>
                        <button className='Flex' value={title} onClick={e => changeUnit(e.target.value)}>
                          <img src={icon_arrow}/>
                          {title.toUpperCase() } 
                          {unitDir[title].unitName.toUpperCase()} 
                        </button>
                      </li>
                  )
              })
            }
          </ul>
        </nav>
        <Button className='Button__logout'>Logout</Button>
      </header>
      <main className='Container__patients'>
      <table className='PtTable'>
        <tr className='PtTable__categories'>
          <th className='Align__left Font-grey-categories'>Name</th>  
          {
            Object.keys(scoreScale).map((category)=>{
              return (
                <th className='Align__left Font-grey-categories Capitalize'>{category}</th>
                )
            })
          }
          <th className='Align__left Font-grey-categories'>Score</th>
          <th className='Align__center Font-grey-categories'>Update</th>
        </tr>
     {
       data && data.length>0 && data.map((item)=> 
        <tr className='Rounded Font-grey-row'>
          <td className='Capitalize Align__left'>{item.firstName} {item.lastName}</td>
          {/*<input type="number" id="quantity" name="quantity" value={item.incontinent} min="1" max="10" onChange={(e) => setScoreValue(e.target.value, item.id, 'incontinent')}></input>*/}
          <td className='Align__left'>
            <Select color='#676767' value={item.intubated} onChange={(e) => setScoreValue(e.target.value, item.id, 'intubated')}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
          </td>
          <td className='Align__left'>
          <Select color='#676767' value={item.mobility} onChange={(e) => setScoreValue(e.target.value, item.id, 'mobility')}>
            <option value="ind">IND</option>
            <option value="sba">SBA</option>
            <option value="1pa">1PA</option>
            <option value="2pa">2PA</option>
          </Select>
          </td>
          <td className='Align__left'>
          <Select color='#676767' value={item.incontinent} onChange={(e) => setScoreValue(e.target.value, item.id, 'incontinent')}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
          </td>
          <td className='Align__left'>
          <Select color='#676767' value={item.alertOriented} onChange={(e) => setScoreValue(e.target.value, item.id, 'alertOriented')}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          </td>
          <td className='Align__left'>
          <Select color='#676767' value={item.surgery} onChange={(e) => setScoreValue(e.target.value, item.id, 'surgery')}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
          </td>
          <td className='Align__left'>
          <Select color='#676767' value={item.isolation} onChange={(e) => setScoreValue(e.target.value, item.id, 'isolation')}>
            <option value="no">No</option>
            <option value="contact">Contact</option>
            <option value="droplet">Droplet</option>
            <option value="airborne">Airborne</option>
          </Select>
          </td>
          <td className='Align__left'>{item.acuity}</td>
          <td className='Align__center'><button className="Button__refresh" onClick={updateAcuityTotal}><img src={icon_refresh} alt="refresh" /></button></td>
        </tr>
       )
     }
     </table>
     </main>
     <section className='Container__lower'>
      <Button className="Hidden" onClick={() => {
        updateAcuityTotal();
        getAcuity();
        }}>
        Calculate Total Acuity Staffing
        </Button>
        <Button onClick={() => {
        getStaff();
        getTimestamp();
        }}>
        Get Staff
        </Button>
        <p>Last Updated: <time>{timestamp}</time></p>
      <div className="Hidden">{acuityTotal}</div>
      <section className='Container__staff'>
          {
            Object.keys(staff).map((title,value)=>{
              return (
                  <Card>
                    <h4 title={value}>{title}</h4>
                    <h4 title={staff[title]}>{staff[title]}</h4>
                  </Card>
                )
            })
          }
      </section>
     </section>
      </div>
    </div>
  );
}

export default App;
