import { useRouter } from 'next/router';

const Producto = () => {
  const router = useRouter();
  console.log(router.query.url);
  return (
    <div>url    </div>
  );
};

export default Producto;
