import './Header.css'

const Header = (props) => {
  const { searchInput, onchangeSearchInput } = props 

  return (
    <nav className='navContainer'>
      <img
        src='https://ik.imagekit.io/yes4v45dgd/logo1.png'
        alt='logo'
        className='imagelogo'
      />
      <input
        type='search'
        value={searchInput}
        onChange={onchangeSearchInput} 
        placeholder='Enter Product'
        className='inputprouduct'
      />
      <ul className='headerulcontainer'>
        <li className="shoplist">SHOP</li>
        <li className="skillslist">SKILLS</li>
        <li className="storieslist">STORIES</li>
        <li className="aboutlist">ABOUT</li>
        <li className="contactlist">CONTACT US</li>
      </ul>
    </nav>
  )
}

export default Header
