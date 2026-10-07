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
        {
          title: "Distributor Company",
          url: "/dashboard/admin/distributor-company",
        },
        {
          title: "Distributor Manager",
          url: "/dashboard/admin/distributor-manager",
        },
      ],
    },
  ],
};
