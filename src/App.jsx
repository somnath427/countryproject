
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import SelectMenu from './components/SelectMenu';
import CountriesContainer from './components/CountriesContainer';
function App() {
  return (
<>
<Header/>
<main>
<div className="search-filter-container">
<SearchBar/>
<SelectMenu/>
</div>
<CountriesContainer/>
</main>
</>
  );
}

export default App;
