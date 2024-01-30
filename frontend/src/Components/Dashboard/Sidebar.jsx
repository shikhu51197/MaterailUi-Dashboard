import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../Assests/Logo.png";
import search from "../../Assests/search.png";
import item from "../../Assests/Sidebar item 01.png";
import item1 from "../../Assests/Sidebar item 02.png";
import item2 from "../../Assests/Sidebar item 03.png";
import item3 from "../../Assests/Sidebar item 04.png";
import item4 from "../../Assests/Sidebar item 06.png";
import item5 from "../../Assests/Sidebar item 07.png";
import item6 from "../../Assests/Sidebar item.png";
import item7 from "../../Assests/Sidebar nest.png";
import item8 from "../../Assests/Sidebar item (1).png";
import item9 from "../../Assests/Tag.png";
import user from "../../Assests/Avatar (7).png";

const Sidebar = () => {
  return (
    <Box
      style={{
        display: "flex",
        minWidth: "280px",
        maxWidth: "320px",
        flexDirection: "column",
        alignItems: "flex-start ",
        alignSelf: "stretch",
        borderRadius: "16px",
        background: "var(--White, #FFF)",
        flex: "1 0 0",
      }}
    >
      <Box
        style={{
          display: "flex",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px 24px 12px 24px",
          flexDirection: "column",
          alignSelf: "stretch",
        }}
      >
        <img src={logo} alt="logo" />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start ",
          alignSelf: "stretch",
          flex: "1 0 0",
        }}
      >
        <Box
          style={{
            display: "flex",
            padding: "0px 12px 12px 12px",
            flexDirection: "column",
            alignItems: "flex-start ",
            alignSelf: "stretch",
          }}
          mt="-120px"
        >
          <img src={search} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "12px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "12px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item7} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "12px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item1} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "12px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item2} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "12px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item3} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "12px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item4} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "12px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item5} alt="logo" />
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          height: "180px",
          padding: "16px 8px 24px 8px",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            height: "40px",
            padding: "0px 20px",
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
            <img src={user} alt="logo" />
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: " center",
              gap: "4px",
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
                letterSpacing: "-0.25px",
              }}
            >
              Gustavo Xavier
            </Typography>
            <img src={item9} alt="logo" />
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "8px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item8} alt="logo" />
        </Box>
        <Box
          style={{
            display: "flex",
            minWidth: "200px",
            maxidth: "270px",
            padding: "8px 10px",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <img src={item6} alt="logo" />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
