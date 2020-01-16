import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import DataHandler from "./components/dataHandler";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import "./App.scss";

const imagesStyles = {
  width: "450px",
  height: "400px"
};

const client = new ApolloClient({
  uri: "http://api.spacex.land/graphql/"
});

const useStyles = makeStyles({
  wrapper: {
    // background: "gray"
  },
  container: {
    // background: "lightgreen",
    // borderTop: "1px solid black",
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <Box className={classes.wrapper} component="div">
        {/* Inserted high in app, in places where data is already needed, preferred outside react router wrapper */}
        <Box component="div" id="stars"></Box>
        <Box component="div" id="stars2"></Box>
        <Box component="div" id="stars3"></Box>
        <Container className={classes.container} maxWidth="lg">
          <h2 style={{ color: "#FFF", textAlign: "center" }}>
            Last 10 Spacex missions
          </h2>
          <DataHandler imagesStyles={imagesStyles} />
        </Container>
      </Box>
    </ApolloProvider>
  );
};

export default App;
