import '../styles/AddUserForm.css';

const AddUserForm = ({setUsers}) => {

    const handleNewUserSubmit = e => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        const newUserData = {
            name: formData.get('name'),
            username: formData.get('username')
        }
        
        addNewUser(newUserData);

        e.target.reset();
    }

    const addNewUser = (newUserData) => setUsers( prev => [...prev, newUserData]);

    return (
        <>
        <h2>Add User</h2>
        <form onSubmit={(e) => handleNewUserSubmit(e)}>
            <label>Name</label>
            <input maxLength="15" name="name" required type="text" />
            <label>Username</label>
            <input maxLength="15" name="username" required type="text" />
            <button type="submit">Add User</button>
          </form>
        </>
    )
}

export default AddUserForm
