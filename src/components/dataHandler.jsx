import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// import SummHandler from "./summHandler";

const DataHandler = props => {
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

  return data.launchesPast.map(
    ({ mission_name, launch_date_local, launch_site, rocket, links }) => (
      <div key={mission_name}>
        <p>
          Misja o kryptonimie: <strong>{mission_name}</strong>
        </p>
        <p>
          Data wystrzały rakiety:{" "}
          <strong>{launch_date_local.slice(0, 10)}</strong>
        </p>
        <p>
          Baza misji: <strong>{launch_site.site_name_long}</strong>
        </p>
        <p>
          Rakieta o nazwie: <strong>{rocket.rocket_name}</strong>, z ładunkiem:
        </p>
        <ul>
          {rocket.second_stage.payloads.map(payload => (
            <li>
              {payload.payload_type +
                " o masie: " +
                payload.payload_mass_kg +
                "kg"}
            </li>
          ))}
        </ul>
        <p>
          <span>Całkowita masa pakunku: </span>
          {
            rocket.second_stage.payloads.reduce((a, b) => ({
              payload_mass_kg: a.payload_mass_kg + b.payload_mass_kg
            })).payload_mass_kg
          }
          <span>kg</span>
        </p>
        {links.flickr_images.map(image => (
          <img src={image} style={props.imagesStyles} alt="" />
        ))}
      </div>
    )
  );
};

export default DataHandler;
