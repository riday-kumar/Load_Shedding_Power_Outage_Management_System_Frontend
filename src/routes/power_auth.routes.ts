const prefix = "/admin";

export const powerAuthorityRoutes = [
  {
    title: "Management",
    items: [
      {
        title: "overview",
        url: `${prefix}`,
      },
      {
        title: "Create Power Status",
        url: `${prefix}/add-power-authority`,
      },
      {
        title: "Make Power Distribution",
        url: `${prefix}/add-power-authority`,
      },
    ],
  },
];
