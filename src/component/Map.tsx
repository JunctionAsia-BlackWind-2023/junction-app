import MapView from "react-native-maps";

export default function Map() {
  return (
    <MapView
      initialRegion={{
        latitude: 37.29381795426784,
        longitude: 127.20209268853068,
        latitudeDelta: 0.004414028527314429,
        longitudeDelta: 0.0038687512278556824,
      }}
      style={{ minHeight: 100, flex: 1 }}
      onRegionChange={(r,d)=>{
        console.log(r,d)
      }}
    />
  );
}
