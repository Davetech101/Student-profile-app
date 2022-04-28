import classes from "./StudentProfile.module.css";

const StudentProfileTags = ({ tags }) => {

  const allTags = tags.map((tag, idx) => {

    return (

      <span className={classes.tag} key={idx}>
        {tag}
      </span>

    );

  });

  return (
    <div className={classes.tags}>
      {allTags}
    </div>
  )

};

export default StudentProfileTags;
