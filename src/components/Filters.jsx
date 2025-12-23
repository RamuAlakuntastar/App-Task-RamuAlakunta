import './Filters.css';

const Filters = (props) => {
  const {
    selectedFilter2, onChangeFilter2,
    selectedFilter3, onChangeFilter3,
    selectedFilter4, onChangeFilter4,
    selectedFilter5, onChangeFilter5,
    selectedFilter6, onChangeFilter6,
    selectedFilter7, onChangeFilter7,
    selectedFilter8, onChangeFilter8,
    idealFor, handleCheckboxChange,
    customizable, handleCustomizableChange,
  } = props;

  return (
    <div className='filtersContainer'> 
      <hr/> 
      <div className='cusContainer'>
        <input 
          type='checkbox' 
          id='customCheck1' 
          checked={customizable} 
          onChange={handleCustomizableChange} 
        />
        <label htmlFor='customCheck1' className='customCheck1'>
          CUSTOMIZABLE
        </label>
      </div>

      <hr/>
      <div className='IDEALContainer'>
        <h1 className='customCheck'>IDEAL FOR</h1>
        <p>All</p>
        <p className='unselect' onClick={() => {
          handleCheckboxChange('men', false)
          handleCheckboxChange('women', false)
          handleCheckboxChange('kids', false)
        }}>Unselect all</p>

        <div className='selcont'>
          <input 
            type='checkbox' 
            id='customCheck2' 
            checked={idealFor.men} 
            onChange={() => handleCheckboxChange('men')} 
          />
          <label htmlFor='customCheck2'>Men</label>
        </div>

        <div className='selcont'>
          <input 
            type='checkbox' 
            id='customCheck3' 
            checked={idealFor.women} 
            onChange={() => handleCheckboxChange('women')} 
          />
          <label htmlFor='customCheck3'>Women</label>
        </div>

        <div className='selcont'>
          <input 
            type='checkbox' 
            id='customCheck4' 
            checked={idealFor.kids} 
            onChange={() => handleCheckboxChange('kids')} 
          />
          <label htmlFor='customCheck4'>Baby & Kids</label>
        </div>
      </div>

      <hr/>
      <select className='slectcont2' value={selectedFilter2} onChange={onChangeFilter2}>
        <option value=''>OCCASION</option>
        <option value="Casual">Casual</option>
        <option value="Formal">Formal</option>
        <option value="Partywear">Partywear</option>
        <option value="Festive">Festive</option>
        <option value="Wedding">Wedding</option>
      </select>

      <hr/>
      <select className='slectcont3' value={selectedFilter3} onChange={onChangeFilter3}>
        <option value=''>WORK</option>
        <option value="Study">Study</option>
        <option value="Gym">Gym</option>
        <option value="Travel">Travel</option>
        <option value="Loungewear">Loungewear</option>
      </select>

      <hr/>
      <select className='slectcont4' value={selectedFilter4} onChange={onChangeFilter4}>
        <option value=''>FABRIC</option>
        <option value="Cotton">Cotton</option>
        <option value="Linen">Linen</option>
        <option value="Silk">Silk</option>
        <option value="Denim">Denim</option>
        <option value="Chiffon">Chiffon</option>
      </select>

      <hr/>
      <select className='slectcont5' value={selectedFilter5} onChange={onChangeFilter5}>
        <option value=''>SEGMENT</option>
        <option value="Ethnic">Ethnic</option>
        <option value="Western">Western</option>
        <option value="Fusion">Fusion</option>
      </select>

      <hr/>
      <select className='slectcont6' value={selectedFilter6} onChange={onChangeFilter6}>
        <option value=''>SUITABLE FOR</option>
        <option value="Plus Size">Plus Size</option>
        <option value="Maternity Wear">Maternity Wear</option>
      </select>

      <hr/>
      <select className='slectcont7' value={selectedFilter7} onChange={onChangeFilter7}>
        <option value=''>RAW MATERIALS</option>
        <option value="Organic">Organic</option>
        <option value="Recycled">Recycled</option>
      </select>

      <hr/>
      <select className='slectcont8' value={selectedFilter8} onChange={onChangeFilter8}>
        <option value=''>PATTERN</option>
        <option value="Solid">Solid</option>
        <option value="Printed">Printed</option>
        <option value="Embellished">Embellished</option>
      </select>
      <hr/>
    </div>
  );
};

export default Filters;
