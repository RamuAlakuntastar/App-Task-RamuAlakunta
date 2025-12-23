import { Component } from 'react';
import './App.css';
import Filters from './components/Filters';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { IoChevronBackOutline } from "react-icons/io5";
import { MdNavigateNext } from "react-icons/md";

class App extends Component {
  state = {
    productsList: [],
    isLoading: true,
    searchInput: '',
    selectedFilter: 'recommended',
    showFilter: true,
    selectedFilter2: '',
    selectedFilter3: '',
    selectedFilter4: '',
    selectedFilter5: '',
    selectedFilter6: '',
    selectedFilter7: '',
    selectedFilter8: '',
    idealFor: { men: false, women: false, kids: false },
    customizable: false,
    hasError: false,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch products');

      const data = await response.json();
      const products = data.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        description: product.description,
        imageUrl: product.image,
        rating: product.rating.rate,
        ratingCount: product.rating.count,
        idealFor: ['men', 'women'], 
        customizable: true,
        occasion: 'Casual',
        work: 'Study',
        fabric: 'Cotton',
        segment: 'Western',
        suitableFor: 'Plus Size',
        rawMaterials: 'Organic',
        pattern: 'Solid',
      }));

      this.setState({ productsList: products, isLoading: false });
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false, hasError: true });
    }
  };

  getFilterProduct = () => {
    const {
      productsList, searchInput, selectedFilter,
      selectedFilter2, selectedFilter3, selectedFilter4,
      selectedFilter5, selectedFilter6, selectedFilter7,
      selectedFilter8, idealFor, customizable
    } = this.state;

    let filtered = productsList.filter(product => {
      // Search filter
      const searchMatch = product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchInput.toLowerCase());

      // Checkbox filters
      let idealMatch = true;
      if (idealFor.men || idealFor.women || idealFor.kids) {
        idealMatch = (
          (idealFor.men && product.idealFor.includes('men')) ||
          (idealFor.women && product.idealFor.includes('women')) ||
          (idealFor.kids && product.idealFor.includes('kids'))
        );
      }

      const customizableMatch = customizable ? product.customizable : true;

      // Dropdown filters
      const dropdownMatch =
        (selectedFilter2 ? product.occasion === selectedFilter2 : true) &&
        (selectedFilter3 ? product.work === selectedFilter3 : true) &&
        (selectedFilter4 ? product.fabric === selectedFilter4 : true) &&
        (selectedFilter5 ? product.segment === selectedFilter5 : true) &&
        (selectedFilter6 ? product.suitableFor === selectedFilter6 : true) &&
        (selectedFilter7 ? product.rawMaterials === selectedFilter7 : true) &&
        (selectedFilter8 ? product.pattern === selectedFilter8 : true);

      return searchMatch && idealMatch && customizableMatch && dropdownMatch;
    });

    // Sorting
    switch (selectedFilter) {
      case 'high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'newestfirst':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  };

  // Handlers
  onchangeSearchInput = event => this.setState({ searchInput: event.target.value });
  onChangeFilter = event => this.setState({ selectedFilter: event.target.value });
  toggleFilter = () => this.setState(prev => ({ showFilter: !prev.showFilter }));

  handleCheckboxChange = name => {
    this.setState(prev => ({
      idealFor: { ...prev.idealFor, [name]: !prev.idealFor[name] }
    }));
  };

  handleCustomizableChange = () => {
    this.setState(prev => ({ customizable: !prev.customizable }));
  };

  handleDropdownChange = (key, value) => this.setState({ [key]: value });

  handleUnselectAll = () => {
    this.setState({ idealFor: { men: false, women: false, kids: false } });
  };

  render() {
    const {
      isLoading, hasError, searchInput, selectedFilter, showFilter,
      selectedFilter2, selectedFilter3, selectedFilter4, selectedFilter5,
      selectedFilter6, selectedFilter7, selectedFilter8, idealFor, customizable
    } = this.state;

    const filterProduct = this.getFilterProduct();

    return (
      <div className="homecontainer">
        <Header searchInput={searchInput} onChangeSearchInput={this.onchangeSearchInput} />

        <div className="bannercontainer">
          <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
          <p className="para">Order Your Favorite Products Today — Fast, Easy, Reliable.</p>
          <p className="para">Shop More, Save More — Exclusive Deals Available!</p>
        </div>

        <div className="containerhead">
          <div className="cont">
            <p className="pacount">{isLoading ? 'Loading...' : `${filterProduct.length} ITEMS`}</p>
            <p className="pahide" onClick={this.toggleFilter} style={{ cursor: 'pointer' }}>
              {showFilter ? <IoChevronBackOutline /> : <MdNavigateNext />} {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
            </p>
          </div>

          <select className="selectcontrec" value={selectedFilter} onChange={this.onChangeFilter}>
            <option value="recommended">RECOMMENDED</option>
            <option value="newestfirst">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="high">PRICE : HIGH TO LOW</option>
            <option value="low">PRICE : LOW TO HIGH</option>
          </select>
        </div>

        <div className="mainContainer">
          {showFilter && (
            <Filters
              selectedFilter2={selectedFilter2} onChangeFilter2={e => this.handleDropdownChange('selectedFilter2', e.target.value)}
              selectedFilter3={selectedFilter3} onChangeFilter3={e => this.handleDropdownChange('selectedFilter3', e.target.value)}
              selectedFilter4={selectedFilter4} onChangeFilter4={e => this.handleDropdownChange('selectedFilter4', e.target.value)}
              selectedFilter5={selectedFilter5} onChangeFilter5={e => this.handleDropdownChange('selectedFilter5', e.target.value)}
              selectedFilter6={selectedFilter6} onChangeFilter6={e => this.handleDropdownChange('selectedFilter6', e.target.value)}
              selectedFilter7={selectedFilter7} onChangeFilter7={e => this.handleDropdownChange('selectedFilter7', e.target.value)}
              selectedFilter8={selectedFilter8} onChangeFilter8={e => this.handleDropdownChange('selectedFilter8', e.target.value)}
              idealFor={idealFor} handleCheckboxChange={this.handleCheckboxChange} handleUnselectAll={this.handleUnselectAll}
              customizable={customizable} handleCustomizableChange={this.handleCustomizableChange}
            />
          )}

          {hasError && <p>Something went wrong. Please try again.</p>}
          {isLoading && !hasError && <p>Loading products...</p>}

          {!isLoading && !hasError && (
            <ul className="ee">
              {filterProduct.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ul>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
