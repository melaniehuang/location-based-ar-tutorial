window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);

    let testEntityAdded = false;
    console.log('loading position')
    const el = document.querySelector("a-camera");
    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
        }
    });
};

function staticLoadPlaces() {
    return [
        {
            name: 'position-1',
            location: {
                lat: -37.698934430720804,
                lng: 145.0227020886409,
            },
            color: 'red'
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // let model = document.createElement('a-entity');
        // model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        // model.setAttribute('gltf-model', './assets/magnemite/bboots.gltf');
        // model.setAttribute('rotation', '0 180 0');
        // model.setAttribute('position', '0 0 -200');
        // model.setAttribute('animation-mixer', '');
        // model.setAttribute('scale', '0.25 0.25 0.25');

        let model = document.createElement('a-sphere');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('src', './assets/magnemite/textures/TCom_Gore_2K_albedo.jpg');
        model.setAttribute('repeat', '2 2');
        model.setAttribute('normal-map', '#gore-NRM');
        model.setAttribute('normal-texture-repeat', '2 2');
        model.setAttribute('roughness', '0');
        model.setAttribute('color', place.color);
        model.setAttribute('radius', '2');
        model.setAttribute('position', '0 0 0');
        model.setAttribute('animation', "property: rotation; to: 0 360 0; dur: 8000; easing: linear; loop: true")
        
        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}

function startAR(){
    document.getElementById("startScreen").style.display = 'none';
}