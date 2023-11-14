import './App.css'
import { useEffect, useState } from "react"


const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const URL_API = import.meta.env.VITE_API_URL

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [userData, setUserData] = useState({})

  function loginWithGithub() {
    window.location.assign("http://github.com/login/oauth/authorize?client_id=" + CLIENT_ID)
  }

  async function logoutUser() {
    localStorage.removeItem("accessToken")
    setIsLogin(false)
  }

  async function getAccessToken(codeParam) {

    

    await fetch(`${URL_API}/getAccessToken?code=` + codeParam, {
      method: "GET",

    }).then((response) => {
      return response.json()
    }
    ).then((data) => {

      if (data.access_token) {
        localStorage.setItem("accessToken", data.access_token)
        setIsLogin(true)
      }
    }
    ).catch((error) => {
      console.log(error)
    }
    )
  }

  async function getUserData() {

    await fetch(`${URL_API}/getUserData`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("accessToken")
      }
    }).then((response) => {
       return response.json()
    }
    ).then((data) => {
      console.log(data)
      setUserData(data)
      setShowInfo(true)
      
    }
    ).catch((error) => {
      console.log(error)
    }
    )
  }

  useEffect(() => {

    

    if (localStorage.getItem("accessToken") != null) {
      setIsLogin(true)
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code')

    if (codeParam && (localStorage.getItem("accessToken") === null)) {
      getAccessToken(codeParam)
    }
  }, [])

  return (
    <div>
      {
        isLogin ? (

          <div>
            <div className='logout'>
              <h3>User is logged in </h3>
              <button onClick={logoutUser}>Logout</button>
            </div>
            <div>
              <div>
                <button onClick={getUserData}>Get User Data</button>
              </div>
            </div>
            {showInfo ? <div>
              <h3>User Data</h3>
              <div>
                <img className='image' src={userData.avatar_url} alt="avatar" />
                <p>Username:<strong> {userData.login} </strong></p>
                <p>Name: {userData.name}</p>
                <p>Location: {userData.location}</p>
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
                <p>Public Repos: {userData.public_repos}</p>
          </div>
            </div> : null}
          </div>


        ) :
          <div>
            <div>
              <h3>User is not logged in </h3>
              <h3>Usuário não está logado </h3>
              <button onClick={loginWithGithub}>Login Github</button>
            </div>
          </div>


      }


    </div>
  )
}

export default App
