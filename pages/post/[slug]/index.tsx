import { Title, Group } from '@mantine/core';
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();

  return (
    <>
      <Group position="center">
        <Title>Blog {router.query.slug}</Title>
      </Group>
    </>
  );
}
