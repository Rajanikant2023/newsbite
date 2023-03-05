import {
  Stack,
  Box,
  IconButton,
  Paper,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import { SearchBar } from ".";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const genres = [
    "health",
    "education",
    "politics",
    "entertainment",
    "buisness",
    "technology",
    "other",
  ];
  return (
    <div className="navbar">
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{ position: "sticky", top: 0, justifyContent: "space-between" }}
      >
        <Paper sx={{ background: "transparent" }}>
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "red" }}
            aria-label="search"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Paper>
        <SearchBar />
        <Box>
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "red" }}
            aria-label="search"
          >
            <PowerSettingsNewIcon />
          </IconButton>
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "red" }}
            aria-label="search"
            onClick={() => navigate("/")}
          >
            <HomeIcon />
          </IconButton>
        </Box>
      </Stack>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "240px",
          },
        }}
      >
       <Box sx={{textAlign:"center"}}>
        <Typography color={"goldenrod"} variant="h6" sx={{ my: 2 }} onClick={()=>navigate('/')}>
          <NewspaperIcon onClick={()=>navigate('/')} /> News-Bite
        </Typography>
        <Divider />
        <List>
          {genres.map((genre) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText sx={{textAlign:"center"}}>
                <li>
                  <Link
                    to={`/${genre}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {genre}
                  </Link>
                </li>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
