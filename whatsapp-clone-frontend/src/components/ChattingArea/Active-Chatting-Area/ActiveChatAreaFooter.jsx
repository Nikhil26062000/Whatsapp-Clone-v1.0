import React, { useEffect } from "react";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import { uploadFileToDB } from "../../../services/api";

const ActiveChatAreaFooter = ({setTextValue,sendText,textValue,setFile,file,setImageUrl}) => {
  useEffect(()=>{

    const setImage = async() =>{
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);
        let response = await uploadFileToDB(data);
        setImageUrl(response.data.message)
      }
    }
    setImage();
  },[textValue,file])

  const onFileChange = (e) => {
    console.log(e);
    setFile(e.target.files[0]);
    setTextValue(e.target.files[0].name)
    
  }
  return (
    <div className="bg-[#202c33] flex items-center justify-center h-[10vh]">
      <EmojiEmotionsOutlinedIcon className="mr-2 text-[#aebac1]" />
      <label htmlFor="fileInput">
        <AddOutlinedIcon className="mr-2 text-[#aebac1]" />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{display:'none'}}
        onChange={(e)=>onFileChange(e)}
      />
      
      <input
        type="text"
        placeholder="Type your Message"
        className="w-[85%] rounded-lg h-9 px-4 bg-[#2a3942] outline-none text-sm"
        onChange={(e)=>setTextValue(e.target.value)}
        onKeyDown={(e)=>sendText(e)}
        value={textValue}
      />
      <MicOutlinedIcon className="ml-4 text-[#aebac1]" />
    </div>
  );
};

export default ActiveChatAreaFooter;
