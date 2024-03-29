
import * as THREE from 'three';

export default class Main
{
  constructor()
  {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true
    });

    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( this.renderer.domElement );

    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    this.cube = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.cube );

    this.camera.position.z = 5;

    this.animate = this.animate.bind(this);

    this.animate();
  }

  animate(){
    requestAnimationFrame( this.animate );

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render( this.scene, this.camera );
  };

}

new Main();
