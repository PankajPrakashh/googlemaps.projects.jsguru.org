import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  @ViewChild('googleMap', { static: true })
  googleMap!: ElementRef;

  map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {

    const mapProperties: google.maps.MapOptions = {
      // Center to Hyderabad, India
      center: new google.maps.LatLng(17.412127, 78.474921),
      zoom: 15,
    };

    this.map = new google.maps.Map(this.googleMap?.nativeElement, mapProperties);
  }

}
