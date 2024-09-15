import {useContext} from 'react';
import { UserContext } from './Contexts';

function withUser(IncomingComponent){
  function OutgoingComponent(props){
    const { user,setUser } = useContext(UserContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />
  } 
  return OutgoingComponent;
}

export default withUser;