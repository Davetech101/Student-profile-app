import { useState } from "react";
import classes from "./StudentTagInput.module.css";

const TagInput = ({createTag}) => {

  const [newTag, setNewTag] = useState('')

  const handleSubmit = (e) => {

    e.preventDefault();
    if(newTag.trim().length <= 0) return;
    
    createTag(newTag)

    setNewTag('');
    
  };

  return (

    <form action="#" onSubmit={handleSubmit}>

      <input
        className={classes.input}
        type="text"
        placeholder="Add tag"
        onChange={(e) => setNewTag(e.target.value)}
        value={newTag}
        required
      />

    </form>

  );
  
};

export default TagInput;
