require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = 
    {
        "login": "Niket576",
        "id": 157479682,
        "node_id": "U_kgDOCWLzAg",
        "avatar_url": "https://avatars.githubusercontent.com/u/157479682?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Niket576",
        "html_url": "https://github.com/Niket576",
        "followers_url": "https://api.github.com/users/Niket576/followers",
        "following_url": "https://api.github.com/users/Niket576/following{/other_user}",
        "gists_url": "https://api.github.com/users/Niket576/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Niket576/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Niket576/subscriptions",
        "organizations_url": "https://api.github.com/users/Niket576/orgs",
        "repos_url": "https://api.github.com/users/Niket576/repos",
        "events_url": "https://api.github.com/users/Niket576/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Niket576/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Niket Chaudhary",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 9,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2024-01-23T10:11:48Z",
        "updated_at": "2025-03-20T05:28:24Z"
      }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req,res) => {
    res.send('niketdotcom')
})
app.get('/login', (req,res) => {
    res.send('<h1>You can login in with chai backend</>')
})
app.get('/youtube', (req,res) => {
    res.send('<h2>You can enjoy youtube with chai </h2>')
})

app.get('github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
