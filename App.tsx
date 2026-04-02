import { StyleSheet, Text, View } from 'react-native';
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
});

export default App;
