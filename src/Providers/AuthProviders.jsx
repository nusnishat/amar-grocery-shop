import { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    //logOut
    const logOut = () =>{
        return signOut(auth);
    }

    // to observe the use is login or not
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            setLoading(false);
        }) 
        return ()=>{
            unsubscribe();
        } 
    }, [])

    const handleAddToCart = product =>{
        const newOrder = {...product, email: user.email};
        console.log(newOrder);
        fetch('http://localhost:5000/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    const handleDelete = id =>{
        const proceed = confirm('Are you sure?')
        if(proceed)
        {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=>{
                console.log('deleted')
                if(data.deleteCount>0)
                {
                    alert('deleted successfully');
                    const remainig = orders.filter(order => order._id !==id);
                    setOrders(remainig);
                }
            })
        }
        
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    
   


    const info = {createUser, login, logOut, user, loading, handleAddToCart, orders, setOrders, handleDelete}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;