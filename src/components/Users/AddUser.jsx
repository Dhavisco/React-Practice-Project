import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import { useState } from 'react';

const AddUser = (props) => {

    const addUserHandler = (event) =>{
            event.preventDefault();
            console.log(enteredUsername, enteredAge);
    };
 
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };


  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label className='username'>Username</label>
       <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
       <input id="age" type="number" onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser;