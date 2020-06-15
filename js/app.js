// Obtenga una referencia al elemento contenedor que contendrá nuestra escena
const container = document.querySelector( '#scene-container' );

// crear une escena
const scene = new THREE.Scene();

// Establecer el color de fondo de la escena
scene.background = new THREE.Color( 'skyblue' );

// Crear una camara
const fov = 35; // AKA campo de visión de 1 a 179 grados
const aspect = container.clientWidth / container.clientHeight; //relacion de aspecto
const near = 0.1; // plano de recorte cercano
const far = 100; // plano de recorte lejano

const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

// cada objeto se crea inicialmente en (0, 0, 0)
// vamos a mover la cámara un poco hacia atrás para que podamos ver la escena
camera.position.set( 0, 0, 10 );

// crear una geometria
const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

// crear un material
const material = new THREE.MeshBasicMaterial();

// Crea una malla, pasando la geometría y el material como parámetros
const mesh = new THREE.Mesh( geometry, material );

// Agregar la malla a la ecena
scene.add( mesh );

// create el renderizador
const renderer = new THREE.WebGLRenderer();

//configurar el lienzo al mismo tamaño que el contenedor
renderer.setSize( container.clientWidth, container.clientHeight );

//establecer la relacion de pixeles del renderizador
renderer.setPixelRatio( window.devicePixelRatio );

// Agregaremos el elemento de lienzo como hijo del contenedor
container.appendChild( renderer.domElement );

// representar la escena
renderer.render( scene, camera );
