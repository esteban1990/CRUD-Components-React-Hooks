import React from 'react'
import { useForm } from '../hooks/useForm'
import {v4 as uuidv4} from 'uuid'



export const AddForm = ({ setUsers }) => {

    const [{ name,username }, handleInputChange,reset] = useForm({
        name: '',
        username: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const addUser = {
            id:uuidv4(),
            name:name,
            username:username
        }

        setUsers(users => [...users,addUser])
        reset();


    }


    return (

        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={name}
                        name='name'
                        placeholder="Ingresa Nombre"
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        value={username}
                        name='username'
                        placeholder="ingresa un username"
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-success">Add User</button>
            </form>
        </>
    )
}





















































// import React,{useState} from 'react'
// import {v4 as uuidv4} from 'uuid'

// export const AddForm = ({setUsers}) => {

//     const [inputName ,setInputName] = useState('')
//     const [inputUsername,setInputUsername] = useState('')


//     const handleChangeName = (e) => {
//         setInputName(e.target.value)
//     }

//     const handleChangeUsername = (e) => {
//         setInputUsername(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const addUser = {
//             id:uuidv4(),
//             name:inputName,
//             username:inputUsername
//         }
//         setUsers(users => [...users,addUser])
//         setInputName('')
//         setInputUsername('')
//     }





//     return(
//        <>
//        <form onSubmit={handleSubmit}>
//            <div className="form-group">
//                <input
//                type="text"
//                value={inputName}
//                name="name"
//                placeholder="Ingresa Nombre"
//                onChange={handleChangeName}
//                />
//            </div>
//            <div className="form-group">
//                <input
//                type="text"
//                value={inputUsername}
//                name="username"
//                placeholder="ingresa un username"
//                onChange={handleChangeUsername}
//                />
//            </div>
//            <button type="submit" className="btn btn-success">Agregar</button>
//        </form>
//        </>
//     )
// }