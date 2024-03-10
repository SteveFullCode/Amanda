import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import * as React from "react";

const navLinks = [
  {
    title: "Serviços",
    path: "#serviços",
  },
  {
    title: "Sobre/Agendamentos",
    path: "#regras",
  },
  {
    title: "Sobre",
    path: "#sobre",
  },
];

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="gap-10 bg-red-200 h-full"
    >
      <List className="flex flex-col gap-10">
        {navLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton onClick={() => scrollToSection(link.path)}>
              {link.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const scrollToSection = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden ">
      <Button onClick={toggleDrawer(true)}>
        <MenuOpenIcon className="text-zinc-400" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
