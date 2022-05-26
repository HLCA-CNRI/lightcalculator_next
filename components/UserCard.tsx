import React, { memo } from 'react';
import { useDispatch,useSelector } from '../store/store';
import { getUser1State, setEmail,setName } from '../store/slices/userSlice';
import { getUser2State ,setName1, setEmail1} from '../store/slices/otherUserSlice';


const UserCard = () =>{
    const dispatch = useDispatch();
    // const { name, email } = useSelector(getUser1State);


    const onClick1 = () => {
        setTimeout(() => {
          dispatch(setName('Elizabeth'));
          dispatch(setEmail('jsdbfkjadsbfkabdshfbak@kdjafbkjdsbf.com'));
        }, 20);
    };


    // console.log('user info', name, email);

    return(
        <div>
            {/* <div>NAME {name}</div>
            <div>EMAIL {email}</div> */}
            <button onClick={onClick1}>Click me</button>
        </div>
    )
}

export default UserCard