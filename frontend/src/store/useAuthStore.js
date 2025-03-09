import {create} from "zustand"
import {axiosInstance} from "../lib/axios.js"
import toast from "react-hot-toast";
import axios from "axios";

export const useAuthStore = create((set) => ({
    authUser:null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({authUser: res.data})
        } catch (error) {
            console.log(error.message)
            set({authUser:null})
        }finally{
            set({isCheckingAuth:false})
        }
    },

    signup: async(data) => {
        set({isSigningUp:true})
        try {
            const res = await axiosInstance.post("/auth/signup", data)
            set({authuser: res.data})    
            toast.success("Account created Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isSigningUp: false})
        }
    },

    logout: async () =>{
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out Successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

}) )