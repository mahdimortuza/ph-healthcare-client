import { DrawerItem } from "@/types";
import {
  default as InboxIcon,
  default as MailIcon,
} from "@mui/icons-material/Mail";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

type IProps = {
  item: DrawerItem;
  index: number;
};

const SidebarItem = ({ item, index }: IProps) => {
  return (
    <Link href="/">
      <ListItem key={index} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
