const EditUserForm = ({setUsers, setEditing, users, currentlyEditing, setCurrentlyEditing}) => {
    
    const handleUpdate = e => {
        e.preventDefault();

        const editFormData = new FormData(e.target);

        const updatedUser = {
            key: currentlyEditing.key,
            name: editFormData.get('name'),
            username: editFormData.get('username')
        }

        updateUser(updatedUser);
        setEditing(false);
        }

    const updateUser = updatedUser => setUsers(users.map( (user, index) => (index === updatedUser.key ? updatedUser : user) ));

    const handleCancel = e => {
        e.preventDefault();
        setEditing(false);
    }
    
    const handleNameChange = e => {
        setCurrentlyEditing( prev => (
            {
                key: prev.key,
                name: e.target.value,
                username: prev.username
            }
        ));
    }

    const handleUsernameChange = e => {
        setCurrentlyEditing( prev => (
            {
                key: prev.key,
                name: prev.name,
                username: e.target.value
            }
        ));
    }



    return (
        <>
        <h2>Edit User</h2>
        <form onSubmit={e => handleUpdate(e)}>
            <label>Name</label>
            <input onChange={e => handleNameChange(e)} maxLength="15" name="name" required type="text" value={currentlyEditing.name} />
            <label>Username</label>
            <input onChange={e => handleUsernameChange(e)} maxLength="15" name="username" required type="text" value={currentlyEditing.username} />
            <button type="submit">Update</button>
            <button onClick={e => handleCancel(e)} type="submit">Cancel</button>
          </form>
        </>
    )
}

export default EditUserForm
