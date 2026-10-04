// export const adminRoutes = [
//   {
//     title: "Management",
//     items: [
//       {
//         title: "overview",
//         url: { prefix },
//       },
//       {
//         title: "Add Manager",
//         url: `${prefix}/add-manager`,
//       },
//     ],
//   },
// ];

export interface sidebarItem {
  title: string;
  url: string;
}

export interface SidebarGroup {
  title: string;
  items: sidebarItem[];
}

export type SidebarItems = SidebarGroup[];
