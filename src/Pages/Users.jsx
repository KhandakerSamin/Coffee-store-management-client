import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-gamma-amber.vercel.app/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your user has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="mb-12 ml-4 mt-6">
                <Link to='/'><button className=' text-3xl'> Go to home</button></Link>
            </div>
            <h1 className="text-center text-4xl mt-10 mb-10">Total Users Count : {users.length}</h1>
            <div className="overflow-x-auto flex justify-center mx-40 rounded-lg bg-gray-200 mb-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-serif text-lg ">SL</th>
                            <th className="font-serif text-lg ">Email</th>
                            <th className="font-serif text-lg ">Created Time</th>
                            <th className="font-serif text-lg ">Last Logged in</th>
                            <th className="font-serif text-lg ml-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className="font-serif text-lg ">{index + 1}</th>
                                <td className="font-serif text-lg ">{user.email}</td>
                                <td className="font-serif text-lg ">{user.createdAt}</td>
                                <td className="font-serif text-lg ">{user.lastLoggedAt}</td>
                                <td className="flex justify-center items-center gap-x-4 mr-3 ">

                                    <button onClick={() => handleDelete(user._id)} className='bg-red-700 rounded-lg w-8 h-8 flex justify-center items-center'>
                                        <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M3.33333 17.7778C3.33333 19.0056 4.32776 20 5.55557 20H14.4445C15.6722 20 16.6667 19.0056 16.6667 17.7778V4.44446H3.33333V17.7778Z" fill="white" />
                                            <path d="M13.8889 1.11109L12.7778 0H7.22224L6.11109 1.11109H2.22224V3.33333H17.7778V1.11109H13.8889Z" fill="white" />
                                        </svg></a>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;