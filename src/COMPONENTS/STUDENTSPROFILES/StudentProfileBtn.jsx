import classes from "./StudentProfile.module.css";

const StudentProfileBtn = ({
   addTests, 
   removeTests, 
   showTest 
  }) => {

  return (

    <div className={classes.btn}>
      {!showTest && (
        <button onClick={addTests}>
          <i className="fa fa-plus"></i>
        </button>
      )}

      {showTest && (
        <button onClick={removeTests}>
          <i className="fa fa-minus"></i>
        </button>
      )}
    </div>

  );

};

export default StudentProfileBtn;
