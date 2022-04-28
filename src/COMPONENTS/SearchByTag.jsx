import Input from "./UI/Input";

const SearchByTag = ({ tagSearch, handleTagSearch }) => {
  return (
    <Input
      onChange={(e) => handleTagSearch(e)}
      value={tagSearch}
      type="text"
      placeHolder="Search by tag"
    />
  );
};

export default SearchByTag;
