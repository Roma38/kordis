export function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function isValidDate(string) {
  const re = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  return re.test(String(string).toLowerCase());
}

export function inPoly(x,y, xp, yp){
  var npol = xp.length;
  var j = npol - 1;
  var c = 0;
  for (var i = 0; i < npol;i++){
      if ((((yp[i]<=y) && (y<yp[j])) || ((yp[j]<=y) && (y<yp[i]))) &&
      (x > (xp[j] - xp[i]) * (y - yp[i]) / (yp[j] - yp[i]) + xp[i])) {
        c = !c          
      }
    j = i;
  }
  return c;
}

export function interactiveMap(handlerClick){
  try{    
    window.Loader.async = true;
    window.Loader.load(null, null, function () {
      if(window.JAK.gel("map")){
        var middle = window.SMap.Coords.fromWGS84(14.41, 50.08);
        var map = new window.SMap(window.JAK.gel("map"), middle, 10);
        map.addDefaultLayer(window.SMap.DEF_BASE).enable();
        map.addDefaultControls();
        var url = `${process.env.PUBLIC_URL}/Zones_1_0.kml`;
        var r = new window.JAK.Request(window.JAK.Request.XML);
        r.setCallback(function (data) {
          var kml = new window.SMap.Layer.KML(data, 'map');
          map.addLayer(kml).enable();
          kml.fit();
          kml.fit(); 
          map.getSignals().addListener(window, "map-click", (e) => handlerClick(e, kml, map));
        });
        r.send(url);
        window.JAK.gel("map").firstChild.style.cssText = 'position: relative; width: 100%; height: 100%;'
      }
    });
  } catch (error){
    console.error(error)
  }
}