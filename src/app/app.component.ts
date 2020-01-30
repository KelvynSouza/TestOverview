import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  xmlItemName: string = "xmlTest";
  ngOnInit(): void {
    if (localStorage.getItem(this.xmlItemName)) {
      localStorage.removeItem(this.xmlItemName);
    }
  }
}
