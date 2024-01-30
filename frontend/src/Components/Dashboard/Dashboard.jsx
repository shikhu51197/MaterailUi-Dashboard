import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "1487px",
        height: "922px",
        padding: "16px",
        alignItems: "flex-start",
        gap: "16px",
        borderRadius: "32px",
        background: "var(--Off-White, #F6F6F3)",
      }}
    >
      <Sidebar />
      <Body />
    </Box>
  );
};

export default Dashboard;
