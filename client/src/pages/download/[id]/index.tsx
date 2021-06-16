import RenderFile from "@components/RenderFile"
import axios from "axios"
import { IFile } from "libs/types"
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next"
import fileDownload from 'js-file-download'



const index:NextPage<{
    file : IFile
}> = ({file : {name, format, sizeInBytes, id}}) => {


    const handleDownload = async() => {
        const {data} = await axios.get(`api/files/${id}/download`, {
            responseType : "blob",
        })

        fileDownload(data, name)
    }


    return (
        <div className="flex flex-col items-center justify-center py-3 space-y-4 bg-gray-800 rounded-md shadow-xl w-96">
           {
               !id ? 
               <span>Oops! File does not exist. Please check the URL</span>
               :
               <>
               <img src="/images/file-download.png" className="w-16 h-16"/>
               <h1 className="text-xl">Your file is ready to be downloaded!</h1>
               <RenderFile file={{format, name, sizeInBytes}}/>
               <button onClick={handleDownload} className="button">Download</button>
               </>
           } 
        </div>
    )
}

export async function getServerSideProps(context:GetServerSidePropsContext) {

    const {id} = context.query

    let file

    try {
        const {data} = await axios.get(`${process.env.API_BASE_POINT}api/files/${id}`)
        file = data
    } catch (error) {
        console.log(error.res.data);
        file = {}
    }

    return {
      props: {
          file,
      }, // will be passed to the page component as props
    }
  }

export default index
