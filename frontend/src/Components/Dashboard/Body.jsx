import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import frame from "../../Assests/Avatar (1).png";
import frame1 from "../../Assests/Avatar (2).png";
import frame2 from "../../Assests/Avatar (3).png";
import frame3 from "../../Assests/Avatar (4).png";
import frame4 from "../../Assests/Avatar (5).png";
import frame5 from "../../Assests/Avatar (6).png";
import frame6 from "../../Assests/Avatar.png";
import avatar from "../../Assests/Frame 31.png";
import avatar1 from "../../Assests/Frame 32.png";
import avatar2 from "../../Assests/Frame 33.png";
import avatar3 from "../../Assests/Frame 34.png";
import avatar4 from "../../Assests/Frame 35.png";
import avatar5 from "../../Assests/Frame 36.png";
import avatar6 from "../../Assests/Frame 37.png";
import avatar7 from "../../Assests/Frame 38.png";
import bar from "../../Assests/Bar (2).png";
import bar1 from "../../Assests/Bar (1).png";
import bar2 from "../../Assests/Bar (3).png";
import bar3 from "../../Assests/Bar.png";
import year from "../../Assests/Frame 5.png";
import line from "../../Assests/Line 2.svg";
import year1 from "../../Assests/Frame 5.svg";
import axios from "axios";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Tooltip,
  Title,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  ArcElement
);

const Body = () => {
  const [revenueGrowthPercentage, setRevenueGrowthPercentage] = useState(null);
  const [revenue, setRevenue] = useState([]);

  const [data1, setData1] = useState({
    labels: ["2016", "2017", "2018", "2019"],
    datasets: [
      {
        label: "First Dataset",
        data: [92, 26, 75, 42],
        backgroundColor: "#25CD2566",
        borderColor: "#25CD2566, #25CD2500",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  const gradient = () => {
    const chartCanvas = document.getElementById("yourChartId");

    if (chartCanvas) {
      const ctx = chartCanvas.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, "rgba(37, 205, 37, 0.4)");
      gradient.addColorStop(1, "rgba(37, 205, 37, 0.00)");
      return gradient;
    }

    // Handle the case where the canvas element is not found
    return "rgba(37, 205, 37, 0.4)"; // or any default value
  };

  useEffect(() => {
    // Set custom CSS variables
    document.documentElement.style.setProperty("--Light-Green", "#25CD25");
  }, []);

  const data = {
    labels: ["Revenue Growth", "Remaining"],
    datasets: [
      {
        lebal: "Revenue Growth",
        data: [revenueGrowthPercentage, 100 - revenueGrowthPercentage],
        backgroundColor: ["#FFCD71", "#FFF7E8"],
        borderColor: ["#FFCD71", "#FFF7E8"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  useEffect(() => {
    axios.get("https://chakr.onrender.com/api/downsampled").then((res) => {
      setRevenue(res.data.downsampledData);
    });
  }, []);

  useEffect(() => {
    // Calculate the revenue growth percentage
    const startYear = 2017;
    const endYear = 2016;

    const startData = revenue.find((entry) =>
      entry.Timestamp.includes(`${startYear}`)
    );
    const endData = revenue.find((entry) =>
      entry.Timestamp.includes(`${endYear}`)
    );

    if (startData && endData) {
      const growthPercentage =
        ((endData.ProfitPercentage - startData.ProfitPercentage) /
          startData.ProfitPercentage) *
        100;

      setRevenueGrowthPercentage(growthPercentage.toFixed(2));
    }
  }, [revenue]);

  return (
    <div>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "25px",
          flex: "1 0 0",
          alignSelf: "stretch",
          // border: "2px solid red",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "20px",
            flex: "1 0 0",
            alignSelf: "stretch",
            // border: "2px solid red",
          }}
        >
          {/*row 1 */}
          <Box
            style={{
              display: "flex",
              minWidth: "320px",
              minHeight: "200px",
              padding: "24px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              // border: "2px solid yellow",
            }}
          >
            <Typography
              style={{
                color: "var(--Black, #131313)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: " 600",
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              Revenues
            </Typography>
            <Box display="flex" align-items="baseline" gap=" 8px">
              <Typography
                style={{
                  color: "var(--Black, #131313)",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-2px",
                }}
              >
                15%
              </Typography>
              <Box width="32px" height="32px" mt="10px">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M22.6667 9.33334L9.33334 22.6667M22.6667 9.33334H10.6667M22.6667 9.33334V21.3333"
                    stroke="#25CD25"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>

            <Typography
              style={{
                color: "var(--Dark-Gray, #454545)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: " 400",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
              }}
            >
              Increase compared to last week
            </Typography>
            <Box display="flex" align-items="center" gap=" 10px" mt="40px">
              {" "}
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}
              >
                Revenues report
              </Typography>
              <Box width="14px" height="14px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                    stroke="#734A00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              minWidth: "370px",
              minHeight: "200px",
              padding: "24px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              // border: "2px solid red",
            }}
          >
            <Typography
              style={{
                color: "var(--Black, #131313)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: " 600",
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              Lost deals
            </Typography>
            <Box display="flex" align-items="baseline" gap=" 8px">
              <Typography
                style={{
                  color: "var(--Black, #131313)",
                  fontFamily: "Inter",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-2px",
                }}
              >
                4%
              </Typography>
            </Box>

            <Typography
              style={{
                color: "var(--Dark-Gray, #454545)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: " 400",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
              }}
            >
              You closed 96 out of 100 deals
            </Typography>
            <Box display="flex" align-items="center" gap=" 10px" mt="40px">
              {" "}
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}
              >
                All deals
              </Typography>
              <Box width="14px" height="14px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                    stroke="#734A00"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              minWidth: "250px",
              minHeight: "200px",
              padding: "24px",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
              alignSelf: "stretch",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              // border: "2px solid var(--Dark-Orange, #734A00)", // Fix border property
            }}
          >
            <Typography
              style={{
                color: "var(--Black, #131313)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              Quarter goal
            </Typography>
            <Box height="140px" position="relative">
              <Doughnut
                data={data}
                options={{
                  cutout: "80%",
                  maintainAspectRatio: false,
                }}
              />
              <Box
                position="absolute"
                top="60%"
                left="35%"
                transform="translate(-50%, -50%)"
                textAlign="center"
              >
                <Typography
                  style={{
                    color: "var(--Black, #131313)",
                    fontFamily: "Inter",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "-2px",
                  }}
                >
                  {revenueGrowthPercentage}%
                </Typography>
                <Box display="flex" alignItems="center" gap="10px" mt="40px">
                  <Typography
                    style={{
                      color: "var(--Dark-Orange, #734A00)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    All goals
                  </Typography>
                  <Box width="14px" height="14px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <path
                        d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                        stroke="#734A00"
                        strokeLinecap="round" // Fix property name
                        strokeLinejoin="round" // Fix property name
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*row 2 */}

      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
          padding: "0px 10px 0px 10px",
          flex: "1 0 0",
          alignSelf: "stretch",

          // border: "2px solid  orange",
          w: "100%",
        }}
        mt="20px"
      >
        <Box
          style={{
            display: "flex",
            minWidth: "40%",
            minHeight: "300px",
            padding: "40px 40px",
            flexDirection: " column",
            alignItems: "flex-start",
            gap: "17px",
            flex: " 1 0 0",
            // border: "2px solid  blue",
            borderRadius: "16px",
            background: "var(--White, #FFF)",
          }}
        >
          {" "}
          <Box
            style={{
              display: "flex",
              gap: "280px",
            }}
          >
            {" "}
            <Typography
              style={{
                color: "var(--Black, #131313)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: " 600",
                lineHeight: "normal",
                letterSpacing: "-0.2px",
              }}
            >
              Coustomer
            </Typography>
            <Box
              style={{
                alignItems: "flex-start",
                gap: "36px",
              }}
            >
              <img src={year} alt="Image Description" />
            </Box>
          </Box>
          <Box>
            {" "}
            <Box>
              <Box
                style={{
                  display: "flex",
                  minWidth: "200px",
                  maxidth: "270px",
                  height: "40px",
                  padding: "5px 20px",
                  flexShrink: 0,
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  style={{
                    alignItems: "center",
                    display: "flex",
                    width: "32px",
                    height: "32px",
                    justifyContent: " center",
                  }}
                >
                  <img src={frame3} alt="logo" />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: " center",
                    gap: "2px",
                    padding: "16px",
                    alignSelf: "stretch",
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    style={{
                      color: "var(--Black, #131313)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: " 500",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Chris Friedkly
                  </Typography>
                  <Typography
                    style={{
                      color: "var(--Dark-Gray, #454545)",
                      fontFamily: "Inter",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Supermarket Villanova
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            {" "}
            <Box>
              <Box
                style={{
                  display: "flex",
                  // minWidth: "200px",
                  width: "100%",
                  borderRadius: "16px",
                  background: "var(--Light-Orange, #FFF7E8)",
                  height: "40px",
                  padding: "5px 20px",
                  flexShrink: 0,
                  alignItems: "center",
                  gap: "15px",
                  alignSelf: "stretch",
                  // border: "2px solid red",
                }}
              >
                <Box
                  style={{
                    alignItems: "center",
                    display: "flex",
                    width: "32px",
                    height: "32px",
                    justifyContent: " center",
                  }}
                >
                  <img src={frame6} alt="logo" />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: " center",
                    gap: "2px",
                    padding: "5px",
                    alignSelf: "stretch",
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    style={{
                      color: "var(--Black, #131313)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: " 500",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Maggie Johnson
                  </Typography>
                  <Typography
                    style={{
                      color: "var(--Dark-Gray, #454545)",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Oasis Organic Inc.
                  </Typography>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    width: "200px",
                    height: "16px",
                    flexShrink: " 0",

                    padding: "10px 70px",
                    gap: "10px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000px"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M2 13.945L2.86667 11.345C1.31733 9.05363 1.916 6.09696 4.26667 4.42896C6.61733 2.76163 9.99333 2.8983 12.1633 4.74896C14.3333 6.6003 14.6267 9.59297 12.8493 11.7496C11.072 13.9063 7.77267 14.5596 5.13333 13.2783L2 13.945Z"
                      stroke="#734A00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000px"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M7.99997 12.445L3.8853 14.6083L4.6713 10.0263L1.33797 6.78163L5.93797 6.11496L7.9953 1.9463L10.0526 6.11496L14.6526 6.78163L11.3193 10.0263L12.1053 14.6083L7.99997 12.445Z"
                      stroke="#734A00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000px"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M9.00001 4.94497L11.6667 7.61163M2.66667 13.945H5.33334L12.3333 6.94496C12.5084 6.76987 12.6473 6.562 12.7421 6.33323C12.8369 6.10445 12.8856 5.85925 12.8856 5.61163C12.8856 5.36401 12.8369 5.11881 12.7421 4.89004C12.6473 4.66126 12.5084 4.45339 12.3333 4.2783C12.1582 4.1032 11.9504 3.96431 11.7216 3.86955C11.4928 3.77479 11.2476 3.72601 11 3.72601C10.7524 3.72601 10.5072 3.77479 10.2784 3.86955C10.0496 3.96431 9.84177 4.1032 9.66667 4.2783L2.66667 11.2783V13.945Z"
                      stroke="#734A00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <img src={line} alt="logo" style={{ width: "100%" }} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000px"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M7.33334 8.61163C7.33334 8.78844 7.40358 8.95801 7.52861 9.08304C7.65363 9.20806 7.8232 9.2783 8.00001 9.2783C8.17682 9.2783 8.34639 9.20806 8.47141 9.08304C8.59644 8.95801 8.66668 8.78844 8.66668 8.61163C8.66668 8.43482 8.59644 8.26525 8.47141 8.14023C8.34639 8.0152 8.17682 7.94496 8.00001 7.94496C7.8232 7.94496 7.65363 8.0152 7.52861 8.14023C7.40358 8.26525 7.33334 8.43482 7.33334 8.61163Z"
                      fill="#131313"
                    />
                    <path
                      d="M7.33334 13.2783C7.33334 13.4551 7.40358 13.6247 7.52861 13.7497C7.65363 13.8747 7.8232 13.945 8.00001 13.945C8.17682 13.945 8.34639 13.8747 8.47141 13.7497C8.59644 13.6247 8.66668 13.4551 8.66668 13.2783C8.66668 13.1015 8.59644 12.9319 8.47141 12.8069C8.34639 12.6819 8.17682 12.6116 8.00001 12.6116C7.8232 12.6116 7.65363 12.6819 7.52861 12.8069C7.40358 12.9319 7.33334 13.1015 7.33334 13.2783Z"
                      fill="#131313"
                    />
                    <path
                      d="M7.33334 3.94496C7.33334 4.12178 7.40358 4.29134 7.52861 4.41637C7.65363 4.54139 7.8232 4.61163 8.00001 4.61163C8.17682 4.61163 8.34639 4.54139 8.47141 4.41637C8.59644 4.29134 8.66668 4.12178 8.66668 3.94496C8.66668 3.76815 8.59644 3.59858 8.47141 3.47356C8.34639 3.34854 8.17682 3.2783 8.00001 3.2783C7.8232 3.2783 7.65363 3.34854 7.52861 3.47356C7.40358 3.59858 7.33334 3.76815 7.33334 3.94496Z"
                      fill="#131313"
                    />
                    <path
                      d="M7.33334 8.61163C7.33334 8.78844 7.40358 8.95801 7.52861 9.08304C7.65363 9.20806 7.8232 9.2783 8.00001 9.2783C8.17682 9.2783 8.34639 9.20806 8.47141 9.08304C8.59644 8.95801 8.66668 8.78844 8.66668 8.61163C8.66668 8.43482 8.59644 8.26525 8.47141 8.14023C8.34639 8.0152 8.17682 7.94496 8.00001 7.94496C7.8232 7.94496 7.65363 8.0152 7.52861 8.14023C7.40358 8.26525 7.33334 8.43482 7.33334 8.61163Z"
                      stroke="#734A00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.33334 13.2783C7.33334 13.4551 7.40358 13.6247 7.52861 13.7497C7.65363 13.8747 7.8232 13.945 8.00001 13.945C8.17682 13.945 8.34639 13.8747 8.47141 13.7497C8.59644 13.6247 8.66668 13.4551 8.66668 13.2783C8.66668 13.1015 8.59644 12.9319 8.47141 12.8069C8.34639 12.6819 8.17682 12.6116 8.00001 12.6116C7.8232 12.6116 7.65363 12.6819 7.52861 12.8069C7.40358 12.9319 7.33334 13.1015 7.33334 13.2783Z"
                      stroke="#734A00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.33334 3.94496C7.33334 4.12178 7.40358 4.29134 7.52861 4.41637C7.65363 4.54139 7.8232 4.61163 8.00001 4.61163C8.17682 4.61163 8.34639 4.54139 8.47141 4.41637C8.59644 4.29134 8.66668 4.12178 8.66668 3.94496C8.66668 3.76815 8.59644 3.59858 8.47141 3.47356C8.34639 3.34854 8.17682 3.2783 8.00001 3.2783C7.8232 3.2783 7.65363 3.34854 7.52861 3.47356C7.40358 3.59858 7.33334 3.76815 7.33334 3.94496Z"
                      stroke="#734A00"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            {" "}
            <Box>
              <Box
                style={{
                  display: "flex",
                  minWidth: "200px",
                  maxidth: "270px",

                  height: "40px",
                  padding: "5px 20px",
                  flexShrink: 0,
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  style={{
                    alignItems: "center",
                    display: "flex",
                    width: "32px",
                    height: "32px",
                    justifyContent: " center",
                  }}
                >
                  <img src={frame4} alt="logo" />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: " center",
                    gap: "2px",
                    padding: "16px",
                    alignSelf: "stretch",
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    style={{
                      color: "var(--Black, #131313)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: " 500",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Gael Harry
                  </Typography>
                  <Typography
                    style={{
                      color: "var(--Dark-Gray, #454545)",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    New York Finest Fruits
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            {" "}
            <Box>
              <Box
                style={{
                  display: "flex",
                  minWidth: "200px",
                  maxidth: "270px",
                  height: "40px",
                  padding: "5px 20px",
                  flexShrink: 0,
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                }}
              >
                <Box
                  style={{
                    alignItems: "center",
                    display: "flex",
                    width: "32px",
                    height: "32px",
                    justifyContent: " center",
                  }}
                >
                  <img src={frame5} alt="logo" />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    justifyContent: " center",
                    gap: "2px",
                    padding: "16px",
                    alignSelf: "stretch",
                    borderRadius: "16px",
                  }}
                >
                  <Typography
                    style={{
                      color: "var(--Black, #131313)",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: " 500",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Jenna Sullivan
                  </Typography>
                  <Typography
                    style={{
                      color: "var(--Dark-Gray, #454545)",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: " 400",
                      lineHeight: "normal",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    Walmart
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Typography
              style={{
                color: "var(--Dark-Orange, #734A00)",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "-0.3px",
              }}
            >
              All customers
            </Typography>
            <Box width="14px" height="14px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
                  stroke="#734A00"
                  strokeLinecap="round" // Fix property name
                  strokeLinejoin="round" // Fix property name
                />
              </svg>
            </Box>
          </Box>
        </Box>

        <Box minWidth="45%" minHeight="300px">
          <Box
            style={{
              display: "flex",
              // minHeight: "200px",
              padding: "14px 40px",
              flexDirection: " column",
              alignItems: "flex-start",
              gap: "38px",
              flex: " 1 0 0",
              // border: "2px solid  green",
              borderRadius: "16px",
              background: "var(--White, #FFF)",
              alignSelf: "stretch",
            }}
          >
            <Box>
              <Box
                style={{
                  display: "flex",
                  gap: "280px",
                 
                }}
              >
                <Typography
                  style={{
                    color: "var(--Black, #131313)",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontStyle: "normal",
                    fontWeight: " 600",
                    lineHeight: "normal",
                    letterSpacing: "-0.2px",
                  }}
                >
                  Growth
                </Typography>
                <Box
                  style={{
                    alignItems: "flex-start",
                    gap: "36px",
                  }}
                >
                  <img src={year1} alt="Image Description" />{" "}
                </Box>
              </Box>
              <Box height="200px">
                <Line
                  id="yourChartId"
                  data={data1}
                  options={{
                    cutout: "1000%",
                    maintainAspectRatio: false,
                    elements: {
                      line: {
                        borderColor: "var(--Light-Green)",
                        borderWidth: 1,
                        background: gradient(),
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "15px",
              flex: "1 0 0",
              alignSelf: "stretch",
              // border: "2px solid  yellow",
              borderRadius: "16px",
              // background: "var(--White, #FFF)",
            }}
            mt="5px"
          >
            <Box
              style={{
                display: "flex",
                padding: "16px",
                flexDirection: " column",
                alignItems: "flex-start",
                gap: "16px",
                flex: " 1 0 0",
                // border: "2px solid  blue",
                borderRadius: "16px",
                background: "var(--White, #FFF)",
                alignSelf: "stretch",
              }}
            >
              <Typography
                style={{
                  color: "var(--Mid-Gray, #7D7D7D)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.4px",
                }}
              >
                Top month
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.2px",
                }}mt="15px"
              >
                November
              </Typography>
              <Typography
                style={{
                  color: "var(--Orange, #FFA500)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-0.2px",
                }}mt="-10px"
              >
                2019
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                padding: "16px",
                flexDirection: " column",
                alignItems: "flex-start",
                gap: "16px",
                flex: " 1 0 0",
                // border: "2px solid  blue",
                borderRadius: "16px",
                background: "var(--White, #FFF)",
                alignSelf: "stretch",
              }}
            >
              {" "}
              <Typography
                style={{
                  color: "var(--Mid-Gray, #7D7D7D)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.4px",
                }}
              >
                Top year
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Orange, #734A00)",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.2px",
                }}mt="15px"
              >
                2023
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Gray, #454545)",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}mt="-10px"
              >
                96K sold so far
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                padding: "16px",
                flexDirection: " column",
                alignItems: "flex-start",
                gap: "16px",
                flex: " 1 0 0",
                // border: "2px solid  blue",
                borderRadius: "16px",
                background: "var(--White, #FFF)",
                alignSelf: "stretch",
              }}
            >
              {" "}
              <Typography
                style={{
                  color: "var(--Mid-Gray, #7D7D7D)",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 600",
                  lineHeight: "normal",
                  letterSpacing: "-0.4px",
                }}
              >
                Top buyer
              </Typography>
              <Box
                style={{
                  width: " 24px",
                  height: "24px",
                  flexShrink: "0",
                  borderRadius: "24px",
                }}
              >
                <img src={frame6} alt="no" />
              </Box>
              <Typography
                style={{
                  color: "var(--Black, #131313)",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: " 500",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}
              >
                Maggie Johnson
              </Typography>
              <Typography
                style={{
                  color: "var(--Dark-Gray, #454545)",
                  fontFamily: "Inter",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "normal",
                  letterSpacing: "-0.3px",
                }}mt="-10px"
              >
                Oasis Organic Inc.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*row 3 */}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "20px",
          flex: "1 0 0",
          alignSelf: "stretch",
          // border: "2px solid  green",
        }}
        mt="20px"
      >
        <Box
          style={{
            display: "flex",
            minWidth: "250px",
            minHeight: "130px",
            padding: "24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            alignSelf: "stretch",
            borderRadius: "16px",
            background: "var(--White, #FFF)",
          }}
        >
          <Typography
            style={{
              color: "var(--Black, #131313)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: "normal",
              letterSpacing: "-0.2px",
            }}
          >
            Chats
          </Typography>
          <Typography
            style={{
              color: "var(--Dark-Gray, #454545)",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: " 400",
              lineHeight: "normal",
              letterSpacing: "-0.3px",
            }}
          >
            2 unread messages
          </Typography>
          <Box
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              padding: "20px",
              gap: "20px",
              flexWrap: "wrap",
              alignSelf: "stretch",
              // border: "2px solid red",
            }}
          >
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              {" "}
              <img src={frame6} alt="logo" />
            </Box>
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              <img src={frame} alt="logo" />
            </Box>
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              <img src={frame2} alt="logo" />
            </Box>

            <Box
              style={{
                alignItems: "center",
                display: "flex",
                width: "32px",
                height: "32px",
                justifyContent: " center",
              }}
            >
              {" "}
              <img src={frame1} alt="logo" />
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "300px",
            minHeight: "10px",
            padding: "20px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            alignSelf: "stretch",
            borderRadius: "16px",
            background: "var(--White, #FFF)",
            // border:"2px solid red"
          }}
        >
          <Typography
            style={{
              color: "var(--Dark Gray, #131313)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: "normal",
              letterSpacing: "-0.2px",
            }}
          >
            Top states
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <Box
              style={{
                display: "flex",
                // height: "180px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              {" "}
              <img src={bar3} alt="logo" />
            </Box>
            <Box
              style={{
                display: "flex",
                width: "229px",
                // height: "180px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              <img src={bar1} alt="logo" />{" "}
            </Box>
            <Box
              style={{
                display: "flex",
                width: "207px",
                // height: "180px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              <img src={bar} alt="logo" />{" "}
            </Box>
            <Box
              style={{
                display: "flex",
                // height: "180px",
                width: "150px",
                // padding: "6px 8px ",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                alignSelf: "stretch",
                // gap: "8px",
              }}
            >
              <img src={bar2} alt="logo" />{" "}
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "10px",
            padding: "14px  50px",
            // minHeight: "200px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
            alignSelf: "stretch",
            borderRadius: "16px",
            background: "var(--White, #FFF)",
          }}
        >
          <Typography
            style={{
              color: "var(--Black, #131313)",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: " 600",
              lineHeight: "normal",
              letterSpacing: "-0.2px",
            }}
          >
            New deals
          </Typography>
          <Box
            style={{
              display: "flex",
              alignContent: "flex-start",
              alignItems: "flex-start",
              gap: "8px",
              flexWrap: "wrap",
              alignSelf: "stretch",
              padding: "10px ",
              // border: "2px solid red",
            }}
          >
            <Box display="flex" gap="3px">
              {" "}
              <img src={avatar} alt="logo" />
              <img src={avatar1} alt="logo" />
              <img src={avatar2} alt="logo" />
            </Box>{" "}
            <Box display="flex" gap="3px">
              <img src={avatar3} alt="logo" />

              <img src={avatar5} alt="logo" />
            </Box>
            <Box display="flex" gap="3px">
              <img src={avatar4} alt="logo" /> <img src={avatar6} alt="logo" />
              <img src={avatar7} alt="logo" />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Body;
