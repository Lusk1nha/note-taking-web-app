import IconArchive from "@/components/icons/icon-archive";
import IconHome from "@/components/icons/icon-home";
import IconSearch from "@/components/icons/icon-search";
import IconSettings from "@/components/icons/icon-settings";
import IconTag from "@/components/icons/icon-tag";
import { PathEnum } from "@/shared/enums/path-enum";
import {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

interface RouteSchema {
  type: "mobile" | "desktop" | "both";
  name: string;
  fullName: string;
  path: string;
  icon: MemoExoticComponent<
    ForwardRefExoticComponent<
      Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
    >
  >;
}

export const ROUTES: RouteSchema[] = [
  {
    type: "both",
    name: "Home",
    fullName: "All Notes",
    path: PathEnum.Home,
    icon: IconHome,
  },
  {
    type: "mobile",
    name: "Search",
    fullName: "Search Notes",
    path: PathEnum.Search,
    icon: IconSearch,
  },
  {
    type: "both",
    name: "Archived",
    fullName: "Archived Notes",
    path: PathEnum.Archived,
    icon: IconArchive,
  },
  {
    type: "mobile",
    name: "Tags",
    fullName: "All Tags",
    path: PathEnum.Tags,
    icon: IconTag,
  },
  {
    type: "mobile",
    name: "Settings",
    fullName: "App Settings",
    path: PathEnum.Settings,
    icon: IconSettings,
  },
];
