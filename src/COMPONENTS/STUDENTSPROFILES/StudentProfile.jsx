import classes from "./StudentProfile.module.css";
import StudentProfileItems from "./StudentProfileItems";
import StudentProfileBtn from "./StudentProfileBtn";
import { useState } from "react";
import StudentTagInput from "./StudentTagInput";
import StudentProfileTags from "./StudentProfileTags";

const StudentProfile = ({
  firstName,
  lastName,
  email,
  picture,
  company,
  skill,
  grades,
  tags,
  id,
  setStudentsData,
  setAllFiltered,
}) => {

  const [showTest, setShowTest] = useState(false);

  const tests = grades.map((grade, idx) => {

    return (
      <div className={classes.test} key={idx}>
        <span>Test {idx + 1}:</span>

        <span>{grade}</span>
      </div>
    );

  });

  const addTests = () => {
    setShowTest(true);
  };

  const removeTests = () => {
    setShowTest(false);
  };

  const createTags = (newTag) => {

    setStudentsData((prev) => {

      let idx = id;
      return prev.map((student) => {
        return student.id === idx
          ? {
              ...student,
              tags: student.tags ? [...student.tags, newTag] : [newTag],
            }
          : student;
      });

    });

    setAllFiltered((prev) => {

      let idx = id;
      return prev.map((student) => {
        return student.id === idx
          ? {
              ...student,
              tags: student.tags ? [...student.tags, newTag] : [newTag],
            }
          : student;
      });

    });

  };

  return (
    <li className={classes.li}>
      
      <StudentProfileItems
        firstName={firstName}
        lastName={lastName}
        email={email}
        picture={picture}
        company={company}
        skill={skill}
        grades={grades}
      />

      <StudentProfileBtn
        addTests={addTests}
        removeTests={removeTests}
        showTest={showTest}
      />

      {showTest && <div>{tests}</div>}

      <StudentProfileTags tags={tags} />

      <StudentTagInput
        createTag={createTags}
        setStudentsData={setStudentsData}
      />

    </li>
  );
};

export default StudentProfile;
