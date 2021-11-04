import AddUserForm from './components/AddUserForm';
import './styles/App.css';
import { useState } from 'react';
import UserList from './components/UserList';
import EditUserForm from './components/EditUserForm';

function App() {

  const initialUserList = [];

  const [users, setUsers] = useState(initialUserList);
  
  const [editing, setEditing] = useState(false);

  const [currentlyEditing, setCurrentlyEditing] = useState({
    key: null,
    name: '',
    username: ''
  });

  return (
    <div className="App">
      <h1>React User Dashboard CRUD</h1>
      <div className="content">
        <div className="UserFormWrapper">
          {
            !editing
            ?
            <AddUserForm setUsers={setUsers}/>
            :
            <EditUserForm setCurrentlyEditing={setCurrentlyEditing} currentlyEditing={currentlyEditing} setEditing={setEditing} users={users} setUsers={setUsers} />
          }
        </div>
        <div className="UserList">
          <h2>User List</h2>
          <UserList setCurrentlyEditing={setCurrentlyEditing} setEditing={setEditing} users={users} setUsers={setUsers} />
        </div>
      </div>
    </div>
  );
}

export default App;
