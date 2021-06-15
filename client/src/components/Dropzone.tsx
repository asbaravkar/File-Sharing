import { Dispatch, FunctionComponent, useCallback } from "react"
import { useDropzone } from "react-dropzone"

const Dropzone: FunctionComponent<{setFile : Dispatch<any>}> = ({setFile}) => {

    const onDrop = useCallback(
        (acceptedFiles)=>{
            console.log(acceptedFiles);
            setFile(acceptedFiles[0])
        }, [],
    )

    const {getRootProps, getInputProps, isDragAccept, isDragReject} = useDropzone({
        onDrop,
        multiple : false,
        accept : "image/jpeg, image/png, audio/*, text/*, video/*, application/*"
     })

    return (
        <div className="p-4 w-full">
            
            <div {...getRootProps()} className="h-80 w-full rounded-md cursor-pointer focus:outline-none">
                <input {...getInputProps()}/>

                <div className={"flex flex-col items-center justify-center border-2 border-dashed border-yellow-light rounded-xl h-full space-y-3 "
            
                + (isDragReject === true ? "border-red-500" : "")
                + (isDragAccept === true ? "border-green-500" : "")

                }>
                    <img src="/images/folder.png" alt="folder" className="h-16 w-16"></img>
                    {
                        isDragReject ? <p>Sorry, this file format is not supported</p> : 
                        <>
                            <p>Drag a file here, browse</p>
                            <p className="mt-2 text-base text-gray-300">Almost all format supported</p>
                        </>
                    }
                    
                </div>
            </div>

        </div>
    )
}

export default Dropzone
