

//navbar
const burger = document.querySelector('.burger-icon')
const header = document.querySelector("header")
const navlist = document.querySelector('.nav-list')
var nav = 0;

burger.addEventListener('click', ()=>{
    if(nav == 0){
        navlist.style.display = "block"
        nav = nav + 1
    }
    else{
        navlist.style.display = "none"
        nav = nav - 1
    }

    header.addEventListener('click', function(){
        navlist.style.display = "none"
    })
})



const form = document.querySelector('#feeback-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  // Convert FormData to plain object
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  // Store form data in local storage
  localStorage.setItem('formData', JSON.stringify(data));

  // Redirect to success page
  window.location.href = '/success';
});