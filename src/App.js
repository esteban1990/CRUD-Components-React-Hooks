import React, { useState } from 'react'
import { UserTable } from './components/UserTable'
import { AddForm } from './components/AddForm'
import { EditUserForm } from './components/EditUserForm'
import { v4 as uuidv4 } from 'uuid'


const userData = [
  { id: uuidv4(), name: 'Esteban', username: 'arkemis' },
  { id: uuidv4(), name: 'Ivonne', username: 'IFentes' },
  { id: uuidv4(), name: 'Fabian', username: 'Fbravo' }
]

const App = () => {

  const [users, setUsers] = useState(userData)

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id)
    setUsers(updatedUsers)

  }

  const editRow = (user) => {

    // console.log(user)
    setEditing(true)

    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }



  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="row">
        <div className="col-6">


          {
            editing ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm currentUser={currentUser} 
                              updateUser={updateUser}/>
              </div>
            ) : (
                <div>
                  <h2>Add User</h2>
                  <AddForm setUsers={setUsers} />
                </div>
              )
          }

        </div>
        <div className="col-6">
          <h2>View Users</h2>
          <UserTable users={users}
                    deleteUser={deleteUser}
                    editRow={editRow} />
        </div>
      </div>
    </div>
  )
}
export default App