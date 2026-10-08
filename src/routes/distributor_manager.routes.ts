const prefix = "/admin";

export const distributorManagersRoutes = {
  navMain: [
    {
      title: "Profile",
      url: "#",
      items: [
        {
          title: "Profile",
          url: "/dashboard/profile",
        },
      ],
    },
    {
      title: "Management",
      url: "#",
      items: [
        {
          title: "Substation",
          url: "/dashboard/manager/substation",
        },
        {
          title: "Power Operator",
          url: "/dashboard/manager/power-operator",
        },
      ],
    },
  ],
};
