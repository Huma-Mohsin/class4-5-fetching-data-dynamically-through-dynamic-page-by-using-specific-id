async function UserPage(props: any) {
    const url = "https://jsonplaceholder.typicode.com/users/5"; // fetching data for user 5
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    console.log(response); // logging full response
  
    return (
      <div>
        <h1
          style={{
            color: "magenta",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "underline",
            padding: "20px",
            margin: "20px",
          }}
        >
          Welcome To Dynamic Page
        </h1>
  

        <h2
          style={{
            color: "green",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "underline",
            padding: "20px",
            margin: "20px",
          }}
        >
          Get Complete Information Regarding Users/5
        </h2>
        {/* Render the full object as a string */}

        <h3 style={{fontSize:"15px",fontWeight:"bold"}}>{JSON.stringify(response, null,10)}</h3> {/* This displays the entire object */}
  
        <h2
          style={{
            color: "green",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "underline",
            padding: "20px",
            margin: "20px",
          }}
        >
          Get Specific Information Regarding Users/5
        </h2>
  
        {/* Now render specific properties */}
        <h3 style={{fontSize:"15px",fontWeight:"bold"}}>Name:    {response.name}</h3>
        <h3 style={{fontSize:"15px",fontWeight:"bold"}}>ID:     {response.id}</h3>
        <h3 style={{fontSize:"15px",fontWeight:"bold"}}>Email:  {response.email}</h3>
        <h3 style={{fontSize:"15px",fontWeight:"bold"}}>Website:  {response.website}</h3>
        
      </div>
    );
  }
  
  export default UserPage;
  