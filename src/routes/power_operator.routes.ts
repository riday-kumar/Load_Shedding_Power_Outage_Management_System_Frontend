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
        {
          title: "Change Password",
          url: "/dashboard/profile/change-password",
        },
      ],
    },
    {
      title: "Management",
      url: "#",
      items: [
        {
          title: "Add Load Shedding",
          url: "/dashboard/power-operator/loadshedding",
        },
        {
          title: "Pending Load Shedding",
          url: "/dashboard/power-operator/loadshedding/pending",
        },
        {
          title: "Approved Load Shedding",
          url: "/dashboard/power-operator/loadshedding/approved",
        },

        {
          title: "Published Load Shedding",
          url: "/dashboard/power-operator/loadshedding/published",
        },
        {
          title: "Emergency Outage",
          url: "/dashboard/power-operator/emergency-outage",
        },
      ],
    },
  ],
};
