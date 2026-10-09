const prefix = "/admin";

export const customerRoutes = {
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
          title: "Take Subscription",
          url: "/dashboard/customer/subscription",
        },
        {
          title: "All Subscription",
          url: "/dashboard/customer/subscription/all-subscription",
        },
        {
          title: "Emergency Outage",
          url: "/dashboard/customer/emergency-outage",
        },
        {
          title: "Create Complaint",
          url: "/dashboard/customer/complaint",
        },
      ],
    },
  ],
};
