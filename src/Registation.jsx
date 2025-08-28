
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { Link } from 'react-router-dom';
import { auth } from './firebase.init';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

const Registation = () => {

  const [errormasses , setErrormasses]=useState("")
  const handelonSubmit=(event)=>{
    event.preventDefault()
    setErrormasses('')
    
      const FirstName=event.target.firstN.value;
      const LastName=event.target.LastN.value;
      const Email=event.target.email.value;
      const Password=event.target.password.value;
      console.log(FirstName, LastName, Email, Password)
      //password valitation ....
      if(Password.length < 5){
        setErrormasses('Please add at least 6 characters in password')
          return;}

        const UpperCharacter=/[A-Z]/;        //Uppercase Character cheack??
      if (!UpperCharacter.test(Password)) {
        setErrormasses('Please add at least uppercase characters in password')
        return;
      } 
      
      const lowerCase=/[a-z]/;     //lowerCase character cheack???
      if(!lowerCase.test(Password)){
        setErrormasses('Please add at least lowerCase characters in password')
        return;
      }

      const spacalCharacter=/[!@#$%&?]/;    // least one special character in password
         if(!spacalCharacter.test(Password)){
          setErrormasses('Please add at least special character in password')
          return;
         }
      

      //firebase add email & password.....
      createUserWithEmailAndPassword(auth,Email, Password)
      .then(result=>{
        console.log(result);
        toast.success("Registration Successful 🎉");
      })
      .catch(error=>{
        console.log(error);
        setErrormasses(error.message);
      })

  }
    return (
        <div>
          <ToastContainer position="top-right" autoClose={5000} Teanstion={Bounce} ></ToastContainer>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration Now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handelonSubmit}>
      <fieldset className="fieldset">
        <label className="label">First Name</label>
          <input type="text" name='firstN' className="input" placeholder="First Name" />
          <label className="label">Last Name</label>
          <input type="text" name='LastN' className="input" placeholder="Last Name" />

          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Register Now</button>
        </fieldset>
       </form>
{errormasses && <p className="text-red-600 font-semibold">{errormasses}</p>}
       <p className='flex justify-end'>Already Register.<Link to="/login" className='text-red-800 hover:underline'>Please logIn</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registation;