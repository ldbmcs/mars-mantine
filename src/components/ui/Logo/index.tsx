import React, { FC } from 'react';
import { Image, useMantineTheme } from '@mantine/core';
import logoLightImg from './logo-light.png';
import logoDarkImg from './logo-dark.png';
import { Home } from 'config/constants/routerPath';
import { ColorSchemeType } from './type';
import { AnchorLink } from '..';

interface LogoProps extends LogoImageProps {
  href?: string
}

interface LogoImageProps {
  colorScheme?: ColorSchemeType
}

const LogoImage: FC<LogoImageProps> = ({ colorScheme }) => {
  const { colorScheme: defaultColorScheme } = useMantineTheme();
  return (
    <Image
      src={(colorScheme ?? defaultColorScheme) === 'dark' ? logoLightImg.src : logoDarkImg.src}
      alt="xm-logo"
      width={80}
      height={32}
    />
  );
};

const Logo: FC<LogoProps> = ({ href = '', colorScheme }) => (
    <>
      {href ? (
        <AnchorLink href={Home}>
          <LogoImage colorScheme={colorScheme} />
        </AnchorLink>
      ) : (
        <LogoImage colorScheme={colorScheme} />
      )}
    </>
  );

export default Logo;
