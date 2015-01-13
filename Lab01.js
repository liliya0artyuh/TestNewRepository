//declare global variables
var scene, camera, renderer;
var step = 0;
var sun, mercury, venus, earth, mar, jupiter, saturn, uranus, neptune;
var controls;
var gui;

function init() {
    //initStats();
    //initGuiControl();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();

    // create a render and set the size
    renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(0xeeeeee, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    // add the output of the renderer to the html element
    document.body.appendChild(renderer.domElement);
}

function setupCameraAndLights() {
    camera = new THREE.PerspectiveCamera(
        75,                                        //angle
        window.innerWidth / window.innerHeight,    //aspect
        0.1,                                        //inner plane
        1000                                        //far plane
        );
    camera.position.z = 5;
}

function createGeometry() {

    //var sunGeometry = new THREE.SphereGeometry(.1, 8, 6, 0, Math.PI * 2, 0, Math.PI);
	var sunGeometry = new THREE.SphereGeometry(.1, 8, 6);
    var sunMaterial = new THREE.MeshLambertMaterial({ color: 0xffffcc });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);

	var mercuryGeometry = new THREE.SphereGeometry(.01, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var mercuryMaterial = new THREE.MeshLambertMaterial({ color: 0x993300 });
    mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
	
	var venusGeometry = new THREE.SphereGeometry(.02, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var venusMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
    venus = new THREE.Mesh(venusGeometry, venusMaterial);
	
    var earthMaterial = new THREE.MeshLambertMaterial({ color: 0x0033CC });
    earth = new THREE.Mesh(venusGeometry, earthMaterial);
	
    var marsMaterial = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
    mars = new THREE.Mesh(mercuryGeometry, marsMaterial);
	
	var jupiterGeometry = new THREE.SphereGeometry(.05, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var jupiterMaterial = new THREE.MeshLambertMaterial({ color: 0xFF3300 });
    jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
	
	var saturnGeometry = new THREE.SphereGeometry(.04, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var saturnMaterial = new THREE.MeshLambertMaterial({ color: 0xFFCC00 });
    saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
	
	var uranusGeometry = new THREE.SphereGeometry(.03, 8, 6, 0, Math.PI * 2, 0, Math.PI);
    var uranusMaterial = new THREE.MeshLambertMaterial({ color: 0x00CC66 });
    uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
	
    var neptuneMaterial = new THREE.MeshLambertMaterial({ color: 0x003366 });
    neptune = new THREE.Mesh(uranusGeometry, neptuneMaterial);
	
    // position the spher
    // add the sphere to the scene
    scene.add(sun);
	scene.add(mercury);
	scene.add(venus);
	scene.add(earth);
	scene.add(mars);
	scene.add(jupiter);
	scene.add(saturn);
	scene.add(uranus);
	scene.add(neptune);
}

// call the render function
function animate() {
    //stats.update();
	step++;
	var normSpeed = 5;
	var normDistance = .5;
	
    mercury.position.x = .3*normDistance*((Math.cos(step/(.240*normSpeed))));
	mercury.position.y = .3*normDistance*((Math.sin(step/(.240*normSpeed)))); 
	venus.position.x = .6*normDistance*((Math.cos(step/(.615*normSpeed))));
	venus.position.y = .6*normDistance*((Math.sin(step/(.615*normSpeed)))); 
	earth.position.x = 1*normDistance*((Math.cos(step/normSpeed)));
	earth.position.y = 1*normDistance*((Math.sin(step/normSpeed))); 
	mars.position.x = 1.5*normDistance*((Math.cos(step/(1.88*normSpeed))));
	mars.position.y = 1.5*normDistance*((Math.sin(step/(1.88*normSpeed)))); 
	jupiter.position.x = 2.5*normDistance*((Math.cos(step/(11.862*normSpeed))));
	jupiter.position.y = 2.5*normDistance*((Math.sin(step/(11.862*normSpeed))));
	saturn.position.x = 3.5*normDistance*((Math.cos(step/(29.457*normSpeed))));
	saturn.position.y = 3.5*normDistance*((Math.sin(step/(29.457*normSpeed))));
	uranus.position.x = 5.5*normDistance*((Math.cos(step/(84.017*normSpeed))));
	uranus.position.y = 5.5*normDistance*((Math.sin(step/(84.017*normSpeed)))); 	 	
	neptune.position.x = 8.5*normDistance*((Math.cos(step/(164.8*normSpeed))));
	neptune.position.y = 8.5*normDistance*((Math.sin(step/(164.8*normSpeed))));

    // render using requestAnimationFrame
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


window.onload = function () {
    init();
	setupCameraAndLights();
    createGeometry();
    animate();
};