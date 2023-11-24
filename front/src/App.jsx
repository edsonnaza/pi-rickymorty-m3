import { useState, useEffect } from 'react';
 
import Nav from './components/Layout/Nav';
import Cards from './components/Cards/Cards';
import ImgPrev from './components/ImgPrev/ImgPrev';
import Page404 from './views/page404';
import About from './views/About';
import Detail from './views/Detail';
import FavoritesChar from './components/favorites/FavoritesChar';
import axios from 'axios';
import imageAbout from './assets/rickymortyWallPaper.png';
import Form from './components/Form/Form';
import { miApiKey, EMAIL,PASSWORD } from './util/loginValidation';
import { useNavigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { allCharacters,deleteCharacter } from './redux/actions';
const URL = 'http://localhost:3005/rickandmorty/';

function App() {
   const PreIMG_INIT = [{image:'',name:''}];
   const [characters, setCharacters] = useState([]);
   const [logged, setLogged] = useState(true);
   const [loginMessage, setLoginMessage] = useState(true);
   const [preImg, setPreImg]=useState(PreIMG_INIT);
   const [responseData,setResponseData]=useState(true);
   const [errBarMessage, setErrBarMessage]=useState('');

   const dispatch = useDispatch();
  
   const navigate = useNavigate();
   

   const onLogin =  async (userInput)=>{
      try {
      setLoginMessage("");
     await axios(`${URL}login?email=${userInput.email}&password=${userInput.password}`).then(
         ({data})=>{
            const {access} = data;
            if(access){
               console.log('loged successfully!');
               setLogged(true);
               navigate('/');
            } else {
               setLoginMessage('User or password invalid, please try again!');
            }
         }
      
      )} catch (error){
         throw Error ({error:error.message});
      }
       

      }

   const cleanLoginMessage= ()=>{
      setLoginMessage('');
   }
   
   const logOut = ()=>{
      setLogged(false);
   }
   
   useEffect(()=>{
       !logged && navigate('/login');
    },[logged]);

   const onSearchPrevImg = async (id) =>{

      try { 
      setPreImg(PreIMG_INIT);
      setResponseData(true);
     await axios(`https://rym2.up.railway.app/api/character/${id}?key=${miApiKey}`).then(
         ({ data }) => {
            if(data.name){
                    
                  setPreImg([{image:data.image,name:data.name}]);
            } else {
               if(id!==Number(0))
               {  console.log(preImg.name);
                  setResponseData(false);
                  setErrBarMessage('Character not found!')
                  
               
               }
            }
         }
      ).catch(error =>console.log(error)) 
      } catch(error){
         throw Error({error: error.message});
      }
      
   }
   const onSearch = async (id)=> {
     try {

 
      const exists = characters.find(char => char.id === Number(id));

      if(exists) {
        setResponseData(false);
        setErrBarMessage('The character has been added already!');
        setPreImg([{image:'',name:''}]);
        return; 
      }

        axios(`https://rym2.up.railway.app/api/character/${id}?key=${miApiKey}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
               dispatch(allCharacters(data));
               setPreImg(PreIMG_INIT);
               
            } else {
               setResponseData(false);
               setErrBarMessage(`Id not found: ${id}`);
              // window.alert('¡Character not found with the ID!'+ id);
            }
         }).catch(error =>console.log(error))     
      } catch(error){
         throw Error ({error:error.message});
      }

      }
       
   

   const onClose = (id) => {
       
       setCharacters(characters.filter((item)=>item.id!==Number(id)));
       dispatch(deleteCharacter(id));
   }
   const pathname = useLocation();
 
   return (  
      <div  >
       
      
        { logged &&
       
         <Nav  
         logOut={logOut}
         logged={logged} 
         onSearch={onSearch} 
         onSearchPrevImg={onSearchPrevImg}  
         responseData={responseData} 
         errBarMessage={errBarMessage}/>
       
        
        }  
         <br />
       
         <Routes>
            <Route path='/login' element = {<Form onLogin={onLogin} loginMessage={loginMessage} cleanLoginMessage={cleanLoginMessage}/>} />
            <Route path='/' element={<Cards characters={characters} onClose={onClose} logged={logged} />} />
            <Route path='/favorites' element={<FavoritesChar characters={characters} onClose={onClose} logged={logged} />} />
            <Route path='/about' element={<About image={imageAbout} />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Page404 />} />
         </Routes>
         <br />
         <ImgPrev preImg={preImg} />
         <br />
        
         
      </div> 
   );
}

export default App;
