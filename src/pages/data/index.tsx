import {useClientLoaderData} from 'umi';

export default function SomePage() {
    const {data} = useClientLoaderData();
    return <div>{data}123</div>;
}

export async function clientLoader() {
    return await fetch('/api/data');
}
