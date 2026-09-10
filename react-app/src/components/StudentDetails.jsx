function StudentDetails({student}){
    if(!student){
        return<p>Select a student to see details</p>
    }
    return(
        <div>
            <h2>{student.name}</h2>
            <p>{student.course}</p>
            <p>Roll No.{student.rollNo}</p>
        </div>

    )        
    
}
export default StudentDetails;