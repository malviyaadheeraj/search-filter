import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        icon="search"
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <div style={{ marginTop: 20 }}>
        {searchInput.length > 1
          ? filteredResults.map((item, key) => {
              return (
                <div key={key}>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                  </div>
                </div>
              );
            })
          : APIData.map((item, key) => {
              return (
                <div key={key}>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
