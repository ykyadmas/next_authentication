import type { SidebarLink } from "@/types";

export const sidebarLinks: SidebarLink[] = [
   {
        imgURL: "/icons/dashboard.svg",
        route: "/myAccount",
        label: "Dashboard",
      },
  {
    imgURL: "/icons/home.svg",
    route: "/myAccount/proposalDisplay",
    label: "Proposal",
  },
  {
    imgURL: "/icons/insurance.svg",
    route: "/myAccount/ProofSubmit",
    label: "Insurance",
  },
  {
    imgURL: "/icons/logout.svg",
    route: "/api/auth/signout",
    label: "Logout",
  }
];

export const claimSideBarLink: SidebarLink[] = [
  {
      imgURL: "/icons/dashboard.svg",
      route: "/claimAdjuster",
      label: "Dashboard",
    },
{
  imgURL: "/icons/home.svg",
  route: "/claimAdjuster/claim",
  label: "Claim",
},
{
  imgURL: "/icons/logout.svg",
  route: "/api/auth/signout",
  label: "Logout",
}
];
export const adminSideBarLink: SidebarLink[] = [
{
      imgURL: "/icons/dashboard.svg",
      route: "/admin",
      label: "Dashboard",
},
{
  imgURL: "/icons/home.svg",
  route: "/admin/proposal",
  label: "Proposal",
},
{
  imgURL: "/icons/logout.svg",
  route: "/api/auth/signout",
  label: "Logout",
}
];
export const insuranveSideBarLink: SidebarLink[] = [
  {
      imgURL: "/icons/dashboard.svg",
      route: "/insuranceOfficer/dashboard",
      label: "Dashboard",
    },
{
  imgURL: "/icons/home.svg",
  route: "/insuranceOfficer/insuranceDetail",
  label: "Insurance ",
},
{
  imgURL: "/icons/logout.svg",
  route: "/api/auth/signout",
  label: "Logout",
}
];





