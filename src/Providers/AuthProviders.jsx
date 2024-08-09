import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
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
        const totalCartProducts = [...cartProducts, newCartProduct];
        setCartProducts(totalCartProducts);
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

    // Function to handle the deletion of a product from the cart
    const handleDelete = (id) => {
        // Send DELETE request to remove the product from the server by its ID
        fetch(`http://localhost:5000/cartProducts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
    .then((res) => res.json()) // Parse the JSON response
    .then((data) => {
        console.log(data); // Log the response data for debugging

        if (data.success) { // Check if the deletion was successful
            // Show a success message using Swal
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Removed Successfully',
                showConfirmButton: false,
                timer: 1500,
            });

            // Filter out the deleted product from the cart and update the state
            const remaining = cartProducts.filter(
                (cartProduct) => cartProduct._id !== id
            );
            setCartProducts(remaining);
        } 
    })
    .catch((error) => {
        console.error('Error:', error); // Log the error for debugging
        alert('Failed to delete. Please try again later.'); // Show error message in case of failure
    });
};

    
   


    const info = {createUser, login, logOut, user, loading, handleAddToCart, cartProducts, setCartProducts, handleDelete}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;