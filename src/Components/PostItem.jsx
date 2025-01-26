import { useState } from "react";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

export default function PostItem({posts,handleDelete}) {
    const [editing,setEditing] = useState(false);
    const [editedArticle,setEditedArticle] = useState(null);
    const onEdit = (post)=>{
        setEditedArticle({...post})
        setEditing(true);
    }
  return (
    <>
    {editing===true && <div className="bg-gray-50 absolute w-full h-screen top-0 left-0 flex justify-center items-center">
        <form className="w-1/2" onSubmit={(e)=>handleSubmit(e)}>
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
            onClick={()=>setEditing(false)}
            className="absolute top-5 right-5 text-red-600 underline underline-offset-2">Close</button>
    </div>}



        {posts.map(post=>(
            <div key={post.id} className="p-6 border-b">
                <div className="mb-4 flex justify-between items-start">
                    <div>
                        <h2 className="font-bold mb-2 text-lg text-indigo-500">{post.title}</h2>
                        <small className="text-gray-500 text-xs">Publié le {post.created_at}</small>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={()=>onEdit(post)}>
                            <FaRegEdit className="text-orange-500 w-5 h-5"/>
                        </button>
                        <button onClick={()=>handleDelete(post.id)}>
                            <FaTrashAlt className="text-red-500 w-5 h-5"/>
                        </button>
                    </div>
                </div>
                <p>{post.description}</p>
            </div>
        ))}
        {posts.length == 0 && <p className="text-red-500 pt-10">Pas d'articles</p>}
    </>
  )
}
