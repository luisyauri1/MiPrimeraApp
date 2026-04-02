# Temario de React Basico

## Objetivo
Aprender los fundamentos de React para construir interfaces dinamicas con componentes reutilizables y estado local.

## Prerrequisitos
- JavaScript basico (variables, funciones, arrays, objetos)
- Manejo basico de terminal y editor de codigo

## Resultado Esperado
Al finalizar este temario podras crear una app pequena en React con multiples componentes, manejo de estado, formularios simples y renderizado dinamico.

## Ruta de Aprendizaje (paso a paso)
- Paso 1 al 5: Fundamentos (JSX, componentes, props, estado, eventos)
- Paso 6 al 10: Practica guiada (listas, formularios, efectos basicos, mini proyecto)
- Avanza a tu ritmo: no hay limite de tiempo fijo.

---

## Paso 1: Introduccion y JSX
### Concepto
JSX permite escribir estructura de UI con una sintaxis parecida a HTML dentro de JavaScript.

### Ejemplo
Crear un componente que muestre un titulo y un parrafo.

### Ejercicio
Muestra tu nombre y una breve descripcion usando JSX.

### Solucion esperada
Un componente funcional que renderiza correctamente dos elementos de texto.

---

## Paso 2: Componentes Funcionales
### Concepto
Los componentes son bloques reutilizables de interfaz.

### Ejemplo
Separar la pantalla en componentes: Header, Card y Footer.

### Ejercicio
Crea un componente TarjetaUsuario y reutilizalo dos veces con datos distintos.

### Solucion esperada
Dos tarjetas visibles, generadas por el mismo componente.

---

## Paso 3: Props
### Concepto
Las props son datos que un componente padre envia a un componente hijo.

### Ejemplo
Pasar titulo y descripcion desde App al componente Tarjeta.

### Ejercicio
Crea un componente BotonPersonalizado que reciba texto por props.

### Solucion esperada
El boton cambia su texto segun la prop recibida.

---

## Paso 4: Estado con useState
### Concepto
El estado permite guardar y actualizar datos que cambian en la UI.

### Ejemplo
Contador con botones +1 y -1.

### Ejercicio
Crea un contador con botones sumar, restar y reiniciar.

### Solucion esperada
El numero en pantalla se actualiza en cada accion.

---

## Paso 5: Eventos
### Concepto
Los eventos capturan interacciones del usuario (click, cambio de texto, etc.).

### Ejemplo
Un boton que ejecuta una funcion al hacer click.

### Ejercicio
Muestra un mensaje cuando se presione un boton.

### Solucion esperada
El mensaje cambia o aparece despues del evento.

---

## Paso 6: Renderizado Condicional
### Concepto
Permite mostrar contenido segun una condicion.

### Ejemplo
Mostrar "Sesion iniciada" o "Inicia sesion" segun un boolean.

### Ejercicio
Agrega un boton que alterne entre "Mostrar" y "Ocultar" texto.

### Solucion esperada
El texto aparece y desaparece segun el estado.

---

## Paso 7: Listas y keys
### Concepto
React renderiza colecciones con map y cada item necesita una key unica.

### Ejemplo
Lista de tareas renderizada desde un array.

### Ejercicio
Muestra una lista de 5 elementos usando map.

### Solucion esperada
Los elementos se renderizan correctamente con key unica.

---

## Paso 8: Formularios Basicos
### Concepto
Los formularios controlados usan estado para sincronizar inputs y UI.

### Ejemplo
Input de nombre que muestra "Hola, nombre" en vivo.

### Ejercicio
Crea un formulario con nombre y correo; valida que no esten vacios.

### Solucion esperada
Se muestra mensaje de error o exito segun validacion basica.

---

## Paso 9: useEffect Basico
### Concepto
useEffect permite ejecutar logica despues del render (como cargar datos simples).

### Ejemplo
Actualizar el titulo de la pagina cuando cambia un contador.

### Ejercicio
Registra en consola cada cambio de un estado.

### Solucion esperada
Se ejecuta el efecto cada vez que cambia la dependencia.

---

## Paso 10: Mini Proyecto Final
### Concepto
Integrar todo lo aprendido en una aplicacion pequena.

### Ejemplo
App de tareas: agregar, listar, marcar y eliminar.

### Ejercicio
Construye una mini ToDo App con:
- Input para nueva tarea
- Boton para agregar
- Lista de tareas
- Boton para eliminar cada tarea

### Solucion esperada
Una app funcional que combine componentes, props, estado, eventos y listas.

---

## Checklist de React Basico
- Entiendo que es JSX y como usarlo
- Puedo crear y reutilizar componentes
- Se pasar props entre componentes
- Manejo estado local con useState
- Respondo a eventos de usuario
- Uso renderizado condicional
- Renderizo listas con key unica
- Manejo inputs en formularios basicos
- Comprendo cuando usar useEffect en casos simples
- Puedo construir una app pequena integrando todo

## Recomendacion de Estudio
- Practica 45-60 minutos al dia
- Al terminar cada paso, crea una mini practica propia
- Sube avances a GitHub para registrar progreso