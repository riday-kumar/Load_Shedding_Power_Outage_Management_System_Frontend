const prefix = "/admin";

export const adminRoutes = [
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
        title: "Create Power Authority",
        url: `${prefix}/add-power-authority`,
      },
    ],
  },
];
