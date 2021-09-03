import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Title from "./Title";
import Loader from "../utilities/Loader";
import {
  getAllServers,
  refreshServerDetails,
} from "../../services/DataService";
const ServerGrids = (props) => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [columnData, setColumnData] = useState([]);

  const processResponse = (response) => {
    const cData = [
      {
        title: "Symbol",
        field: "symbol",
      },
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Price",
        field: "price",
      },
      {
        title: "Change Percentage",
        field: "changePercentage",
      },
      {
        title: "Change",
        field: "change",
      },
      {
        title: "Day Low",
        field: "dayLow",
      },
      {
        title: "Day High",
        field: "dayHigh",
      },
      {
        title: "Year Low",
        field: "yearLow",
      },
      {
        title: "Year High",
        field: "yearHigh",
      },
    ];
    const tData = [
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: "120.96000000",
        changePercentage: "0.07000000",
        change: "0.08000000",
        dayLow: "110.89000000",
        dayHigh: "123.7000000",
        yearLow: "137.98000000",
        yearHigh: "52.76750000",
      },
      {
        symbol: "GPL",
        name: "Google Inc.",
        price: "150.57000000",
        changePercentage: "0.17000000",
        change: "0.18000000",
        dayLow: "130.89000000",
        dayHigh: "153.71000000",
        yearLow: "167.88000000",
        yearHigh: "72.75890000",
      },
      {
        symbol: "IPL",
        name: "Intuit Inc.",
        price: "100.16000000",
        changePercentage: "0.09000000",
        change: "0.07000000",
        dayLow: "125.77000000",
        dayHigh: "133.6000000",
        yearLow: "178.45000000",
        yearHigh: "23.76850000",
      },
      {
        symbol: "PSL",
        name: "Peoples Inc.",
        price: "78.34000000",
        changePercentage: "0.04000000",
        change: "0.02000000",
        dayLow: "70.82000000",
        dayHigh: "23.5000000",
        yearLow: "37.79000000",
        yearHigh: "52.12300000",
      },
      {
        symbol: "JBL",
        name: "Jakarta Inc.",
        price: "28.34000000",
        changePercentage: "0.02000000",
        change: "0.01000000",
        dayLow: "40.82500000",
        dayHigh: "20.5600000",
        yearLow: "31.79800000",
        yearHigh: "12.12000000",
      },
      {
        symbol: "PSL",
        name: "Peoples Inc.",
        price: "78.34000000",
        changePercentage: "0.04000000",
        change: "0.02000000",
        dayLow: "70.82000000",
        dayHigh: "23.5000000",
        yearLow: "37.79000000",
        yearHigh: "52.12300000",
      },

      {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: "120.96000000",
        changePercentage: "0.07000000",
        change: "0.08000000",
        dayLow: "110.89000000",
        dayHigh: "123.7000000",
        yearLow: "137.98000000",
        yearHigh: "52.76750000",
      },
      {
        symbol: "JBL",
        name: "Jakarta Inc.",
        price: "28.34000000",
        changePercentage: "0.02000000",
        change: "0.01000000",
        dayLow: "40.82500000",
        dayHigh: "20.5600000",
        yearLow: "31.79800000",
        yearHigh: "12.12000000",
      },
      {
        symbol: "GPL",
        name: "Google Inc.",
        price: "150.57000000",
        changePercentage: "0.17000000",
        change: "0.18000000",
        dayLow: "130.89000000",
        dayHigh: "153.71000000",
        yearLow: "167.88000000",
        yearHigh: "72.75890000",
      },
    ];
    setTableData(tData);
    setColumnData(cData);
    setLoading(false);
  };
  const fetchServerDetails = () => {
    getAllServers()
      .then((res) => {
        if (res) processResponse(res);
      })
      .catch((err) => {
        console.log("Error", `Home: Get server details failed. Error: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const refreshServer = () => {
    setLoading(true);
    refreshServerDetails()
      .then((res) => {
        if (res) fetchServerDetails();
      })
      .catch((err) => {
        console.log("Error", `Home: Sync servers failed. Error: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    //fetchServerDetails();
    processResponse();
  }, [props.history]);

  return (
    <>
      {loading && <Loader />}
      {columnData.length > 0 && tableData.length > 0 && (
        <MaterialTable
          title={<Title refresh={refreshServer} />}
          columns={columnData}
          data={tableData}
          options={{
            exportButton: true,
            headerStyle: {
              backgroundColor: "#1c2538",
              color: "#FFF",
            },
            emptyRowsWhenPaging: false,
            columnsButton: true,
          }}
        />
      )}
    </>
  );
};

export default ServerGrids;
