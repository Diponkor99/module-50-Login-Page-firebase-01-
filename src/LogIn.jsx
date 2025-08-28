import React from 'react';

const LogIn = () => {
    const handelOnSubmit=(event)=>{
        event.preventDefault();
      const Email=event.target.email.value;
      const Password=event.target.password.value;
      console.log("Email :",Email,
                  "Password :",Password)
    }
    return (
        <div className=' w-11/12  h-screen flex items-center mx-auto'>
            

            <section className='w-110 rounded-2xl mx-auto p-9 bg-lime-300 shadow shadow-2xl shadow-amber-500'>
                <h1 className='font-bold text-2xl mb-5'>LogIn page :</h1>
                <form onSubmit={handelOnSubmit}>
                    <h1 className='p-1'>Email:</h1>
                   <input type="email" name='email' placeholder="Please your Email:" className="input w-full" />
                   <h1 className='pt-3'>Password:</h1>
                   <input type="password" name="password" placeholder="Please your Password:" className="input w-full" />
                   <tr></tr>
                   <button className='btn my-3 w-full btn-success'>Submit</button>
                </form>

            </section>
        </div>
    );
};

export default LogIn;