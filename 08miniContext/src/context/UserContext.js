// Go to the bottom of the file to know the steps
import React from "react";

const UserContext = React.createContext()


export default UserContext;


 

// it will in provider as children
{/* <UserContext>
      <Login />
      <Login />
      <Card>
        <Data />
      </Card>
</UserContext> */}


// Notes
// import React from "react";
// const UserContext = React.createContext()
// export default UserContext;
// each context is a provider
// warp all the components with <UserContext> variable, which now becomes or called a provider 
// create a ContextProvider file in context folder now
// put the wrapped thing in the provider file