/***********************************Setup and Variables************************************ */

const baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=9bRmM9wh5PPGOeDVcZjXNZvReMohZCgX'; //URL endpoint where our data lives

/**************Variables and setup*************************** */

const searchEvents= document.querySelector('form');
const searchResults= document.querySelector('.col-12');
const button = document.querySelector('#submit');

button.addEventListener('click', fetchEvents);

/*******************************Initial fetch verification********************************/
// fetch(baseURL)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(Json) {
//         console.log(Json);
//     })

     /***********************Fetch data, convert to JS using JSON, and display results*************************** */
function fetchEvents(e){
  e.preventDefault();
  fetch(baseURL) //Fetches or 'gets' information from our baseURL. Returns a promise.
  
  .then(response => { //Promise resolver. This is grabbing the results we are getting back from our fetch request. 
      // console.log(results);
    return response.json() //Returns the results we receieve from our fetch jsonified (JSON = JavaScript object notation). Also gives us another promise.
  })
  .then( Json => { //Promise resolver. Grabbing the jsonfied data from our promise.
    console.log(Json);
       displayEvents(Json) //This drops our jsonified data into our displayEvents function which I will create below.
  });
}
    // fetchEvents();//Calling the function to fetch events.

/***************************Display Events function************************************/

function displayEvents(data){//data here is just renaming the json from above. The parameter can be called anything we want to call it.
  // console.log(data._embedded.events[0].name);
  // console.log(data.name);
  let eventName= data._embedded.events;
    for(e of eventName){
      // console.log(e.name);
      // console.log(e.url);
      console.log(e.dates.start.localDate)//Dates
      // console.log(e.timezone);//Location
     let ticketedEvents = document.createElement('h2');
    //  console.log(ticketedEvents);
    let dates = document.createElement('p')
     let eventDetails = document.createElement('a');

     
     ticketedEvents.innerText = e.name;//Pulling the actual content from the name given in the API
    dates.innerText = e.dates.start.localDate;
     eventDetails.innerText ='Get Tickets';
     eventDetails.setAttribute('href',e.url);
     
    //  console.log(ticketedEvents);
    //  console.log(eventDetails);
      // console.log(location);
      // console.log(dates);
    
     searchResults.appendChild(ticketedEvents);
     searchResults.appendChild(dates);
     searchResults.appendChild(eventDetails); //Appending or adding the links from Ticketmaster along with the underline by setting hreft to self.
      ticketedEvents.style.backgroundColor ="aqua";
      ticketedEvents.style.textAlign ="center";
      dates.style.border = '2px solid lightsalmon';
      dates.style.textAlign = "center";
      eventDetails.style.border = '1px dotted lightsalmon';
    };
  
};


  /******************Next and Previous buttons****************/

  

  // const nextBtn = document.querySelector('next');
  // const previousBtn = document.querySelector('prev');

  // nextBtn.addEventListener('click', nextPage);
  // previousBtn.addEventListener('click', previousPage);

  // function nextPage(e) {
  //   pageNumber++;
  //   fetchEvents(e);
  // };
  // function previousPage(e) {
  //   if(pageNumber > 0) {
  //     pageNumber--;
  //   } else {
  //     return;
  //   }
  //   fetchEvents(e);
  // };
