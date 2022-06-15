

import React, { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState(null);

  return (
    <div>
      <h1>Upload your Image here :</h1>
      {image && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(image)} />
        <br />
        <button onClick={()=>setImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;

