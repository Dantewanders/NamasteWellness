import React ,{useRef,useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import "./SearchForm.css";
import SearchIcon from '@mui/icons-material/Search';
import { useBookContext } from '../../BookData/bookData';

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useBookContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();

    if((tempSearchTerm.replace(/{^\s\$/g, '')).length === 0) {
      /*if the search is empty, then the search is set to '0'*/
      setSearchTerm("2023-04-04");
      setResultTitle("try another search");
    }
    else {
      setSearchTerm(searchText.current.value);
    }
    navigate('/MyWellness');

 
}
return (
  <div className= 'search-form'>
    <div className= 'container'>
      <div className= 'search-form-content'>
        <form className= 'search-form'></form>
        <div className= 'search-form-elements flex flex-c bg-white'>
          <input type = "text"
          className ='form-control' 
          placeholder = '  My Journal'
          ref={searchText}
          />
          <button type = "submit" className = 'flex flex-c' onClick={handleSubmit}>
            <SearchIcon sx={{ fontSize: 60 }}className = 'text-light-blue'/>
            {/* icon from material ui and instructions */}
          </button>
      </div>
    </div>
  </div>
</div>
)
}


export default SearchForm

