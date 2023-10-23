import Card from '../UI/Card' 
import classes from './UsersList.module.css'

const UsersList = (props) => {

  // Check if the users list is empty
  if (props.users.length === 0) {
    return;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
