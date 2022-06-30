import PropTypes from 'prop-types';
// Import Content
import '../css/style.css'

// Styled-Components
import { Button } from './styled-components/button.styled';

// logo
import logo from '../images/matrix.svg';
import icon_arrow from '../images/arrow.svg';

function Header({unitD, changeU}){
  return (
    <div className='Container__units Flex Flex_col'>
      <div className='Logo Flex Flex__row Flex__center'>
        <img className= "Logo__img" src={logo} alt="molecule logo" />
        <h1 className='Logo__title'>Matrix</h1>
      </div>
      <nav>
        <ul>
        {
            Object.keys(unitD).map((title, idx) => {
              return ( 
                    <li key={idx}>
                      <button className='Flex' value={title} onClick={e => changeU(e.target.value)}>
                        <img src={icon_arrow}/>
                        {title.toUpperCase() } 
                        {unitD[title].unitName.toUpperCase()} 
                      </button>
                    </li>
                )
            })
          }
        </ul>
      </nav>
      <Button className='Button__logout'>LOG OUT</Button>
    </div>
  )
}

Header.propTypes = {
  unitD: PropTypes.object,
  changeU: PropTypes.func
}

export default Header;

