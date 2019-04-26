import React from 'react'

const StudentView = (props) => {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Branch Name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.studentList.map((students) => {
                        return (
                            <tr key={students.id}>
                                <td>{students.name.firstName} {students.name.lastName}</td>
                                <td>{students.branchName}</td>
                                <td>{students.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    
}
export default StudentView;