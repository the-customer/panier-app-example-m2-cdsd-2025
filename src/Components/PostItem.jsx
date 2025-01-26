import { FaTrashAlt, FaRegEdit } from "react-icons/fa";

export default function PostItem({posts,handleDelete}) {
  return (
    <>
        {posts.map(post=>(
            <div key={post.id} className="p-6 border-b">
                <div className="mb-4 flex justify-between items-start">
                    <div>
                        <h2 className="font-bold mb-2 text-lg text-indigo-500">{post.title}</h2>
                        <small className="text-gray-500 text-xs">Publié le {post.created_at}</small>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={()=>handleDelete(post.id)}>
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
