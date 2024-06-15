
var markers = [];
var indexTimeout = 0;
mapboxgl.accessToken = accessToken;


let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: [-71.104081, 42.365554],
    zoom: 14,
  });

  const el = document.createElement("div");
  el.className = "markerSchool";

  var mit = new mapboxgl.Marker(el)
    .setLngLat([-71.092761, 42.357575])
    .addTo(map);

    addMarkers();


async function addMarkers() {
  const locations = await getBusLocations();
  console.log(new Date());
  locations.forEach(function (bus) {
    if (getMarker(bus.id) === undefined) {
      addMarker(bus);
    } else {
      moveMarker(bus);
    }
  });
  setTimeout(addMarkers,30000);
}


// Request bus data from MBTA
async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

function getMarker(id) {
  var marker = markers.find(function (item) {
    return item.busId === id;
  });
  return marker;
}

function addMarker(bus) {
  const el = document.createElement("div");
    el.className = getIcon(bus);
    var marker = new mapboxgl.Marker(el)
      .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
      .setPopup(new mapboxgl.Popup().setText(bus.attributes.current_status))
      .addTo(map);
    markers.push({
      marker: marker,
      busId: bus.id,
    });
}

function moveMarker(bus) {
  const el = document.createElement("div");
  el.className = getIcon(bus);
  var test = getMarker(bus.id);
  test.marker.remove();
  var marker = new mapboxgl.Marker(el)
      .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
      .setPopup(new mapboxgl.Popup().setText(bus.attributes.current_status))
      .addTo(map);
  var index = markers.findIndex(item => item.busId === bus.id);
  markers.splice(index,1);
  markers.push({
    marker: marker,
    busId: bus.id,
  });
}

function getIcon(bus) {
  if (bus.attributes.direction_id === 0) {
    return "markerRed";
  } else {
    return "marker";
  }
}
