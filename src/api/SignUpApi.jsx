import { axiosInstance, handleError } from "./MyConfig"

export const SignUpApi = async(payload)=>{
    try{
        const response = await axiosInstance.post('/company/register', payload)
        return response
    }catch(error){
        handleError(error)
    }
}