// 'use client';
// import { useState } from 'react';
// import styles from './page.module.css';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState(false);
//   const router = useRouter();

//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const res = await signIn('google', { redirect: false });
//       if (res?.error) {
//         setErr(res.error);
//         toast.error("Login failed, please try again.");
//       } else {
//         toast.success("Logged in successfully!");
//         router.push('/dashboard'); // Redirect after successful login
//       }
//     } catch (error) {
//       setErr("An unexpected error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const email = e.target[0].value;
//     const password = e.target[1].value;
//     signIn("credentials",{
//     email, 
//     password 
//   });

//   }
//   return (
//     <div className={styles.container}>
//       <div className={styles.leftContainer}>
//       <div className={styles.heading}>
//         <h3 className={styles.signup_heading}>Login</h3>
//       </div>
//         <div className={styles.formContainer}>
//           <form className={styles.form} onSubmit={handleSubmit}>
//             <input
//               className={styles.input}
//               type='text'
//               placeholder='Email'
//             />
//             <input
//               className={styles.input}
//               type='password'
//               placeholder='Password'
//             />
//             <div className={styles.submitContainer}>
//               <button className={styles.loginbutton} type='submit' disabled={loading}>
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className={styles.formContainer}>
//           <button className={styles.button} onClick={handleLogin} disabled={loading}>
//             <Image src='/2d75331.png' width={50} height={50} alt='google'/>
//             Login with Google
//           </button>
//         </div>
//         <div className={styles.loginContainer}>
//           <span className={styles.text}>
//             Do not have an account? <Link href='/register'>Sign Up</Link>
//           </span>
//         </div>
//       </div>
//       <div className={styles.rightContainer}>
//         <div className={styles.imageContainer}>
//           <Image className={styles.image} src="/application.gif" alt="login_image" fill={true} />
//         </div>
//       </div>
//       {err && <div>{err}</div>}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Login;

'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const session = useSession();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null); // Using null for errors
  const router = useRouter();
  if (session.status === 'Loading'){
    return(<p>Loading</p>)
  }

  if(session.status === 'authenticated'){
    router?.push("/dashboard");
  }
  const handleLoginWithGoogle = async () => {
    setLoading(true);
    try {
      const res = await signIn('google', { redirect: false });
      if (res?.error) {
        setErr(res.error);
        toast.error("Google login failed, please try again.");
      } else {
        toast.success("Logged in successfully!");
        router.push('/dashboard'); // Redirect after successful login
      }
    } catch (error) {
      setErr("An unexpected error occurred during Google login.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res?.error) {
        setErr(res.error);
        toast.error("Login failed, please check your credentials.");
      } else {
        toast.success("Logged in successfully!");
        router.push('/dashboard');
      }
    } catch (error) {
      setErr("An unexpected error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.heading}>
          <h3 className={styles.signup_heading}>Login</h3>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type='text'
              placeholder='Email'
              required
            />
            <input
              className={styles.input}
              type='password'
              placeholder='Password'
              required
            />
            <div className={styles.submitContainer}>
              <button className={styles.loginbutton} type='submit' disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
        <div className={styles.formContainer}>
          <button className={styles.button} onClick={handleLoginWithGoogle} disabled={loading}>
            <Image src='/2d75331.png' width={50} height={50} alt='google'/>
            {loading ? 'Logging in with Google...' : 'Login with Google'}
          </button>
        </div>
        <div className={styles.loginContainer}>
          <span className={styles.text}>
            Create the new account <Link href='/register'>Sign Up</Link>
          </span>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/application.gif" alt="login_image" fill={true} />
        </div>
      </div>
      {err && <div className={styles.error}>{err}</div>}
      <ToastContainer />
    </div>
  );
};

export default Login;
