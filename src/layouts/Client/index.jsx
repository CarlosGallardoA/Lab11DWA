import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import * as ROUTES from "../../router/routes";
import styled from "styled-components";
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LinkCustom to={ROUTES.HOME}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </LinkCustom>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vercer - React - App
          </Typography>
          <LinkCustom to={ROUTES.ADMIN}>
            <Button color="inherit">Admin</Button>
          </LinkCustom>
          <LinkCustom to={ROUTES.CONTACT}>
            <Button color="inherit">Contact</Button>
          </LinkCustom>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
const LinkCustom = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
