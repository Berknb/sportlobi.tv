import { useAuth } from '../firebase/ClientApp';
import {FaUserAlt} from 'react-icons/fa';
import { ImExit } from "react-icons/im";
import Link from 'next/link';
import { logout } from '../firebase/ClientApp';


export default function Userpanel() {
    const currentUser = useAuth();
    var usercheck = currentUser?.email
    console.log(usercheck+"user")
    if(usercheck == undefined){
        
        return <div className='userpanel'><Link href="giris">Giriş yap</Link></div>
    }else{
        
        return <div className='userpanel'><FaUserAlt/><ImExit onClick={logout} className='iconbutton'/>{usercheck}</div>
    }
    
    
    
}
