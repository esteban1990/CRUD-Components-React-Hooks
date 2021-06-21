import React, { useState } from 'react'




export const EditUserForm = ({ currentUser, updateUser, setEditing }) => {


    const [user, setUser] = useState(currentUser)

    const handleInputChangeName = (e) => {
        setUser({
            ...user,
            name: e.target.value
        })
    }

    const handleInputChangeUsername = (e) => {
        setUser({
            ...user,
            username: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(user.id,user)
    }


    return (
        <form
            onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChangeName}
                />
            </div>

            <div className="form-group">
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChangeUsername}
            />
            </div>

    
           
            <button className="btn btn-success">Update user</button>
            <button
                onClick={() => setEditing(false)}
                className="btn btn-primary"
            >     Cancel
      </button>
        </form>
    )
}

// export default EditUserForm




















