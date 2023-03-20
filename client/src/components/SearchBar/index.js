import React from "react";
import {useQuery} from "@apollo/client"
import {QUERY_QUESTIONS} from "../../utils/queries"


function Searchbar() {
    //write onchange cuntion to handle changes to serarch bar
    return (
        
        <input className="searchbar" placeholder="Search for a solution" type="text" title="Search"></input>
    )
}

export default Searchbar;