import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  router = inject(Router);
  getstarted(){
    this.router.navigate(['/download']);
  }
  ngOnInit(): void {


    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);


   var option = {
     backgroundColor: '#fff',
     title: {
       text: 'downloads state',
       left: 'center',
       top: 20,
       textStyle: {
         color: '#bbb'
       }
     },
     tooltip: {
       trigger: 'item'
     },
     visualMap: {
       show: false,
       min: 80,
       max: 600,
       inRange: {
         colorLightness: [0, 1]
       }
     },
     series: [
       {
         name: 'Downloads From',
         type: 'pie',
         radius: '55%',
         center: ['50%', '50%'],
         data: [
           { value: 335, name: 'USA' },
           { value: 310, name: 'GERMAN' },
           { value: 274, name: 'INDIA' },
           { value: 235, name: 'LIBYA' },
           { value: 400, name: 'UK' }
         ].sort(function (a, b) {
           return a.value - b.value;
         }),
         roseType: 'radius',
         label: {
           color: 'rgba(0, 0, 0, 0.3)'
         },
         labelLine: {
           lineStyle: {
             color: 'rgba(0, 0, 0, 0.3)'
           },
           smooth: 0.2,
           length: 10,
           length2: 20
         },
         itemStyle: {
           color: '#eeeeee',
           shadowBlur: 200,
           shadowColor: 'rgba(0, 0, 0, 0.5)'
         },
         animationType: 'scale',
         animationEasing: 'elasticOut',
         animationDelay: function (idx:any) {
           return Math.random() * 800;
         }
       }
     ]
   };

   option && myChart.setOption(option);


  }


}
