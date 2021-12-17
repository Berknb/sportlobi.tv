import React from 'react';
import { Signup, logout, login ,useAuth} from '../firebase/ClientApp';
import { useRef, useState } from 'react';
import styles from "../styles/Kayit.module.css";
import Link from 'next/link';



export default function SignUp() {    
const [loading, setLoading] = useState(false);
const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

   async function handleSignup(){
       setLoading(true);
       try{
await Signup(emailRef.current.value, passwordRef.current.value)
       } catch {
           alert("Email adresinizi doğru girdiğinizden emin olun ve en az 6 karakterlik bir şifre girin ! ");
           setLoading(false);
       }
    }
    
    async function handleLogin(){
        setLoading(true);
        try{
 await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert("Şifrenizi doğru girdiğinizden emin olun (capslock açık mı kapalı mı kontrol edin) ve Emailinizi doğru girdiğinizden emin olun!")
            setLoading(false);
        }
     }
    async function handleLogout(){
        setLoading(true)
        try{
            await logout();
        }catch{
        }
setLoading(false)
    }
 
    return (
        
            <div className={styles.container}>
                <form className={styles.card}>
                    <h2>Kayıt ol<hr/></h2>
                        <label>Email</label>
                        <input type="email" ref={emailRef}/>
                        <label>Şifre</label>
                        <input type="password" ref={passwordRef} onenter={handleSignup}/>
                     
                    <section className={styles.submit}>
                    <button type="submit" disabled={loading || currentUser} onClick={handleSignup}>
                        Kayıt ol
                    </button>
                    
              </section>
              <label >Zaten üye misiniz? <Link href='giris'>Giriş yapmak için tıklayın</Link></label>
                    </form>
                    {/* <button type="submit" disabled={!currentUser} onClick={handleLogout}>
                        Çıkış yap
                    </button>
                    <button type="submit" disabled={loading || currentUser} onClick={handleLogin}>
                        Giriş yap
                    </button> */}
                    
                </div>
               
            
      
        
    )
}
