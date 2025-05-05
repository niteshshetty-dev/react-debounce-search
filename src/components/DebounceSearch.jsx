import { useEffect, useState } from "react";

function DebounceSearch() {
  let userList = ["Amar", "Akbhar", "Antony"];
  const [matchedUser, setmatchedUser] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function handleInput(e) {
    setSearchInput(e.target.value.trim().toLowerCase());
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setmatchedUser(() =>
        searchInput
          ? userList.filter((user) => user.toLowerCase().includes(searchInput))
          : []
      );
    }, 500);

    return () => clearTimeout(timeOut);
  }, [searchInput]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search..."
          onChange={handleInput}
        ></input>
        {matchedUser && matchedUser.map((user, i) => <li key={i}>{user}</li>)}
      </div>
    </>
  );
}

export default DebounceSearch;
