import Input from "./UI/Input";
import classes from "./Search.module.css"


const Search = ({ nameSearch, handleNameSearch }) => {

  return (

    <Input
      className={classes.none}
      onChange={(e) => handleNameSearch(e)}
      value={nameSearch}
      type="text"
      placeHolder="Search by name"
    />

  );

};

export default Search;
