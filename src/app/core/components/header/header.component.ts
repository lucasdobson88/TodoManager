import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  routes: any[] = [{ url: "/", name: "Dashboard" }];

  constructor() {}

  ngOnInit(): void {}
}
