import PropTypes from 'prop-types';

// Import Content
import '../css/style.css'

function Time({ loc, date, timestamp }){
  if (loc === 'top'){
    return(
      <time className="Flex Flex__col Flex__center Align__left Font-grey-med Container__header--date">
        <span className="Bold-lt">{date.dayOfWeek}</span>
        <span>{date.today}</span>
      </time>     
    )
  }
  else if (loc === 'bottom'){
    return(
      <time>{timestamp}</time>
    )
  }
}

Time.propTypes = {
  loc: PropTypes.string,
  date: PropTypes.object,
  timestamp: PropTypes.string
}

export default Time;