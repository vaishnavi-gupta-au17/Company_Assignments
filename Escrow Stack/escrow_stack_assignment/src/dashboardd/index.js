import React from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import logo from "../images/eazypayouts.png";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ArticleIcon from "@mui/icons-material/Article";
import LogoutIcon from "@mui/icons-material/Logout";
import CashImage from "../images/Vector.png";
import TableData from "../table/index";

const Dashboard = () => {
  const [selectedAccount, setSelectedAccount] = React.useState("account1");
  const handleChange = (event) => {
    setSelectedAccount(event.target.value);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2} md={1} lg={1}>
          {/* Company logo */}
          <div style={{ margin: "20% 0 0 2%", textAlign: "center" }}>
            <img src={logo} alt="logo" style={{ width: "50px" }} />
            <Typography
              style={{
                margin: "7% 0 0 0",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              EazyPayouts
            </Typography>
          </div>
          <div
            style={{
              margin: "70% 0 0 0",
              color: "#fff",
              backgroundColor: "#00005C",
            }}
          >
            <Button
              style={{
                color: "#fff",
                textTransform: "capitalize",
              }}
            >
              <SystemUpdateAltIcon /> Loads
            </Button>
          </div>
          <div
            style={{
              margin: "2% 0 0 0",
              color: "#fff",
              backgroundColor: "#00005C",
            }}
          >
            <Button
              style={{
                textTransform: "capitalize",
                color: "#fff",
              }}
            >
              <SyncAltIcon />
              Transaction
            </Button>
          </div>
          <div
            style={{
              margin: "2% 0 0 0",
              color: "#fff",
              backgroundColor: "#00005C",
            }}
          >
            <Button
              style={{
                textTransform: "capitalize",
                color: "#fff",
              }}
            >
              <ArticleIcon />
              Statement
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <Button>
              <LogoutIcon />
              Logout
            </Button>
          </div>
        </Grid>
        {/* hr vertical border */}

        <div
          style={{
            borderLeft: "1px solid #000",
            height: "690px",
          }}
        ></div>

        {/* Table */}
        <Grid item xs={11} sm={8} md={10} lg={10}>
          <Grid container>
            <Grid
              container
              spacing={2}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "1% 0 0 0",
              }}
            >
              <Grid item xs={2}>
                {" "}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Company Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={10}>Company 1</MenuItem>
                    <MenuItem value={20}>Company 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                {" "}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Account Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={selectedAccount}
                    onChange={handleChange}
                  >
                    <MenuItem value="account1">Account 1</MenuItem>
                    <MenuItem value="account2">Account 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box
                style={{
                  border: "1px solid #000",
                  // width: "18%",
                  margin: "2% 0 0 0",
                }}
              >
                <Grid container style={{ margin: "5%" }}>
                  <Grid item xs={4}>
                    <img src={CashImage} />
                  </Grid>
                  <Grid item xs={8}>
                    {" "}
                    <Typography>Available Balance</Typography>
                    <Typography style={{ color: "#219653" }}>
                      ₹ 8888,88,88,888
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Typography style={{ margin: "10% 0 20% 0" }}>
                Latest Loads are displayed here
              </Typography>
            </Grid>
            <TableData selectedAccount={selectedAccount} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
