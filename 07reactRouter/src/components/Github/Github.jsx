// import React, { useEffect, useState } from "react";

// function Github() {
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/anilsingh97153")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setUser(data);
//       });
//   }, []);
//   return (
//     <>
//       <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
//         Github followers:{user.followers}
//       </div>
//       <img src={user.avatar_url} alt="Git pivture" width={250} />
//     </>
//   );
// }

// export default Github;

// apart from react above method of fetching data, now we have new concept added in react router - loader

// fetching followers using loader - loader will allow us to directly make data calls from route only. Go to main.jsx file to see. it is basically done for the optimization. video stamp - 7:7:00 react part -1 on "chai aur code". also to load the data using loader, we have a pre defined hook in react-router, useLoaderData.
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const user = useLoaderData()
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers:{user?.followers}
        <img className="m-4" src={user?.avatar_url} alt="Git pivture" width={250} />
      </div>
      
    </>
  );
}

export default Github;


export const gitInfoLoader = async() => {
  const response = await fetch("https://api.github.com/users/anilsingh97153")
  return response.json()
}