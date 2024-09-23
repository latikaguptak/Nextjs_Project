<<<<<<< HEAD
'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast'; // Import toast for notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Register = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [signupUser, setSignupUser] = useState(initialValue);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setSignupUser({
      ...signupUser,
      [name]: value,
    });
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = signupUser;

    try {
      setLoading(true);
      const res = await fetch("/api/register", { 
        method: 'POST',
        body: JSON.stringify({ firstname: firstName, lastname: lastName, email, password}), 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 201) {
        toast.success("Account created successfully!"); // Changed message
        router.push('/dashboard/login?success=Account has been created');
        setSignupUser(initialValue); 
      } else {
        const errorText = await res.text();
        setErr(errorText || "Something went wrong"); // Improved error message
      }
    } catch (err) {
      setErr("An unexpected error occurred"); // Generic error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.heading}>
          <h3 className={styles.signup_heading}>Signup</h3>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.inputs}
              type="text"
              name="firstName"
              placeholder="Firstname"
              required
              onChange={handlerChange}
              value={signupUser.firstName}
            />
            <input
              className={styles.inputs}
              type="text"
              name="lastName"
              placeholder="Lastname"
              required
              onChange={handlerChange}
              value={signupUser.lastName}
            />
            <input
              className={styles.inputs}
              type="email"
              name="email"
              required
              onChange={handlerChange}
              placeholder="Email"
              value={signupUser.email}
            />
            <input
              className={styles.inputs}
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handlerChange}
              value={signupUser.password}
            />

            <div className={styles.submitContainer}>
              <button className={styles.button} type="submit" disabled={loading}>
                Signup
              </button>
            </div>
          </form>
        </div>
        <div className={styles.loginContainer}>
          <span className={styles.text}>
            Already have an account? <Link href='/dashboard/login'>Sign In</Link>
          </span>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/application.gif" alt="signup_image" fill={true} />
        </div>
      </div>
      {err && <div>{err}</div>} {/* Display specific error message */}
      <ToastContainer /> {/* To display notifications */}
    </div>
  );
};

export default Register;
=======
import React from 'react'
import style from'./page.module.css'
const Register = () => {
  return (
    <div className={style.container}>Register</div>
  )
}

export default Register
>>>>>>> 816b114cda7a6f25b33d1810b6160b1931c91ae1
