import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TarjetaProps = {
  nombre: string;
  descripcion: string;
};

function TarjetaPresentacion({ nombre, descripcion }: TarjetaProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Hola soy {nombre}</Text>
      <Text style={styles.parrafo}>{descripcion}</Text>
    </View>
  );
}

function App() {
  const [contador, setContador] = useState(0);
  const [mostrarTarjeta, setMostrarTarjeta] = useState(true);
  const [logueado, setLogueado] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TarjetaPresentacion
        nombre="Luis"
        descripcion="Estoy aprendiendo React Native paso a paso con props."
      />
      <TarjetaPresentacion
        nombre="Desarrollador Senior"
        descripcion="Tambien practico componentes reutilizables."
      />

      <View style={styles.card}>
        <Text style={styles.titulo}>Contador: {contador}</Text>
        <View style={styles.filabotones}>
          <Pressable
            style={styles.boton}
            onPress={() => setContador(contador + 1)}
          >
            <Text style={styles.textoBoton}>+1</Text>
          </Pressable>

          <Pressable style={styles.boton} onPress={() => setContador(0)}>
            <Text style={styles.textoBoton}>Reiniciar</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>Evento onPress</Text>
        <Pressable
          style={styles.boton}
          onPress={() => setMostrarTarjeta(!mostrarTarjeta)}
        >
          <Text style={styles.textoBoton}>
            {mostrarTarjeta ? 'Ocultar Tarjeta' : 'Mostrar Tarjeta'}
          </Text>
        </Pressable>
        {mostrarTarjeta ? (
          <Text style={styles.mensaje}>
            Excelente, ya manejas eventos basicos.
          </Text>
        ) : null}
      </View>
      <View style={styles.card}>
        <Text style={styles.titulo}>Renderizado condicional</Text>
        <Pressable style={styles.boton} onPress={() => setLogueado(!logueado)}>
          <Text style={styles.textoBoton}>
            {logueado ? 'Cerrar Sesión' : 'Iniciar Sesión'}
          </Text>
        </Pressable>
        {logueado ? (
          <Text style={styles.mensajeOk}>Bienvenido, estas logueado.</Text>
        ) : (
          <Text style={styles.mensajeInfo}>Por favor, inicia sesión.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 12,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0F172A',
  },
  parrafo: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 22,
  },
  filabotones: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  boton: {
    backgroundColor: '#0F172A',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  mensaje: {
    marginTop: 12,
    fontSize: 16,
    color: '#166534',
    fontWeight: '600',
  },
  mensajeOk: {
    marginTop: 12,
    fontSize: 16,
    color: '#166534',
    fontWeight: '600',
  },
  mensajeInfo: {
    marginTop: 12,
    fontSize: 16,
    color: '#B45309',
    fontWeight: '600',
  },
});

export default App;
