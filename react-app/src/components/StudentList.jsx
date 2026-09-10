function StudentList({ students, onSelectStudent }) {
  return (
    <div>
      <h2>Students</h2>

      {students.map((student) => {
        return (
          <button
            key={student.id}
            onClick={() => onSelectStudent(student)}
          >
            {student.name}
          </button>
        );
      })}
    </div>
  );
}

export default StudentList;