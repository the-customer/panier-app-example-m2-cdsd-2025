import { useEffect, useState } from "react";
import { API_URL, MAX_DESCRIPTION_LENGTH } from "../utils/consts";
import { useNavigate } from "react-router-dom";


export default function Create() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [activateBtn,setActivateBtn] = useState(false);
  const [nbrCharacters,setNbrCharacters] = useState(0);

  const navigate = useNavigate();

  useEffect(()=>{
    // if(title !== ''){
    //   setActivateBtn(true)
    // }else{
    //   setActivateBtn(false)
    // }
    //ou bien
    // title !== '' ? setActivateBtn(true) : setActivateBtn(false)
    setActivateBtn(title.trim() !== '' && description.trim() !== '' ? true : false)
  },[title,description])

  const handleSubmit = (e)=>{
    e.preventDefault();
    //Creer un article:
    const newArticle = {
      title: title,
      description: description,
      created_at : new Date().toLocaleDateString()
    };
    //Envoyer les donnees dans le serveur:
    fetch(`${API_URL}/posts`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newArticle)
    })
    .then((response)=>{
      navigate("/")
    })
  }
  
  const handleDescription = (e)=>{
    const newDescription = e.target.value;
    if(newDescription.length <= MAX_DESCRIPTION_LENGTH){
      setDescription(newDescription);
      setNbrCharacters(newDescription.length)
    }
    
  }

  return (
    <>
      <div className="text-2xl">Create</div>
      <form className="w-1/2" onSubmit={(e)=>handleSubmit(e)}>
        <div className="mb-4">
          <label>Article title</label>
          <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            type="text"
            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"/>
        </div>
        <div className="mb-4">
          <label>Article Description</label>
          <textarea 
            value={description}
            onChange={(e)=>handleDescription(e)}
            cols="30" 
            rows="5"
            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"></textarea>
            <div className="text-right">
              <small 
                className={nbrCharacters >= MAX_DESCRIPTION_LENGTH ? 'text-red-500' : 'text-green-500'}>Max : {nbrCharacters}/{MAX_DESCRIPTION_LENGTH} Caracteres</small>
            </div>
        </div>
        <button
          disabled={!activateBtn}
          className="bg-indigo-500 text-white block w-full p-2 rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          >Create</button> 
      </form>
    </>
  )
}
