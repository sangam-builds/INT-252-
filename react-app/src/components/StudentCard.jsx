import React from 'react'
import StudentHeader from './StudentHeader'
import Button from './Button'

const StudentCard = ({name,course,rollNo,isActive}) => { // or we write the props in more cleaner way { whaterver name we have to give}
  return (
      <card>

      <StudentHeader name={name}/>
      <h2>{course}</h2>
      <h2>{rollNo}</h2>
      {isActive?(<p>Active Student</p>):(<p>Inactive Student</p>)}
      {}
      <Button> View Profile</Button>
      </card>
  )
}

export default StudentCard
