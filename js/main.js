document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const playerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://footballer-profile-api.herokuapp.com/api/${playerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#age').innerText = data.age
        document.querySelector('#name').innerText = data.birthName
        document.querySelector('#birth').innerText = data.birthLocation
        document.querySelector('#nation').innerText = data.nationality
        document.querySelector('#team').innerText = data.currentTeam
        document.querySelector('#number').innerText = data.currentNumber

    }catch(error){
        console.log(error)
    }
}