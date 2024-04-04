import assets from "@/assets";
import { UserRole } from "@/types";
import { drawerItems } from "@/utils/drawerItems";
import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <Box>
      <Stack
        sx={{ py: 1, mt: 1 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component="h1" sx={{ cursor: "pointer" }}>
          PH Healthcare
        </Typography>
      </Stack>
      <List>
        {drawerItems("admin" as UserRole).map((item, index) => (
          <SidebarItem key={index} index={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
