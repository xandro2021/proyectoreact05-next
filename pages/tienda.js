import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css';

const Tienda = ({ guitarras }) => {
  return (
    <Layout
      title={'Tienda Virtual'}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarraLA"
    >
      <main className="contenedor">

        <h1 className="heading">Nuestra Colección</h1>

        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>

      </main>
    </Layout>
  );
};

// Ver alternativa static en notas. Solo cambia el nombre de la funcion
// Primero se ejecuta la parte del servidor y luego la del cliente
export async function getServerSideProps() {
  // Server Side Fetch
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await respuesta.json();

  // Esto es lo que siempre debe de contener esta funcion. Esto hace que guitarras este disponible en funcion Tienda
  return {
    props: {
      guitarras
    }
  }
}

export default Tienda;
