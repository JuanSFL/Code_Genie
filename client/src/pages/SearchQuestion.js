
import Searchbar from '../components/SearchBar/index';
import { Helmet } from "react-helmet";

function SearchQuestion() {
    return (
        <div className="appear">
      <Helmet>
          <title>Code Genie | Search</title>
      </Helmet>
        <div className="search-cont">
        <h1>Search</h1>
        <Searchbar/>
        </div>
        </div>
    )
}

export default SearchQuestion;