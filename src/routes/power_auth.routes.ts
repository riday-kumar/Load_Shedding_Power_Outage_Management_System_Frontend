const prefix = "/admin";

export const powerAuthorityRoutes = {
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
          title: "Power Authority",
          url: "/dashboard/power-auth",
        },
        {
          title: "Power Distribute",
          url: "/dashboard/power-auth/power-distribute",
        },
        {
          title: "Distribution Data",
          url: "/dashboard/power-auth/power-distribution-data",
        },
      ],
    },
  ],
};
