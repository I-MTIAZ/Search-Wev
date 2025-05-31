import './style.css'
const YOUR_ACCESS_KEY = "3Zybz1vJc22zA41BF9IPqNV_Ai3DaiaJw9t7YcNhYpY"
const main = document.querySelector(".main")
const Form = document.querySelector("#form")
const input = document.querySelector("#serach-input")
const more = document.querySelector("#seemore")
let page = 2;

/* async function getitem(){
  try{
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=${YOUR_ACCESS_KEY}&query=cat`)
    const data = await res.json()
    console.log(data)
  }
  catch{
    console.error('Error fetching data:', error);
  }
    
}

getitem() */

Form.addEventListener("submit",(e)=>{
  e.preventDefault(); // Prevent the default form submission behavior
  
  // Clear previous results
  
  main.innerHTML = '';

fetch(`https://api.unsplash.com/search/photos/?client_id=${YOUR_ACCESS_KEY}&query=${input.value}&page=${page}`)
.then(respons => respons.json ())
.then(data =>{
  data.results.forEach(element => {
    const container = document.createElement("div")
    container.classList.add("size")
    
    const image = element.urls.regular
    const img = document.createElement("img")
    img.src=image
    
    
    container.appendChild(img)
    main.appendChild(container)

  });
})
.catch(error => {
  console.error('Error fetching data:', error); // Catches and logs any errors
});
  
})

more.addEventListener("click",(e)=>{
  e.preventDefault(); // Prevent the default form submission behavior
  
  // Clear previous results
  page++
  console.log(page)

fetch(`https://api.unsplash.com/search/photos/?client_id=${YOUR_ACCESS_KEY}&query=${input.value}&page=${page}`)
.then(respons => respons.json ())
.then(data =>{
  data.results.forEach(element => {
    const container = document.createElement("div")
    container.classList.add("size")
    
    const image = element.urls.regular
    const img = document.createElement("img")
    img.src=image
    
    
    container.appendChild(img)
    main.appendChild(container)
  });
})
.catch(error => {
  console.error('Error fetching data:', error); // Catches and logs any errors
});
  
})





