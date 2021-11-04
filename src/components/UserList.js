import '../styles/UserList.css';

const UserList = ({ users, setUsers, setEditing, setCurrentlyEditing }) => {

    const handleUserDelete = (index) => setUsers( prev => prev.filter( (_, ind) => ind !== index));

    const handleUserEdit = (index) => {
        setCurrentlyEditing({
            key: index,
            name: users[index].name,
            username: users[index].username
        });

        setEditing(true);
    }

    return (
        <table>
            <thead>
                <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                users &&
                users.map( (user, index) => (
                    <tr key={user+'_'+index}>
                        <td><p>{user.name}</p></td>
                        <td><p>{user.username}</p></td>
                        <td>
                            <button onClick={() => handleUserEdit(index)} className="button-edit" type="button">
                                Edit
                            </button>
                            <button onClick={() => handleUserDelete(index)} className="button-delete" type="button">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>

    )
}

export default UserList
