import { useClientLoaderData } from 'umi';
import React from 'react';

export default function SomePage() {
  const { data } = useClientLoaderData();
  return <div>{data}123</div>;
}

export async function clientLoader() {
  return await fetch('/api/data');
}
