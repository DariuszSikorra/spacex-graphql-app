import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";

import "./dataHandler.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexDirection: "column"
  },
  card: {
    display: "flex",
    background: "#212121",
    color: "white"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    padding: 3,
    color: "white"
  },
  cover: {
    minWidth: 300,
    minHeight: 300
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  payloadsList: {
    width: "100%",
    maxWidth: 360,
    position: "relative",
    overflow: "auto",
    maxHeight: 200
  }
}));

const DataHandler = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(gql`
    {
      launchesPast(limit: 10) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        rocket {
          rocket_name
          second_stage {
            payloads {
              payload_type
              payload_mass_kg
            }
          }
        }
        links {
          flickr_images
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Grid container className={classes.root} spacing={2}>
      {data.launchesPast.map(
        ({ mission_name, launch_date_local, launch_site, rocket, links }) => (
          <Grid item>
            <Card className={classes.card}>
              <Grid container spacing={2}>
                <CardMedia
                  item
                  lg={3}
                  xs={12}
                  component={Grid}
                  className={classes.cover}
                  image={links.flickr_images[0]}
                  title={`image ${links.flickr_images[0]}`}
                />
                <CardContent
                  item
                  lg={3}
                  xs={12}
                  component={Grid}
                  className={classes.content}
                >
                  <Typography component="h5" variant="h5">
                    Mission: <strong>{mission_name}</strong>
                  </Typography>
                  <Typography variant="subtitle1">
                    Date of launch:{" "}
                    <strong>{launch_date_local.slice(0, 10)}</strong>
                  </Typography>
                  <Typography variant="subtitle1">
                    Rocket: <strong>{rocket.rocket_name}</strong>
                  </Typography>
                  <Typography variant="subtitle1">
                    Base: <strong>{launch_site.site_name_long}</strong>
                  </Typography>
                </CardContent>
                <CardContent
                  item
                  lg={3}
                  xs={12}
                  component={Grid}
                  className={classes.content}
                >
                  <Typography component="h5" variant="h5">
                    Rocket load:
                  </Typography>
                  <Paper style={{ backgroundColor: "lightgray" }}>
                    <List className={classes.payloadsList}>
                      {rocket.second_stage.payloads.map(payload => (
                        <ListItem>
                          <Typography component="p" variant="p">
                            -
                            {payload.payload_type +
                              " " +
                              payload.payload_mass_kg +
                              "kg"}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </CardContent>
                <CardContent
                  item
                  lg={3} ///Repair, should be 3. Maybe use spacing instead of margin (list)
                  xs={12}
                  component={Grid}
                  className={classes.content}
                >
                  <Typography component="h5" variant="h5">
                    Total load:
                  </Typography>
                  <Typography component="p" variant="p">
                    {
                      rocket.second_stage.payloads.reduce((a, b) => ({
                        payload_mass_kg: a.payload_mass_kg + b.payload_mass_kg
                      })).payload_mass_kg
                    }
                    <span>kg</span>
                  </Typography>
                </CardContent>
              </Grid>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default DataHandler;

// <div className="app__text" key={mission_name}>
//   <p>
//     Misja o kryptonimie: <strong>{mission_name}</strong>
//   </p>
//   <p>
//     Data wystrzały rakiety:{" "}
//     <strong>{launch_date_local.slice(0, 10)}</strong>
//   </p>
//   <p>
//     Baza misji: <strong>{launch_site.site_name_long}</strong>
//   </p>
//   <p>
//     Rakieta o nazwie: <strong>{rocket.rocket_name}</strong>, z ładunkiem:
//   </p>
// <ul>
//   {rocket.second_stage.payloads.map(payload => (
//     <li>
//       {payload.payload_type +
//         " o masie: " +
//         payload.payload_mass_kg +
//         "kg"}
//     </li>
//   ))}
// </ul>
//   <p>
//     <span>Całkowita masa pakunku: </span>
// {
//   rocket.second_stage.payloads.reduce((a, b) => ({
//     payload_mass_kg: a.payload_mass_kg + b.payload_mass_kg
//   })).payload_mass_kg
// }
// <span>kg</span>
//   </p>
//   {links.flickr_images.map(image => (
//     <img src={image} style={props.imagesStyles} alt="" />
//   ))}
//   <br/>
// </div>
