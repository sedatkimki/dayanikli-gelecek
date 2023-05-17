import { Divider, Image, rem, TypographyStylesProvider, Container } from '@mantine/core';
import type { MDXComponents } from 'mdx/types';
import { getMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

interface MdxProps {
  code: string;
}

function a(props: any) {
  return <Link {...props} />;
}

function hr(props: any) {
  return <Divider my="sm" {...props} />;
}
function img(props: any) {
  return <Image radius="md" {...props} />;
}
const components: MDXComponents = {
  a,
  hr,
  img,
};
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
