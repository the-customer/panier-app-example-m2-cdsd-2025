import { useEffect, useState } from "react";

export default function Create() {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [activateBtn,setActivateBtn] = useState(false);


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
    console.log("Formulaire soumis")
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
            onChange={(e)=>setDescription(e.target.value)}
            cols="30" 
            rows="5"
            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"></textarea>
        </div>
        <button
          disabled={!activateBtn}
          className="bg-indigo-500 text-white block w-full p-2 rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          >Create</button> 
      </form>
    </>
  )
}
