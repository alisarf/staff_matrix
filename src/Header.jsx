//Import Content
import './css/style.css'

//Styled-Components
import { Button } from './styled-components/button.styled';

//logo
import logo from './images/matrix.svg';
import icon_arrow from './images/arrow.svg';

function Header(props){
  return (
    <div className='Container__units'>
      <div className='Flex Flex__row Flex__center'>
        <img className= "Logo" src={logo} alt="molecule logo" />
        <h1>Matrix</h1>
      </div>
      <nav>
        <ul>
        {
            Object.keys(props.unitD).map((title)=>{
              return ( 
                    <li>
                      <button className='Flex' value={title} onClick={e => props.changeU(e.target.value)}>
                        <img src={icon_arrow}/>
                        {title.toUpperCase() } 
                        {props.unitD[title].unitName.toUpperCase()} 
                      </button>
                    </li>
                )
            })
          }
        </ul>
      </nav>
      <Button className='Button__logout'>Logout</Button>
    </div>
  )
}

export default Header;

