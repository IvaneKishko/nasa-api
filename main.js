let sub = document.querySelector('button')
let mon = document.querySelector('.months')
let day = document.querySelector('.dates')

sub.addEventListener('click', getFetch)

function getFetch(e){
    let url = `https://api.nasa.gov/planetary/apod?api_key=Ql2nDP6CHMrlCk21QP4hznYElZB2Tm9kcwUENTeA&date=2021-${mon.value}-${day.value}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url('${data.url}')`;
        document.querySelector('h5').innerText = data.title;
        document.querySelector('p').innerText = data.explanation;
        document.querySelector('h6').innerText = data.title

    })
    
}
