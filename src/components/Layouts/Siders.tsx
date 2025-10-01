import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Typography, type MenuProps } from 'antd';
import { GiBarn, GiEyeball, GiTeamIdea, GiAbstract050 } from 'react-icons/gi';

import LayoutStore from '@/components/stores/Layout-store';
import PathListStore from '../stores/Path-list-store';

import logo from '@/assets/logo.svg';

import type { JSX } from 'react';
const { Sider } = Layout;
const { Title } = Typography;

const items = [
  {
    key: 'control',
    label: '控制台',
    icon: <GiBarn />,
  },
  {
    key: 'user',
    label: '用户管理',
    icon: <GiTeamIdea />,
    children: [
      {
        key: 'intendant',
        label: '管理员',
      },
      {
        key: 'normalUser',
        label: '普通用户',
      },
    ],
  },
  {
    key: 'role',
    label: '角色管理',
    icon: <GiEyeball />,
  },
  {
    key: 'menu',
    label: '菜单管理',
    icon: <GiAbstract050 />,
  },
];

type MenuItemType = {
  key: string;
  label: string;
  icon?: JSX.Element;
  children?: MenuItemType[];
};

const flattenMenu = (menu: MenuItemType[]): MenuItemType[] => {
  let result: MenuItemType[] = [];

  menu.forEach((item) => {
    result.push({ key: item.key, label: item.label as string });
    if (item.children) {
      result = result.concat(flattenMenu(item.children));
    }
  });

  return result;
};

const flatItems: MenuItemType[] = flattenMenu(items);

const Siders = () => {
  const navigate = useNavigate();
  const { collapsed, toggleCollapsed } = LayoutStore();
  const { setPathList } = PathListStore();

  const navigatorClick: MenuProps['onClick'] = (e) => {
    const pathListArray = [...e.keyPath].reverse();

    // 生成每一层对应的对象
    const breadcrumb = pathListArray.map((_, index) => {
      const keys = pathListArray.slice(0, index + 1);
      const path = keys.join('/');

      // 从 flatItems 找到对应 name
      const currentKey = keys[keys.length - 1];
      const item = flatItems.find((i) => i.key === currentKey);

      return {
        key: keys,
        path,
        name: item?.label || '',
      };
    });
    setPathList(breadcrumb);
    navigate(breadcrumb[breadcrumb.length - 1].path);
  };
  return (
    <Sider
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      className="flex h-full flex-col bg-[#141414]"
    >
      <div className="flex h-18 items-center justify-center">
        {collapsed ? (
          <>
            <img src={logo} alt="logo" className="h-8 w-8" />
          </>
        ) : (
          <>
            <img src={logo} alt="logo" className="h-12 w-12" />
            <Title level={4} className="mt-3 whitespace-nowrap text-white">
              管理系统
            </Title>
          </>
        )}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        items={items}
        onClick={navigatorClick}
        className="custom-menu-item h-[calc(100%-72px)] overflow-auto bg-[#141414]"
      />
    </Sider>
  );
};
export default Siders;
