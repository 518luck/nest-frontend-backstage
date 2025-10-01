import PathListStore from '@/components/stores/Path-list-store';
import { Typography } from 'antd';

const { Text } = Typography;

const BreadcrumbNav = () => {
  const { pathList } = PathListStore();
  const currentTitle = pathList[pathList.length - 1]?.name || '';

  return (
    <nav className="h-18">
      <Text className="text-white">{currentTitle}</Text>
    </nav>
  );
};
export default BreadcrumbNav;
