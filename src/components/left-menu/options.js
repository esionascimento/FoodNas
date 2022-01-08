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
    path: "/dashboard",
    active: true,
    access: true,
    icon: <HomeOutlined />
  },
  {
    name: "profile",
    text: "Perfil",
    path: "/profile",
    active: true,
    access: true,
    icon: <ProfileOutlined />
  },
  {
    name: "config",
    text: "Configuração",
    path: "/config",
    active: false,
    access: false,
    icon: <SettingFilled />
  },
  {
    name: "report",
    text: "Report",
    path: "/report",
    active: false,
    access: false,
    icon: <BugOutlined />
  },
  {
    name: "logout",
    text: "Sair",
    path: "/",
    active: false,
    access: false,
    icon: <LogoutOutlined />
  },
];