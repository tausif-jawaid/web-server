
fetch('http://puzzle.mead.io/puzzle').then((response) => {
      response.json().then((data) => {
            console.log(data);
      })
})


const weatherFormData = document.querySelector('form');
const search = document.querySelector('input');

weatherFormData.addEventListener('submit', (e) => {
    e.preventDefault();
    //console.log('Form Submitted!');
    const searchData = search.value;
    fetch('http://localhost:3000/weather?address='+searchData).then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    console.log(data.error)
                } else {
                 console.log(data.address)
            }
        })
    })
})