import React, { useEffect, useState } from "react";
import { getUser, setConversation } from "../../services/api.js";

import { useContext } from "react";
import { AccountContext } from "../../context/accountProvider.jsx";

const MenuUserList = ({ filterUser }) => {
  const [userData, setUserData] = useState([]);
  const { account } = useContext(AccountContext);
  const { setPersonDetails } = useContext(AccountContext);
  const { personDetails } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUser();
      // console.log(response.userData);
      const filteredData = response?.userData?.filter((data) =>
        data?.name?.toLowerCase().includes(filterUser?.toLowerCase())
      );
      setUserData(filteredData);
      console.log(userData);
    };

    fetchData();
  }, [filterUser]);

  const handlePersonDetails = async (userData) => {
    setPersonDetails(userData);
    console.log(personDetails);
    
    //! creating conversation between two user
    await setConversation({ senderId: account.sub, receiverId: userData.sub });
  };
  return (
    <div className="w-[100%] h-16 mt-2">
      {userData &&
        userData.map((userData) => {
          return account.sub != userData.sub ? (
            <div
              key={userData.sub}
              className="flex px-5 py-3 border-gray-800 border-b-2 border-t-0 border-l-0 border-r-0 hover:bg-[#222e35]"
              onClick={() => handlePersonDetails(userData)}
            >
              <img
                src={userData.picture}
                className="w-[50px] h-[50px] rounded-full mr-3"
              />
              <p className="font-semibold">{userData.name}</p>
              {/* <p>This is msg</p> */}
            </div>
          ) : (
            ""
          );
        })}
    </div>
  );
};

export default MenuUserList;
