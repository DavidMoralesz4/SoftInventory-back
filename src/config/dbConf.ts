import mongoose from "mongoose"
import { URL_CONNECT } from "./envs"


export const dbconf = async() => {
    await mongoose.connect(`${URL_CONNECT}`)
}

