import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {

    // HTML element where google maps will get rendered
    const mapHTML = document.getElementById('hello-world-map') as HTMLElement;

    this.map = new google.maps.Map(mapHTML, {
      center: { lat: 17.412127, lng: 78.474921 },
      zoom: 15,
    });
  }

}
