import EventNavigation from '../EventsNavigation';
import { Outlet } from 'react-router-dom';
function EventRootLayout() {
 return (
 <>
  <EventNavigation/>
  <main>
  <Outlet/>
  </main>
  </>
 
 )
 }
 export default EventRootLayout;