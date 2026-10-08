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
      ],
    },
  ],
};
