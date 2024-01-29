import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const TopNav = (): React.ReactElement => {
  return (
    <AppBar className="top-nav" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.path} key={page.name}>
                <Button
                  key={page.name}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNav;
