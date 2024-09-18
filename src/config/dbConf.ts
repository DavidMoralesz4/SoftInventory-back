import mongoose from "mongoose"

export const dbconf = async() => {
    await mongoose.connect(
        "mongodb+srv://jd3285201:8ctmiax2Hm4izO7i@prueba.8tzna.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=prueba"
    )
}

