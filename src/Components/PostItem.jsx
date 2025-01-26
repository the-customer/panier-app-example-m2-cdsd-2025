import { useState } from "react";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import ModalEdit from "./ModalEdit";
import { API_URL } from "../utils/consts";



export default function PostItem({posts,setPosts,handleDelete}) {
    const [editedArticle,setEditedArticle] = useState(null);
    const onEdit = (post)=>{
        setEditedArticle({...post})
    }
    const onSaveEditArticle = (e) =>{
        e.preventDefault();
        //Enregistrer les modification dans la base de donees
        fetch(`${API_URL}/posts/${editedArticle.id}`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedArticle)
        }).then(()=>{
            console.log("Les donnees sont enregistrees");
            //mettre a jour l'etat pour que le dom s'actualise
            setPosts(currentPosts=>
                currentPosts.map(p => p.id === editedArticle.id ? {...editedArticle} : p)
            );
            //Fermer la boite modale
            setEditedArticle(null)
        });
        
    }
  return (
    <>

<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
    </div>
</form>

    {
        editedArticle !==null && 
        <ModalEdit 
            handleEdit={onSaveEditArticle}
            setEditedArticle={setEditedArticle} 
            editedArticle={editedArticle}/>
    }


        <p>
            mot recherché :
        </p>
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
