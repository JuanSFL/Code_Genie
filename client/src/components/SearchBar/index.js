import React, {useState} from "react";
import {useQuery} from "@apollo/client"
import {QUERY_QUESTIONS} from "../../utils/queries"


function Searchbar() {
    const [query, setQuery] = useState("");
  
    const { loading, error, data } = useQuery(QUERY_QUESTIONS, {
      variables: { keyword: query },
    });
  
    function handleChange(event) {
      setQuery(event.target.value);
    }
  
    return (
      <div>
        <input
        className="searchbar"
          type="text"
          placeholder="Search for a solution"
          value={query}
          onChange={handleChange}
        />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <ul>
            {data.questions.map((question) => (
              <li key={question.id}>{question.questionText}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Searchbar;