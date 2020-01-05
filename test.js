<html>
        <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <script src="jquery-2.1.4.js"></script>
        <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
        <body id="body">
        <div id="navbar"><span>Three.js Tutorial</span></div>
        <script src="./three.js-master/build/three.min.js"></script>
        <script>
          var scene = new THREE.Scene();
          var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);

          var renderer = new THREE.WebGLRenderer({antialias: true});
          renderer.setSize(window.innerWidth,window.innerHeight);
          document.getElementById('body').append(renderer.domElement);

          var geometry = new THREE.BoxGeometry(1,1,1);
          var material = new THREE.MeshBasicMaterial({color: 0xff0000});
          var cube = new THREE.Mesh(geometry,material);
          scene.add(cube);

          cube.position.z = -5;
          cube.rotation.x = 10;
          cube.rotation.y = 5;

          renderer.render(scene,camera);

          var animate = function(){
            cube.rotation.x += 0.01;
            renderer.render(scene,camera);
            requestAnimationFrame(animate);
          }

          animate();
        </script>
        </body>
</html>