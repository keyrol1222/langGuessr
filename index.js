import {franc} from 'franc'
import langs from 'langs'
import express from 'express'



const app = express()
const port = 3000
app.use(express.json());

app.post('/', (req, res) => {

    const text = req.body.phrase
const code = franc(text)
const language = langs.where("3", code)


if(language){
    res.send(`language is: ${language.name}`)

}
else{
    res.send('not found')

}
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})