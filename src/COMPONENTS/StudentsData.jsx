import { useEffect, useState } from "react";
import StudentsInformation from "./StudentsInformation";
import SearchByName from "./SearchByName";
import SearchByTag from "./SearchByTag";

const StudentsData = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [filteredByTag, setFilteredByTag] = useState([]);
  const [allFiltered, setAllFiltered] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [nameSearch, setnameSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");

  const handleNameSearch = (e) => {

    setnameSearch(e.target.value);

    let search = e.target.value.toLowerCase();

    let filtered;

    filtered = (filteredByTag.length > 0 ? filteredByTag : studentsData).filter((student) => {

      const studentFullName = `${student.firstName} ${student.lastName}`.toLowerCase();

      return studentFullName.includes(search) && student;

    });

    let finalFilter1 = filtered.filter((el) => !allFiltered.includes(el));

    let finalFilter2 = allFiltered.filter((el) => filtered.includes(el));

    setAllFiltered([...finalFilter2, ...finalFilter1]);

    if (filtered.length === 0) {
      setNotFound(true);
      return;
    } else {
      setNotFound(false);
    }

  };

  const handleTagSearch = (e) => {

    setTagSearch(e.target.value);

    let search = e.target.value.toLowerCase();

    let filtered = studentsData.filter((student) => {

      const tagsArray = student.tags.map((tag) => tag.toLowerCase());
      let tagsJoined = tagsArray.join(" ");
      return tagsJoined.includes(search) && student;

    });

    setFilteredByTag(filtered);

    let finalFilter1 = filtered.filter((el) => !allFiltered.includes(el));

    let finalFilter2 = allFiltered.filter((el) => filtered.includes(el));

    setAllFiltered([...finalFilter2, ...finalFilter1]);

    if (filtered.length <= 0) {
      setNotFound(true);
      return;
    }
    setNotFound(false);

  };

  async function fetchStudents() {

    const res = await fetch("https://api.hatchways.io/assessment/students");

    let { students } = await res.json();
    
    let studentsWithTag = students.map((student, idx) => ({
      ...student,
      tags: [],
      id: idx,
    }));

    setStudentsData(studentsWithTag);

  }

  useEffect(() => {
    fetchStudents();
  }, []);

  return (

    <div>

      <div className="search">

        <SearchByName
          nameSearch={nameSearch}
          handleNameSearch={handleNameSearch}
        />
        
        <SearchByTag
          tagSearch={tagSearch}
          handleTagSearch={handleTagSearch}
        />

      </div>

      <StudentsInformation

        notFound={notFound}
        studentsData={allFiltered.length > 0 ? allFiltered : studentsData}
        setStudentsData={setStudentsData}
        setAllFiltered={setAllFiltered}

      />

    </div>

  );
  
};

export default StudentsData;
