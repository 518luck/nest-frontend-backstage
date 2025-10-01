import { Typography, Tag } from 'antd';

import PathListStore from '@/components/stores/Path-list-store';

const { Text } = Typography;

const BreadcrumbNav = () => {
  const { pathList } = PathListStore();
  console.log('🚀 ~ BreadcrumbNav ~ pathList:', pathList);
  const currentTitle = pathList[pathList.length - 1]?.name || '';

  return (
    <nav className="flex h-18 items-center justify-between">
      <Text className="text-[1.75rem] text-white">{currentTitle}</Text>
      <div>
        {pathList.map((item, index) => (
          <span key={item.path} className="items-center">
            <Tag
              bordered={false}
              className="cursor-pointer bg-[#2f2f2f] text-white"
            >
              {item.name}
            </Tag>
            {index < pathList.length - 1 && (
              <span className="mx-1 text-gray-400">-&gt;</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
};
export default BreadcrumbNav;
