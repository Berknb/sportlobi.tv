import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';
import Logo from "../../images/sportLobiTv-logo.png";
import Image from 'next/image';
import Userpanel from '../../pages/userpanel';



export default function Navbar() {
   
    
    return (
        <>
        <header>
        <Userpanel/>
            <nav className={styles.nav}>
            <div className={styles.logo}>
            <Link href="/" passHref><Image src={Logo} alt="logo"/></Link>
            </div>
            <ul>
                <li><Link href="/">Ana sayfa</Link></li>
                <li><Link href="MyList">Listem</Link></li>
                <li><Link href="Program">Günün programı</Link></li>
                <li><Link href="Kayit">Kayıt ol</Link></li>
                
            </ul>
            </nav>
            
        </header>
        </>
    )
}
