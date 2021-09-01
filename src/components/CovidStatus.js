
import React, {useState,useEffect} from "react"
import Table from "./Table2"
function CovidStatus(){
    const [searchInput,setSearchInput] = useState("")
    const [searchResults,setSearchResults] = useState([])
    const [posts,setPosts] = useState([])


    async function fetchStatus(){
        const response = await fetch("https://api.covid19api.com/summary")
        const data = await response.json()
        setPosts(data.Countries)
      

    }

    function onChangeSearchValue (event) {
        setSearchInput(event.target.value)
        if(searchInput !== ""){
            const newList = posts.filter(eachCountry => 
                eachCountry.Country.toLowerCase().includes(searchInput)
                
           )
            setSearchResults(newList)
          
           
        }
        
    }
    useEffect(() => {
        fetchStatus();

    },[]);
    return(
        <div>
            <h1>Covid Status</h1>
            <div>
                <input type = "text" onChange = {onChangeSearchValue} placeholder = "search Using Country name"/>
                <Table datafromApi={searchInput.length<1?posts:searchResults}/>
            </div>
            
        </div>
    )

}

export default CovidStatus