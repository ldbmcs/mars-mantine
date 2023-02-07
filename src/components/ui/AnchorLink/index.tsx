import React, { HTMLAttributeAnchorTarget } from 'react';
import { Anchor } from '@mantine/core';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  text?: string
  target?: HTMLAttributeAnchorTarget
}

const AnchorLink = ({ href, children, text, target, ...restProps }: React.PropsWithChildren<Props>) => (
    <Link href={href || ''} target={target} {...restProps}>
      <Anchor>{children ?? text}</Anchor>
    </Link>
  );

export default AnchorLink;
