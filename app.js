// Your CesiumJS access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZmJkYzVkNC0zZTI1LTRiNDMtOTFiZS04ODcyOWFlY2ViZmMiLCJpZCI6MjI4ODc4LCJpYXQiOjE3MjExODkzMTF9.AMcjGw63IsZFbZyh2z2LNGkXqLsfBgBfdFsBg6jCISw';
// Initialize the Cesium Viewer
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

// Local 3D model URL
const transmissionTowerModelUrl = 'models/400kv_model.glb';

function renderTowers() {
    const tower1Input = document.getElementById('tower1').value.split(',').map(Number);
    const tower2Input = document.getElementById('tower2').value.split(',').map(Number);

    if (tower1Input.length === 2 && tower2Input.length === 2) {
        addTransmissionTower(tower1Input[0], tower1Input[1]);
        addTransmissionTower(tower2Input[0], tower2Input[1]);
    } else {
        alert('Please enter valid coordinates for both towers.');
    }
}

function addTransmissionTower(latitude, longitude) {
    viewer.entities.add({
        name: 'Transmission Tower',
        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),
        model: {
            uri: transmissionTowerModelUrl,
            scale: 1
        }
    });

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 1500.0)
    });
}

// Optional: Load the transmission tower model when the application starts
addTransmissionTower(34.0522, -118.2437);
addTransmissionTower(36.7783, -119.4179);