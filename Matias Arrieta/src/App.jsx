import AdivinaComponent from "./AdivinaComponent";
import MiniaturaComponent from "./miniatura_component";


function App() {
  return (
    <div>
      {/* Tu juego de adivinar con estadísticas */}
      <AdivinaComponent />
      
      <hr />

      {/* Tu componente con la imagen de fútbol americano */}
      <MiniaturaComponent
        titulo="Miniatura"
        imagen="https://i.insider.com/5ffcd3a7d184b30018aae349?width=1000&format=jpeg&auto=webp"
      />
    </div>
  );
}

export default App;
