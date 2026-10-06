export interface sidebarItem {
  title: string;
  url: string;
}

export interface SidebarGroup {
  title: string;
  url: string;
  items: sidebarItem[];
}

// export type SidebarItems = SidebarGroup[];
export interface SidebarItems {
  navMain: SidebarGroup[];
}
