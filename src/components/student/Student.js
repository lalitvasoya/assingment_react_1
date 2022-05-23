import react from 'react';


const Student = ({name, city, state, index, studentOnChange}) => {
    return (
        <>
            <p>Name: {name}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <input type="text" value={name} onChange={studentOnChange} index={index}/>
        </>
    );
}

export default Student;
