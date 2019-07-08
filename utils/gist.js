const https = require('https')
const { ConfigurationGist } = require('../config')

const configuration = () => new Promise((resolve, reject) => {
  https.get(`https://api.github.com/gists/${ConfigurationGist}`, {headers: {'user-agent': 'node.js'}}, (req, res) => {
    let data = ''
    req.on('data', r => data += r)
    req.on('end', () => {
      resolve(JSON.parse(data))
    })
    req.on('error', err => reject(err))
  })
})

const templateRepos = () => configuration().then(res=>{
  if(res.files && res.files['template_repository.json'] && res.files['template_repository.json'].content){
    return JSON.parse(res.files['template_repository.json'].content)
  }
  return []
})

module.exports = {
  templateRepos
}
