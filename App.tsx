import { useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TarjetaProps = {
  nombre: string;
  descripcion: string;
};

type Tarea = {
  id: string;
  titulo: string;
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
  const [nombre, setNombre] = useState('');
  const [ultimaActualizacion, setUltimaActualizacion] =
    useState('Aun sin cambios');

  useEffect(() => {
    console.log('useEffect -> cambio detectado', { contador, nombre });
    const hora = new Date().toLocaleTimeString();
    setUltimaActualizacion(`Cambio detectado a las ${hora}`);
  }, [contador, nombre]);

  const tareas: Tarea[] = [
    { id: '1', titulo: 'Aprender React Native' },
    { id: '2', titulo: 'Practicar con componentes' },
    { id: '3', titulo: 'Crear una app de tareas' },
    { id: '4', titulo: 'Publicar en la Play Store' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
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
          <Pressable
            style={styles.boton}
            onPress={() => setLogueado(!logueado)}
          >
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

        <View style={styles.card}>
          <Text style={styles.titulo}>Lista de Tareas</Text>
          {tareas.map(tarea => (
            <View key={tarea.id} style={styles.itemTarea}>
              <Text style={styles.textoTarea}>{tarea.titulo}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>Formulario</Text>
          <Text style={styles.label}>Escribe tu nombre:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChangeText={setNombre}
          />
          {nombre ? (
            <Text style={styles.saludo}>Hola, {nombre}!</Text>
          ) : (
            <Text style={styles.placeholder}>Por favor, ingresa tu nombre</Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.titulo}>useEffect basico</Text>
          <Text style={styles.parrafo}>
            Cada vez que cambia el contador o el nombre, se ejecuta useEffect.
          </Text>
          <Text style={styles.estadoEffect}>{ultimaActualizacion}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  container: {
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
  itemTarea: {
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  textoTarea: {
    fontSize: 16,
    color: '#0F172A',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#0F172A',
    marginBottom: 12,
  },
  saludo: {
    fontSize: 16,
    color: '#166534',
    fontWeight: '600',
  },
  placeholder: {
    fontSize: 16,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
  estadoEffect: {
    marginTop: 10,
    fontSize: 15,
    color: '#1D4ED8',
    fontWeight: '600',
  },
});

export default App;
