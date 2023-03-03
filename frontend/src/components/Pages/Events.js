import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../EventsList";

function EventsPage() {
 const {events} = useLoaderData();
 //const events = data.events;
 //return <EventsList events={events}/>;
//}
return (
<Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
 <Await resolve={events}>
 {(loadedEvents)=> <EventsList events ={loadedEvents}/>}
</Await>
</Suspense>
)
}
export default EventsPage;

async function loadEvents() {
 
 const response = await fetch('http://localhost:8080/events');
 
if (!response.ok) {
throw json(
 {message: 'Could not fetch events.'},
 {status: 500}
 );
} 
else {
 const resData = await response.json();
return resData.events;
}
}
export function loader(){
return defer({
 events: loadEvents()
});

}

//import { Link } from "react-router-dom";
//import classes from './Events.module.css';
//import { useEffect, useState } from "react";
//import EventsList from "../EventsList";

//function EventsPage() {
 //const [isLoading, setIsLoading] = useState(false);
 //const [fetchedEvents, setFetchedEvents] = useState();
 //const [error, setError] = useState();

 //useEffect(() =>{
  //async function fetchEvents() {
   //setIsLoading(true);
   //const response = await fetch('http:/localhost:8080/events');

   //if (!response.ok) {
   // setError('Fetching events failed.');
   //} else{
    //const resData = await response.json();
    //setFetchedEvents(resData.events);
   //}
   //setIsLoading(false);
  //}
  //fetchEvents();
 //}, []);

 //return (
  //<>
  //<div>
   //{isLoading && <p> Loading...</p>}
   //{error && <p>{error}</p>}
  //</div>
  //{!isLoading && fetchedEvents && <EventsList events={fetchedEvents}/>}
  //</>
 //);
//}
//Another code For Dummy Events
//const DummyEvents = [
 //{id: 'e1',
//title: 'Some Event'},
//{id: 'e2',
//title: 'Another Event'},
//{id: 'e3',
//title: 'Event  3'}
//]

//function EventsPage() {
 //return (
 //<>
 //<hi className={classes.center}>EventsPage</hi>
 //<ul className={classes.ul}> 
  //{DummyEvents.map((event)=>
  //<li key={event.id}>
   //<Link to={event.id}>{event.title}</Link>
  //</li>)}
  //</ul>
 //</>
 //)
 //}
// export default EventsPage;
