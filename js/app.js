//estos deben ser accedidos dentro de más de una función, así que los declararemos primero
let container;
let camera;
let renderer;
let scene;
let mesh;

function init() {

  // Obtenga una referencia al elemento contenedor que contendrá nuestra escena
  container = document.querySelector( '#scene-container' );

  // crear une escena
  scene = new THREE.Scene();

  // Establecer el color de fondo de la escena
  scene.background = new THREE.Color( 'skyblue' );

  // Crear una camara
  const fov = 35; // AKA campo de visión de 1 a 179 grados
  const aspect = container.clientWidth / container.clientHeight; //relacion de aspecto
  const near = 0.1; // plano de recorte cercano
  const far = 100; // plano de recorte lejano

  camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

  // cada objeto se crea inicialmente en (0, 0, 0)
  // vamos a mover la cámara un poco hacia atrás para que podamos ver la escena
  camera.position.set( 0, 0, 10 );

  // crear una geometria
  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );

  // crear un material
  const material = new THREE.MeshStandardMaterial( { color: 0x800080 } );

  // Crea una malla, pasando la geometría y el material como parámetros
  mesh = new THREE.Mesh( geometry, material );

  // Agregar la malla a la ecena
  scene.add( mesh );

  // Create a directional light
  const light = new THREE.DirectionalLight( 0xffffff, 5.0 );

  // move the light back and up a bit
  light.position.set( 10, 10, 10 );

  // remember to add the light to the scene
  scene.add( light );

  // Agreguando suavizado al WebGLRenderer
  renderer = new THREE.WebGLRenderer( { antialias: true } );

  // create el renderizador
  renderer = new THREE.WebGLRenderer();

  //configurar el lienzo al mismo tamaño que el contenedor
  renderer.setSize( container.clientWidth, container.clientHeight );

  //establecer la relacion de pixeles del renderizador
  renderer.setPixelRatio( window.devicePixelRatio );

  // Agregaremos el elemento de lienzo como hijo del contenedor
  container.appendChild( renderer.domElement );

  // iniciar loop animacion
renderer.setAnimationLoop( () => {

  update();
  render();

} );

}

function update() {

  // increase the mesh's rotation each frame
  mesh.rotation.z += 0.01;
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

}

function render() {

  // representar la escena
  renderer.render( scene, camera );

}

function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;


  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );


init();
animate();
