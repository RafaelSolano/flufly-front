import React from 'react';
import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Esto es un post: {id}</h1>;
}

export default Post;
