const prefix = "/admin";

export const powerOperatorRoutes = [
  {
    title: "Management",
    items: [
      {
        title: "Profile",
        url: "/dashboard/profile",
      },
      {
        title: "overview",
        url: `${prefix}`,
      },
      {
        title: "All LoadShedding",
        url: `${prefix}/add-power-authority`,
      },
      {
        title: "Create Load Shedding Schedule",
        url: `${prefix}/add-power-authority`,
      },
      {
        title: "Get Emergency Outage Req",
        url: `${prefix}/add-power-authority`,
      },
      {
        title: "All Complaints",
        url: `${prefix}/add-power-authority`,
      },
    ],
  },
];
