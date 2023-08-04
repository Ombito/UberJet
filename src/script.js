const mycards = document.getElementsByClassName("booking-cards")[0];

const form = document.getElementById('form');

//fetch items from json server
fetch("https://json-server-ombito.vercel.app/helicopter")
  .then((res) => res.json())
  .then(data => cardsLoad(data))

function cardsLoad (data) {
    
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

        mycards.appendChild(getCards);
    })
    
}


//add event listener to form

    if(form) {
        form.addEventListener('submit', submitForm);
    }

function submitForm(){

    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let nationalid = document.getElementById('national-id').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;
    let departure = document.getElementById('scripts').value;
    let destination = document.getElementById('drop').value;

    console.log(destination);
    let formObj = {
        name: name,
        mobile: mobile,
        nationalid: nationalid,
        date: date,
        time: time,
        departure: departure,
        destination: destination,
    };

    
    // Post form data to the JSON server
    fetch("https://json-server-ombito.vercel.app/tickets", {
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

