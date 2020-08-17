import { Component,AfterViewInit } from '@angular/core';

import io from "socket.io-client"

// const socket = io('ws://localhost:3000',{
//   upgrade:false,
//   transports:['websocket']
// });
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'gauge-test1';
  gaugeType = "semi";
  gaugeValue:number;
  gaugeLabel = "sicaklik";
  gaugeAppendText = "℃";
  gaugeCap="butt"
  gaugeThick=10;
  guageThresholdConfig={
    '0':{color:'green'},
    '20':{color:'yellow'},
    '30':{color:'orange'},
    '40':{color:'red'}
  }
  gaugeDuration=2000;
  gaugePrepend=""
  gaugeSize=400
  gaugeBackgroundColor="rgba(41, 20, 118, 1)"
  gaugeForegroundColor='rgba(36, 214, 199, 1)'

  ngAfterViewInit(){
      const socket = io('ws://localhost:3000',{
      upgrade:true,
      transports:['websocket']
    });

    socket.on("temperature",(data)=>{
      console.log(data.data);
      const value=data.data;

      this.gaugeValue=value;
    })


  }
}
