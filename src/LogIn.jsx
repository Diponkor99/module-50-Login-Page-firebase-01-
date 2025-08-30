import { signInWithEmailAndPassword,} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase.init';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LogIn = () => {
    const [errormessage, setErrormessage]=useState('')
    const [SuccessMessage , setSuccessmessage]=useState(false);
    const[showPassword , setShowPassword]=useState(false);
    const handelOnSubmit = (event) => {
        event.preventDefault();
        const Email = event.target.email.value;
        const Password = event.target.password.value;
        console.log("Email :", Email,"Password :", Password)
        setErrormessage('')
        setSuccessmessage(false)
        //User login...
        signInWithEmailAndPassword(auth , Email, Password)
        .then(result=>{
            console.log(result)
            setSuccessmessage(true)

        })
        .catch(error=>{
            console.log(error.message)
            setErrormessage(error.message)
        })
    }
    return (
       
        <div className=' w-11/12  h-screen flex items-center mx-auto'>

          
            <section className='w-110 rounded-2xl mx-auto p-9 bg-lime-300 shadow shadow-2xl shadow-amber-500'>
                <h1 className='font-bold text-2xl mb-5'>LogIn page :</h1>
                <form onSubmit={handelOnSubmit} className='relative'>
                    <h1 className='p-1'>Email:</h1>
                    <input type="email" name='email' placeholder="Please your Email:" className="input w-full" />
                    <h1 className='pt-3'>Password:</h1>
                    <input type={showPassword ? "text":"password"} name="password" placeholder="Please your Password:" className="input w-full" />
                    {/* showPassword react Icone */}
                    <h1 onClick={()=>(setShowPassword(!showPassword))} className='absolute right-4 top-30'>{showPassword ? <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</h1>
                    <a className='flex justify-end hover:underline' href="">Forget Password?</a>
                    <tr></tr>
                    <button className='btn my-3 w-full btn-success'>Submit</button>
                </form>
                {
                    errormessage && <p className=' text-red-700'>{errormessage}</p>
                }
                {
                    SuccessMessage && <p className='text-green-800'>Success your login</p>
                }
            <h1 className='font-medium text-xl text-amber-900'>Please create an account! <Link className='hover:underline text-xl font-bold' to='/reg'>Sign Up</Link></h1>
            </section>
        </div>
    );
};

export default LogIn;