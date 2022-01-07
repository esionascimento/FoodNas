import {
  HomeOutlined,
  SettingFilled,
  LogoutOutlined,
  BugOutlined,
  ProfileOutlined
} from '@ant-design/icons';

export const iconsListAdmin = [
  {
    name: "dashboard",
    text: "Dashboard",
    path: "/admin/dashboard",
    active: true,
    access: true,
    icon: <HomeOutlined />
  },
  {
    name: "profile",
    text: "Perfil",
    path: "https://documenter.getpostman.com/view/8141632/Tz5qZGZR#bf94bad1-6090-4ee5-9839-ef309e533d0a",
    active: true,
    access: true,
    icon: <ProfileOutlined />
  },
  {
    name: "config",
    text: "Configuração",
    path: "",
    active: false,
    access: false,
    icon: <SettingFilled />
  },
  {
    name: "report",
    text: "Report",
    path: "",
    active: false,
    access: false,
    icon: <BugOutlined />
  },
  {
    name: "logout",
    text: "Sair",
    path: "",
    active: false,
    access: false,
    icon: <LogoutOutlined />
  },
];