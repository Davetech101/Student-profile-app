import StudentProfile from "../COMPONENTS/STUDENTSPROFILES/StudentProfile";

const StudentsInformation = ({
  studentsData, 
  notFound, 
  setStudentsData,
  setAllFiltered
}) => {

  const nullStyling = {

    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    
  }

  if(notFound) return <p style={nullStyling}>No Student matches your search!!</p>

  return (

    <ul>

      {studentsData.map((data) => {

        return(
           
          <StudentProfile

            firstName={data.firstName}
            lastName={data.lastName}
            email={data.email}
            picture={data.pic}
            company={data.company}
            skill={data.skill}
            grades={data.grades}
            key={data.id}
            id={data.id}
            tags={data.tags}
            setStudentsData={setStudentsData}
            setAllFiltered={setAllFiltered}

          />
        
        )

      })}

    </ul>

  )
  
}

export default StudentsInformation