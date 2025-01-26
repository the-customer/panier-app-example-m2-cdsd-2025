import React from 'react'

export default function ModalEdit({editedArticle,setEditedArticle,handleEdit}) {
  return (
    <div className="bg-gray-50 absolute w-full h-screen top-0 left-0 flex justify-center items-center">
        <form className="w-1/2" onSubmit={(e)=>handleEdit(e)}>
            <div className="mb-4">
            <label>Article title</label>
            <input
                value={editedArticle.title}
                onChange={(e)=>setEditedArticle({...editedArticle,title:e.target.value})}
                type="text"
                className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"/>
            </div>
            <div className="mb-4">
            <label>Article Description</label>
            <textarea 
                value={editedArticle.description}
                onChange={(e)=>setEditedArticle({...editedArticle,description:e.target.value})}
                cols="30" 
                rows="5"
                className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"></textarea>
            </div>
            <button
            className="bg-indigo-500 text-white block w-full p-2 rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            >Edit</button> 
        </form>
        <button 
            type="button"
            onClick={()=>setEditedArticle(null)}
            className="absolute top-5 right-5 text-red-600 underline underline-offset-2">Close</button>
    </div>
  )
}
