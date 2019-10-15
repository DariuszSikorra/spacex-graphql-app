//React
import React from "react";
//Apollo
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// Components
import DataHandler from "./components/dataHandler"
//Css
import "./App.css";

const imagesStyles = {
  width: "350px",
  height: "300px"
}

const client = new ApolloClient({
  uri: "http://api.spacex.land/graphql/"
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* putted high in app, in places where data is alredy needed, prefered outside react router wrapper */}
      <div>
        <h2>My first Apollo app</h2>
        <DataHandler imagesStyles={imagesStyles} />
      </div>
    </ApolloProvider>
  );
};

export default App;
