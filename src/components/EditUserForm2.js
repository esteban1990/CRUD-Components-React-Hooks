// import React, { useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import { useForm } from '../hooks/useForm'



// export const EditUserForm = ({currentUser, updateUser }) => {

//     const [{ name, username }, handleInputChange, reset] = useForm({ ...currentUser })

//     useEffect(() => {
//         reset();
//     }, [currentUser])

//     //usar callback desde el app y enviar los datos del usuario

//     //context - redux
//     //const {name, username} = currentUser;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         updateUser(currentUser.id)
//         reset();
//     }


//     return (

//         <>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <input
//                         type="text"
//                         value={name}
//                         name='name'
//                         placeholder="Ingresa Nombre"
//                         onChange={handleInputChange}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <input
//                         type="text"
//                         value={username}
//                         name='username'
//                         placeholder="ingresa un username"
//                         onChange={handleInputChange}
//                         className="form-control"
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">Edit User</button>
//             </form>
//         </>
//     )
// }

// // export default EditUserForm;


