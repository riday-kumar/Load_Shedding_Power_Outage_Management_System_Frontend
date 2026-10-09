const prefix = "/admin";

export const powerOperatorRoutes = {
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
          title: "Load Shedding",
          url: "/dashboard/power-operator/loadshedding",
        },
      ],
    },
  ],
};
