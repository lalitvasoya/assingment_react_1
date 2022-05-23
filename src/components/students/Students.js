import react, { useState } from 'react';
import Student from '../student/Student';

const Students = () => {
    const [state, setState] = useState({
        show: true,
        students: [
            {name: "Lalit", city: "Bhavnagar", state: "Gujarat"},
            {name: "Devang", city: "Bhavnagar", state: "Gujarat"},
            {name: "Uttam", city: "Dakor", state: "Gujarat"}
        ]
    });
    
    const studentOnChange = (e) => {
        const newStudents= [...state?.students];
        const index = e?.target?.getAttribute('index');
        newStudents[index]['name'] = e?.target?.value; 
        setState({...state, students: newStudents});
    }

    const students = state.students.map((ele, index)=>{
        return <Student name={ele?.name} city={ele?.city} state={ele?.state} index={index} key={index} studentOnChange={studentOnChange}/>
    });


    const handleOnClick = () => {
        console.log(state?.show)
        setState({...state, show: !state?.show})
    }

    return (
        <>
            <div>
                <button onClick={handleOnClick}>{state?.show? 'UnShow': 'show'}</button>
                {state?.show? students: null}
            </div>
        </>
    ) 
}

export default Students;
