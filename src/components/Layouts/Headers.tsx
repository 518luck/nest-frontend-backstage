import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Typography, Avatar } from 'antd';
import { GiHamburgerMenu } from 'react-icons/gi';

import LayoutStore from '@/components/stores/Layout-store';
import PathListStore, {
  type pathListType,
} from '@/components/stores/Path-list-store';

const { Header } = Layout;
const { Text } = Typography;
const MenuItems = [
  {
    key: '1',
    label: <Text className="text-white">控制台</Text>,
  },
  {
    key: '2',
    label: <Text className="text-white">设置</Text>,
  },
];
const Headers = () => {
  const navigate = useNavigate();
  const { toggleCollapsed } = LayoutStore();
  const { pathList, setPathList } = PathListStore();

  const navigatorClick = (e: pathListType) => {
    setPathList([e]);
    navigate(e.path);
  };

  return (
    <Header className="h-14 border-l border-[#1f1f1f80] bg-[#141414] p-2">
      <div className="flex h-10 w-full items-center justify-between">
        <div className="flex items-center justify-start gap-6">
          <div className="cursor-pointer">
            <GiHamburgerMenu onClick={toggleCollapsed} className="text-2xl" />
          </div>
          <div>
            <Menu
              mode="horizontal"
              items={MenuItems}
              className="bg-transparent"
            />
          </div>
        </div>
        <div>
          <Avatar
            src="https://picsum.photos/200/300"
            alt="User Avatar"
            className="cursor-pointer"
          />
        </div>
      </div>
    </Header>
  );
};
export default Headers;
