import classes from "./StudentProfile.module.css";

const StudentProfileItems = ({ 
  firstName, 
  lastName, 
  email, 
  picture,  
  company, 
  skill, 
  grades}) => {

  const average = grades.reduce((avg, value, _, { length }) => {
    return avg + value / length;
  }, 0);
    
  return (

    <div className={classes.profile}>

      <img src={picture} alt={`avatar of ${firstName} ${lastName}`} />

      <article >

        <h2>{`${firstName} ${lastName}`}</h2>

        <div className={classes.attributes}>
          <span>Email: {email}</span>

          <span>Company: {company}</span>

          <span>Skill: {skill}</span>

          <span>Average: {average}%</span>
        </div>

      </article>

    </div>

  );

};

export default StudentProfileItems;
