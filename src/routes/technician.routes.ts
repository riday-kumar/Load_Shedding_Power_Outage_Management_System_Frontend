const prefix = "/admin";

export const technicianRoutes = [
  {
    title: "Profile",
    items: [
      {
        title: "Profile",
        url: "/dashboard/profile",
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "overview",
        url: `${prefix}`,
      },
      {
        title: "All Works",
        url: `${prefix}/`,
      },
    ],
  },
];
