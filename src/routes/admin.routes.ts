const prefix = "/admin";

export const adminRoutes = {
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
          title: "National Power Authority",
          url: "/dashboard/admin/power-authority",
        },
      ],
    },
  ],
};
