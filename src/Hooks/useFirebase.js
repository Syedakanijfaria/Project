import initializeFirebase from '../Pages/Login/Firebase/firebase.init.js';
import { useState } from 'react';

//here we initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});




    return {
        user,
    }
}

export default useFirebase;
