import Dropzone from '@components/Dropzone'
import RenderFile from '@components/RenderFile';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {

  const [file, setFile] = useState(null)
  const [id, setId] = useState(null)
  const [downloadPageLink, setDownloadPageLink] = useState(null)
  const [upload, setUpload] = useState<"Uploading"|"Upload Failed"|"Uploaded"|"Upload">("Upload")
  
  const handleUpload = async() => {
    if(upload === "Uploading") return;
    setUpload("Uploading")
    const formData = new FormData()
    formData.append("myFile", file)

    try {
      const {data} = await axios({
        method : "post",
        data : formData,
        url : "/api/files/upload",
        headers : {
          "Content-type" : "multipart/form-data",
        }
      })

      setDownloadPageLink(data.downloadPageLink)
      setId(data.id)
    } catch (error) {
      console.log(error.response.data);
      setUpload("Upload Failed")
    }
  }
  

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="my-4 text-3xl font-medium">Instant File Share</h1>
      <div className="w-96 flex flex-col items-center bg-gray-800 shadow-xl rounded-xl justify-center">

        <Dropzone setFile={setFile}/>

    {
      file &&(
        <RenderFile file={{
          format:file.type.split("/")[1],
          name:file.name,
          sizeInBytes:file.size,
        }}
        />
    )}

        <button onClick={handleUpload} className="p-2 my-5 bg-gray-900 rounded-md focus:outline-none">{upload}</button>
      </div>
    </div>
  );
}
