import { useEffect,useState } from 'react';
import { useAuth } from '../firebase/ClientApp';
import Image from 'next/image';
import Basket from '../images/basket.jpg';
import Futbol from '../images/futbol.jpg';
import Tenis from '../images/tenis.jpg';
import Motor from '../images/motor.jpg';

export default function MyList() {

    const currentUser = useAuth();
    const [Loading,setLoading] = useState(true);
    const [LoadedData,setLoadedData] = useState([]);
    
   var usercheck = currentUser?.email
    useEffect(() => {
        fetch("https://sportlobitv-default-rtdb.europe-west1.firebasedatabase.app/Data.json").then((response) => {return response.json()}).then(data => {
          const matchsData = [];
        
          for (const key in data){
            if(data[key].email == usercheck){
              const matchData = {
                id: key,
                ...data[key]
                
              }
              matchsData.push(matchData);
            }
            
            
        
          }
          setLoading(false)
          setLoadedData(matchsData)
          
         })  
       },[usercheck])
  
       if(Loading === true){
           return <p>Loading...</p>
       }
       if(usercheck !== undefined && LoadedData.length != "0")
{
      return (
        <ul className='listem'>
          
        {LoadedData.map((data) => (
          <li key="">
              <div className='card'>
              <p><label>Karşılaşma: </label> {data.karsılasmaAdı}</p>
              <p><label>Kanal: </label>{data.kanal}</p>
              <p><label>saat: </label>{data.saat}</p>
              </div>
        </li>
        
        ))}
        
      </ul>
    )
    }else if(usercheck == undefined){
return <div className='bosliste'>
  <h3>İzleme listeni oluşturmaya başlamak için hemen&nbsp;<a href='Kayit'>Kayıt ol!</a></h3>
  <div className='listimages'>
  <Image src={Basket} alt='basket' width={315} height={500}/>
  <Image src={Tenis} alt='Tenis' width={315} height={500}/>
            <Image src={Futbol} alt='Futbol' width={315} height={500}/>
            <Image src={Motor} alt='Motor' width={315} height={500}/>
            </div>
 </div>
    } else if(usercheck !== undefined && LoadedData.length == "0"){
      return <div className='bosliste'>
  <h3>İzleme listen henüz boş... listene müsabaka eklemeye hemen&nbsp;<a href='Program'>Başla</a></h3>
  <div className='listimages'>
  <Image src={Basket} alt='basket' width={315} height={500}/>
  <Image src={Tenis} alt='Tenis' width={315} height={500}/>
            <Image src={Futbol} alt='Futbol' width={315} height={500}/>
            <Image src={Motor} alt='Motor' width={315} height={500}/>
            </div>
 </div>
    }   
    
}
