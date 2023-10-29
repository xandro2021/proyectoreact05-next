import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

const Header = () => {
  // Usado para resaltar en el navbar la ruta en la que nos encontramos
  const router = useRouter();

  // Los Links no pueden tener clase, por lo que para asignarles clase se les agrega el comoponente a como hijos
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href='/'>
          <a >
            <Image alt="imagen logotipo" src="/img/logo.svg" width={300} height={40} />
          </a>
        </Link>

        <nav className={styles.navegacion}>
          <Link href="/" >
            <a className={router.pathname === '/' ? styles.active : ''}>
              Inicio
            </a>
          </Link>

          <Link href="/nosotros" >
            <a className={router.pathname === '/nosotros' ? styles.active : ''}>
              Nosotros
            </a>
          </Link>

          <Link href="/tienda" >
            <a className={router.pathname === '/tienda' ? styles.active : ''}>
              Tienda
            </a>
          </Link>

          <Link href="/blog" >
            <a className={router.pathname === '/blog' ? styles.active : ''}>
              Blog
            </a>
          </Link>

          <Link href="/carrito">
            <a>
              <Image width={30} height={25} src="/img/carrito.png" alt="imagen carrito" />
            </a>
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;
