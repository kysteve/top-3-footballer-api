const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const player = {
    'ronaldo': {
        'age': 37,
        'birthName': 'Cristiano Ronaldo dos Santos Aveiro',
        'birthLocation': 'Funchal, Madeira, Portugal',
        'nationality': 'Portugal',
        'currentTeam': 'Manchester United',
        'currentNumber': 7
    },
    'messi':{
        'age': 34,
        'birthName': 'Lionel Andrés Messi',
        'birthLocation': 'Rosario, Santa Fe, Argentina',
        'nationality': 'Argentina',
        'currentTeam': 'Paris Saint-Germain (PSG)',
        'currentNumber': 30
    },
    'neymar':{
        'age': 30,
        'birthName': 'Neymar da Silva Santos Júnior',
        'birthLocation': 'Mogi das Cruzes, Brazil',
        'nationality': 'Brazil',
        'currentTeam': 'Paris Saint-Germain (PSG)',
        'currentNumber': 10
    },
    'benzema':{
        'age': 34,
        'birthName': 'Karim Mostafa Benzema',
        'birthLocation': 'Lyon, France',
        'nationality': 'France',
        'currentTeam': 'Real Madrid',
        'currentNumber': 9
    },
    'lewa':{
        'age': 33,
        'birthName': 'Robert Lewandowski',
        'birthLocation': 'Warsaw, Poland',
        'nationality': 'Poland',
        'currentTeam': 'Bayern Munich',
        'currentNumber': 9
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
    response.sendFile(__dirname + '/js/main.js')
    response.sendFile(__dirname + '/css/style.css')
    response.sendFile(__dirname + '/css/normalize.css')
})

app.get('/api/:name',(request,response)=>{
    const playerName = request.params.name.toLowerCase()

    if( player[playerName] ){
        response.json(player[playerName])
    }else{
        response.json(player['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
