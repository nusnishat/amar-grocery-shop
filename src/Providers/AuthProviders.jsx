import { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartProducts, setCartProducts] = useState([]);

    //signup
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn
    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

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
        const newCartProduct = {...product, email: user.email};
        console.log(newCartProduct);
        fetch('http://localhost:5000/cartProducts',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCartProduct)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

 // delete product from cart
const handleDelete = id => {
    const proceed = confirm('Are you sure?');
    if (proceed) {
        fetch(`http://localhost:5000/cartProducts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.success) {
                alert('Deleted successfully');
                const remaining = cartProducts.filter(cartProduct => cartProduct._id !== id);
                setCartProducts(remaining);
            } else {
                alert('Failed to delete. Product not found.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to delete. Please try again later.');
        });
    }
};

    
   


    const info = {createUser, login, logOut, user, loading, handleAddToCart, cartProducts, setCartProducts, handleDelete}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;