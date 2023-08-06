document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();


const form = document.getElementById('form');

//fetch items from json server
fetch("https://json-server-ombito.vercel.app/helicopter")
  .then((res) => res.json())
  .then(data => cardsLoad(data))

function cardsLoad (data) {
    const mycards = document.getElementById("booking-cards");  
    data.map(i => {
        console.log(data)
        let getCards = document.createElement("div");
      
        getCards.className = "helicopter-cards";
        getCards.innerHTML = `
        <div id="chopper">
            <img style="width: 100%; border-radius: 3px; height: 25vh"; src="${i.image}"/> 
            <h4>${i.type}</h4>
            <p>Capacity: ${i.capacity}</p> 
            <p>Cost: ${i.cost}</p>
            <a target="_blank" href="./checkout.html">BOOK NOW</a>
        </div>
        `;
        console.log(getCards);
        mycards.appendChild(getCards);
    })
    
}


//add event listener to form

// form.addEventListener('submit', submitForm());

function submitForm(e){
    e.preventDefault();
    console.log('Images');
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let nationalid = document.getElementById('national-id').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let departure = document.getElementById('scripts').value;
    let destination = document.getElementById('drop').value;

    let formObj = {
        name: name,
        mobile: mobile,
        nationalid: nationalid,
        date: date,
        time: time,
        departure: departure,
        destination: destination,
    };
 console.log(formObj);
    
    // Post form data to the JSON server
    fetch("http://localhost:3000/tickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formObj),
    })
    .then(res => res.json())
    .then(gift => {
        console.log(gift);
        alert('Flight was booked successfully. Please check your email for details.');
    })
    .catch((error) => {
        console.error("Error posting form data:", error);
        alert("An error occurred while booking the flight. Please try again later.");
    });


}
if(form) {
    form.addEventListener('submit', submitForm);
}


})