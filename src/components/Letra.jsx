import useLetras from '../hooks/useLetras';
//components
import Sppiner from './Spinner';
const Letra = () => {
  const { letra, cargando } = useLetras();
  return cargando ? <Sppiner /> : <div>{letra}</div>;
};

export default Letra;
