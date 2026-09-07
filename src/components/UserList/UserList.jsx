import UserCard from '../UserCard/UserCard.jsx'
import users from '../../data/data.json'
import './UserList.css'

const UserList = () => {
    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList
