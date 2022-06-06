const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'Ronaldo': {
        'age': 37,
        'birthName': 'Cristiano Ronaldo dos Santos Aveiro',
        'birthLocation': 'Funchal, Madeira, Portugal',
        'nationality': 'Portugal',
        'currentTeam': 'Manchester United',
        'currentNumber': 7
    },
    'Messi':{
        'age': 34,
        'birthName': 'Lionel Andrés Messi',
        'birthLocation': 'Rosario, Santa Fe, Argentina',
        'nationality': 'Argentina',
        'currentTeam': 'Paris Saint-Germain (PSG)',
        'currentNumber': 30
    },
    'Neymar':{
        'age': 30,
        'birthName': 'Neymar da Silva Santos Júnior',
        'birthLocation': 'Mogi das Cruzes, Brazil[',
        'nationality': 'Brazil',
        'currentTeam': 'Paris Saint-Germain (PSG)',
        'currentNumber': 10
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'nationality': 'unknown',
        'currentTeam': 'unknown',
        'currentNumber': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const playerName = request.params.name.toLowerCase()

    if( players[playerName] ){
        response.json(players[playerName])
    }else{
        response.json(players['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
