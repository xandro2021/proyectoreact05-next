import Link from 'next/link';
import Layout from '../components/layout';

const Pagina404 = () => {
  return (
    <Layout
      title="Pagina No Encontrada"
    >
      <p className="error">Pagina no encontrada 404</p>

      <Link href="/">
        <a className="error-enlace">Ir a Inicio</a>
      </Link>
    </Layout>
  );
};

export default Pagina404;
