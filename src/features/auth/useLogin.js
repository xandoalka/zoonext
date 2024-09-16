import { axiosInstance } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query"

export const useLogin = ({ onSuccess }) => {
   return useMutation({
      mutationFn: async(data) => {
         const response = await axiosInstance.post('/api/auth/login', data)
         return response
      },
      onSuccess
   })
}