import axios from "axios"
import { FunctionComponent, useState } from "react"

const EmailForm:FunctionComponent<{id:string}> = ({id}) => {

    const handleEmail = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios({
                method:"POST",
                url:"/api/files/email",
                data:{
                    id, emailFrom, emailTo
                }
            })

            setMessage(data.message)
        } catch (error) {
            setMessage(error.data.response.message)
        }
    }
    

    const [emailFrom, setEmailFrom] = useState("")
    const [emailTo, setEmailTo] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className="flex flex-col items-center justify-center p-2 w-full space-y-3">
            <h3>You can also send the file through mail</h3>
            <form onSubmit={handleEmail} className="flex flex-col items-center justify-center p-2 w-full space-y-3">
                <input className="p-1 text-white bg-gray-800 border-2 focus:outline-none" type="text" placeholder="Email from" required onChange={e=>setEmailFrom(e.target.value)} value={emailFrom}/>
                <input className="p-1 text-white bg-gray-800 border-2 focus:outline-none" type="text" placeholder="Email to" required onChange={e=>setEmailTo(e.target.value)} value={emailTo}/>
                <button type="submit" className="button">Email</button>
            </form>
            {
                message && <p className="font-medium text-red-500">{message}</p>
            }
        </div>
    )
}

export default EmailForm
