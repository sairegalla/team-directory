import React, { useEffect, useState } from "react";

const listContext = React.createContext();

export const ListProvider = ({ children }) => {
  const [membersList, setMembersList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getListOfMembers();
  }, []);

  useEffect(() => {
    const filtered = membersList.filter((data) => {
      return data.first_name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredList(filtered);
  }, [searchText, membersList]);

  async function getListOfMembers() {
    const list = await fetch(
      "https://nijin-server.vercel.app/api/team-members"
    );

    const jsonList = await list.json();

    console.log(jsonList);

    setMembersList(jsonList);
  }

  return (
    <listContext.Provider value={{ filteredList, searchText, setSearchText }}>
      {children}
    </listContext.Provider>
  );
};
export default listContext;
