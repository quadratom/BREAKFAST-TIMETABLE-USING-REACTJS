import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick =  () => {
  //   console.log('u click');
  // }
    return (
      <header className='header'>
          <div>
             {title}
          </div>
          <Button 
          color={showAdd ? 
          'red' : 'green'}
          text={showAdd ? 
          'Close' : 'Add'}
          onClick={onAdd} />
        
         
      </header>
    )
  }

  Header.defaultProps = {
    title : "Mr Owen Food Track"
  }
  
  Header.propTypes = {
    title : PropTypes.string
  }

//   const headingcolor = {
//     color : 'red',
//     backgroundColor : 'blue'

//   }

  export default Header