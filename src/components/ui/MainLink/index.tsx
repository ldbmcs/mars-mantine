import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLink, Center } from '@mantine/core';

interface MainLinkProps {
  pathname: string
  icon: ReactNode
  iconActive: ReactNode
  label: string
  activePathNames?: string[]
  className?: string
}

const MainLink: FC<MainLinkProps> = (props) => {
  const { pathname, icon, iconActive, label, activePathNames, className = '' } = props;
  const {
    pathname: currentPath,
    query: { appId },
  } = useRouter();
  const active = currentPath === pathname || activePathNames?.includes(currentPath);

  return (
    <Link href={{ pathname, query: { appId } }} passHref>
      <NavLink
        px="sm"
        py="xs"
        mb="xs"
        variant="light"
        component="a"
        label={label}
        active={active}
        icon={<Center style={{ width: '14px' }}>{active ? iconActive : icon}</Center>}
        className={className}
      />
    </Link>
  );
};

export default MainLink;
