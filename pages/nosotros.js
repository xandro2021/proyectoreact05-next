import styles from '../styles/nosotros.module.css';
import Image from 'next/future/image';
import Layout from '../components/layout';

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarraLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>
              Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor, at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin! Quisque id diam vel quam.
              Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Maecenas pharetra convallis posuere morbi leo urna, molestie at elementum eu.
              Et tortor consequat id porta nibh venenatis. Cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta
            </p>

            <p>
              Hendrerit gravida rutrum quisque non tellus orci, ac auctor augue mauris augue neque, gravida. Nunc congue nisi, vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet?
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
