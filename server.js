const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'savage':{
    'age': 29,
    'birthname': 'sheyaaa',
    'birthLocation':'London England',
    },
    'chance the rapper':{
        'age': 28,
        'birthname': 'chancelotrr bennet',
        'birthLocation':'illinil',
        },
     'daylan':{
        'age': 25,
        'birthname': 'daylan',
        'birthLocation':'daylan ',
        },

}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:rapperName', (request, response)=>{
    // console.log(request.params.rapperName)
    const rapperName = request.params.rapperName.toLowerCase()
    if(rappers[rapperName]){
        respond.json(rappers[rapperName])
    }else{
        response.json(rappers['daylan'])
    }
    // response.json(rappers)
})

app.listen(PORT, ()=>{
    console.log(`thhe sever ins runnign on ${PORT} you better go catch it `)
})