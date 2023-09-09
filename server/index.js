/* eslint-disable no-undef */
import express from "express"
import cors from "cors"
const app = express()

import dotenv from "dotenv"

dotenv.config()

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/health", (req, res) => {
    res.send("Hello World")
})

app.get("/getAccessToken", async (req, res) => {
    const requestToken = req.query.code
    console.log("token front", requestToken)

    const params = "?client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET + "&code=" + requestToken

    await fetch("https://github.com/login/oauth/access_token" + params, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        } 
    }).then(response => { return response.json() })
        .then(data => {
            res.json(data)
        })
})

app.get("/getUserData", async (req, res) => {
    req.get("Authorization") // Bearer
    

    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }).then(response => { 
        
        return response.json() 
    })
    .then((data)=>{
        res.json(data)
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})