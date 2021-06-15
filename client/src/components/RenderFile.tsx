import { sizeInMB } from "libs/sizeInMB"
import { IFile } from "libs/types"
import { FunctionComponent } from "react"

const RenderFile:FunctionComponent<{
    file : IFile
}> = ({file : {format, sizeInBytes, name}}) => {
    return (
        <div className="flex items-center w-full p-4 my-2">
            <img src={`/images/${format}.png`} alt="" className="h-15 w-14"></img>
            <span className="mx-2">{name}</span>
            <span className="ml-auto">{sizeInMB(sizeInBytes)}</span>
        </div>
    )
}

export default RenderFile
