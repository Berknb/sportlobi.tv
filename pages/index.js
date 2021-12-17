import styles from '../styles/index.module.css';
import Image from 'next/image';
import Tv from '../images/television.png';
export default function index() {
    return (
    
        <div className={styles.container}>
            <div className={styles.images}>
            <Image src={Tv} alt='izlemeListem' width={2658} height={2225}/>
            </div>
                
            <div className={styles.description}>
                <h1>
                <span style={{color:"red"}}>SportLobi.tv</span>&apos;de futboldan tenise, motor sporlarından bisiklete kadar 11 spor dalında<br/>
                tüm müsabakaların haftalık ve günlük programına ulaşabilir,<br/>
                izleme listene ekleyerek hiçbir müsabakadan habersiz kalmazsın!<br/>
                <br/>
                </h1>
                </div>
                <div className={styles.descriptionLinks}>
                    <h3>Hemen kayıt ol izleme listeni oluşturmaya başla. Akşama çok maç var acele et!</h3>
                    <ul>
                        <a href='Kayit'>kayıt ol !</a>
                        <a href='Program'>günün programı</a>
                    </ul>
                    </div>
            </div>
            
        
         
    )
}
