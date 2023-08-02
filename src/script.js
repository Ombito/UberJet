const form = document.getElementById('form');
const mycards = document.getElementsByClassName("booking-cards");

//add event listener to form
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault(); 

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

    // Post form data to the JSON server
    fetch("http://localhost:3000/tickets", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formObj),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        alert('Flight was booked successfully. Please check your email for details.');
    })
    .catch((error) => {
        console.error("Error posting form data:", error);
        alert("An error occurred while booking the flight. Please try again later.");
    });

}

//fetch items from json server
fetch("http://localhost:3000/helicopter")
  .then((res) => res.json())
  .then(data => cardsLoad(data))

function cardsLoad (data) {
    
    data.map(i => {
        console.log(data)
        let getCards = document.createElement("div");
        getCards.className = "helicopter-cards";
        getCards.innerHTML = `
        <div>
            <img src="${i.image}"/> 
            <p>Capacity: ${i.type}</p> 
            <p>Cost: ${i.cost}</p>
        </div>
        `;

        mycards.appendChild(getCards);
    })
    
}
