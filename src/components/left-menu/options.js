import React from 'react'

import {
  HomeOutlined,
  SettingFilled,
  LogoutOutlined,
  BugOutlined,
  ProfileOutlined
} from '@ant-design/icons'

export const iconsListAdmin = [
  {
    id: 1,
    name: 'dashboard',
    text: 'Dashboard',
    path: '/dashboard',
    active: true,
    access: true,
    icon: <HomeOutlined />
  },
  {
    id: 2,
    name: 'profile',
    text: 'Perfil',
    path: '/profile',
    active: true,
    access: true,
    icon: <ProfileOutlined />
  },
  {
    id: 3,
    name: 'config',
    text: 'Configuração',
    path: '/setting',
    active: false,
    access: false,
    icon: <SettingFilled />
  },
  {
    id: 4,
    name: 'report',
    text: 'Report',
    path: '/report',
    active: false,
    access: false,
    icon: <BugOutlined />
  },
  {
    id: 5,
    name: 'logout',
    text: 'Sair',
    path: '/',
    active: false,
    access: false,
    icon: <LogoutOutlined />
  }
]
