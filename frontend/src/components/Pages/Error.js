import { useRouteError } from "react-router-dom";
import MainNavigation from "../MainNavigation";
import PageContent from "./PageContents";

const ErrorPage = () =>{
 const error = useRouteError();
 
 let title = 'An Error Occured!';
 let message = 'Something Went Wrong!';
 
 if (error.status === 500) {
  message = error.data.message;
  }

 if (error.status === 404) {
  title = 'Not Found!';
  message = 'Could not find resourcenor page.'
 }
 return (
  <>
  <MainNavigation/>
 <PageContent title= {title}>
  <p>{message}</p>
 </PageContent>
 </>
 )
};

export default ErrorPage