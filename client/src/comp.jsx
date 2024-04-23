import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import MapComponent from "./map.jsx";

const Comp = () => {
  const [message, setMessage] = useState({ data: [] });
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Fuel",
      selector: (row) => row.fuel,
    },
    {
      name: "Latitute",
      selector: (row) => row.lat,
    },
    {
      name: "Longitude",
      selector: (row) => row.lng,
    },
    {
      name: "Power",
      selector: (row) => row.power,
    },
    {
      name: "Temp",
      selector: (row) => row.temp,
    },
    {
      name: "Anomalies",
      selector: (row) => (row.anomalies == true ? "Error" : "Okay"),
    },
  ];
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/tower");

    eventSource.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      setMessage((prev) => ({
        data: [...eventData, ...prev.data],
      }));
    };
    return () => eventSource.close();
  }, []);
  console.log(message.data.length);
  return (
    <>
      <MapComponent coords={message.data} />
      <div style={{ overflowY: "scroll", width: "99vw", Height: "500px" }}>
        <DataTable
          title="Security Alarm"
          columns={columns}
          data={message.data}
        />
      </div>
    </>
  );
};

export default Comp;
