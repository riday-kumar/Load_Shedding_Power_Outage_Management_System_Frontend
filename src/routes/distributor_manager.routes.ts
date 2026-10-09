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
          title: "Substation Power Delivery",
          url: "/dashboard/manager/supply/substation",
        },
        {
          title: "Power Delivery Record",
          url: "/dashboard/manager/supply/record",
        },
        {
          title: "Substation",
          url: "/dashboard/manager/substation",
        },
        {
          title: "Power Operator",
          url: "/dashboard/manager/power-operator",
        },
        {
          title: "Feeders",
          url: "/dashboard/manager/feeders",
        },
        {
          title: "Technician",
          url: "/dashboard/manager/technician",
        },
        {
          title: "Pending LoadShedding",
          url: "/dashboard/manager/load-shedding/pending",
        },
      ],
    },
  ],
};
