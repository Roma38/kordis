import React, { useState, useEffect } from 'react';
import { trs } from "../../../../../translations";
import calendarIcon from "../../../../../assets/icons8-calendar-48_(2).svg";
import { interactiveMap, inPoly } from '../../../../../utils';

let objSelectedZone = {};

function SingleTicket() {
  const [isRegional, setIsRegional] = useState(true);
  const [zones, setZones] = useState('no zones');
  useEffect(() => {
    return () => {
      objSelectedZone = {}
    }
  },[])
  useEffect(() => {
    if(zones === 'no zones'){
      interactiveMap(handlerClick)
    }
  })

  const handlerClick = (e, kml, map) => { 
    const coords = window.SMap.Coords.fromEvent(e.data.event, map);
    kml._geometries.forEach((geometrie, index) => {
      let xp = [];
      let yp = [];
      geometrie._coords.forEach(coord => {
        xp.push(coord.x)
        yp.push(coord.y)
      })
      const x = coords.x;
      const y = coords.y; 
      if(inPoly(x,y, xp, yp)){
        if(geometrie._options.color === 'black' && geometrie._options.opacity === 0.7){
          geometrie._options.color = 'none';
          geometrie._options.opacity = 0.2;
          delete objSelectedZone['coordsZone' + index]
        }else{
          geometrie._options.color = 'black';
          geometrie._options.opacity = 0.7;
          objSelectedZone['coordsZone' + index] = coords;
        }
        kml.redraw();
      }
    })
    console.log(objSelectedZone)
    setZones(Object.keys(objSelectedZone).join(', '))
  }

  return (
    <section className="deep-accordion-section">
      <button
        className={isRegional ? "app-button" : "app-button app-button--active"}
        onClick={() => setIsRegional(false)}
      >
        {trs("ZONE_")}
      </button>
      <button
        className={isRegional ? "app-button app-button--active ml-20" : "app-button ml-20"}
        onClick={() => setIsRegional(true)}
      >
        {trs("SECTION")}
      </button>

      {isRegional
        ? <>
          <div className="input-group">
            <label className="col-40">{trs("ENTER_THE_ENTRY_STOP")}</label>
            <input className="input-field col-60" type="text" />
          </div>

          <div className="input-group">
            <label className="col-40">{trs("ENTER_THE_EXIT_STOP")}</label>
            <select className="input-field col-60">
              <option>(Výstupní zastávka)</option>
            </select>
          </div>
        </>
        : <>
          <div className="interactive-map-wrapper">
            <div id="map" style={{ width: 600, height: 400 }}></div>
          </div>
          <div className="input-group">
            <label className="col-40">{trs("ZONE_VALIDITY")}</label>
            <input 
              className="input-field col-60" 
              type="text"
              value={zones}
              onChange={()=>{}}
            />
          </div>
        </>}

      <div className="input-group ">
        <label className="col-40">{trs("START_DATE")}</label>
        <select className="input-field col-20-sm time-select">
          <option>9</option>
        </select>
        <select className="input-field col-20-sm ml-7 time-select">
          <option>41</option>
        </select>
      </div>

      <div className="input-group date-input">
        <label className="col-40">{trs("START_DATE")}</label>
        <input className="input-field col-60" type="date" />
        <img src={calendarIcon} alt="calendar icon" />
      </div>

      <div className="input-group">
        <label className="col-40">{trs("END_DATE")}</label>
        <div className="col-60 regular-text">10. 1. 2020     10:41:00</div>
      </div>
    </section>
  );
}

export default SingleTicket;

