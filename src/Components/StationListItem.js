import React from "react";

const StationListItem = props => {
  const mapStations = props.stations.map(item => (
    <div key={item.uid}>
      {item.name} - ilość rowerów: {item.stationBikes.length}
    </div>
  ));
  console.log(mapStations);

  return <li>{mapStations}</li>;
};

export default StationListItem;

// do naprawy cos z callem do api
