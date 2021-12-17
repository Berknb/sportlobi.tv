import { useState,useEffect } from 'react';
import styles from '../styles/Program.module.css'
import { useAuth } from '../firebase/ClientApp'

export default function Program() {
  const currentUser = useAuth();
  var user = currentUser?.email;
  function onclick(e){
    e.preventDefault();
    const karsılasma = (document.getElementById("mac").value)
    const kanal = (document.getElementById("kanal").value)
    const saat = (document.getElementById("saat").value)
    if (document.getElementById('alarm').checked) {
      var isalarm = "on"
  } else {
      isalarm = "off"
  }
  const alarm = isalarm
  const email = user
    const data = {
      karsılasmaAdı: karsılasma,
      kanal: kanal,
      saat: saat,
      email: email,
      alarm: alarm
    }
    
    
    fetch("https://sportlobitv-default-rtdb.europe-west1.firebasedatabase.app/Data.json",{
      method: "POST",
      body: JSON.stringify(data)
  })
  }
 
    return (
      <div className='mainBackground'>
            <div>
            <iframe className={styles.frameData} id="outputFrame" src="https://sport-tv-guide.live/sportwidget/eed6900a313d?time_zone=Europe%2FIstanbul&fc=35,26&time12=0&sports=1,5,9,7,8,57,39,40,14,6,42&bg=f8f8f9&bgs=b7b7b7&grp=1&sd=0&lng=11" style={{position:"relative",border:"none"}} frameBorder="0"></iframe>
            </div>
            <div className={styles.addwatch}>
              <form className={styles.card}>
              <label>Karşılaşma</label>
              <input type="text" id='mac'></input>
              <label>Kanal</label>
              <input type="text" id='kanal'></input>
              <label>Saat</label>
              <input type="time" id='saat'></input>
              <label>Alarm oluştur</label>
              <input type="checkbox" id='alarm'></input>
              <p>*mail adresinize karşılaşma başlamadan 30 dakika önce bildirim gelir.</p>
              <section className={styles.submit}>
              <button onClick={onclick}>Ekle</button>
              </section>
              </form>
              </div>
            
            </div>
        
    )
}
