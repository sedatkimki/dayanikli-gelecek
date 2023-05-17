import { Divider, Image, rem, TypographyStylesProvider, Container } from '@mantine/core';
import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Content = getMDXComponent(code);

  return (
    <>
      {/* @ts-ignore */}
      <TypographyStylesProvider>
        <Content components={components} />
      </TypographyStylesProvider>
    </>
  );
}

function a(props) {
  return <Link {...props} />;
}

function hr(props) {
  return <Divider my="sm" />;
}
function img(props) {
  return <Image radius="md" {...props} />;
}
const components: MDXComponents = {
  a,
  hr,
  img,
};
