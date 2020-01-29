import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output
} from "@angular/core";
import { TestsListService } from "./tests-list.service";
import { BaseTests } from "./model/baseTests";

@Component({
  selector: "app-tests-list",
  templateUrl: "./tests-list.component.html",
  styleUrls: ["./tests-list.component.css"]
})
export class TestsListComponent implements OnInit {
  
  test: BaseTests;
  constructor(private testservice: TestsListService) {}
  ngOnInit() {
    this.getTestInfo("");
    console.log(this.test);
  }

  getTestInfo(XmlPath: string) {
    this.test = this.testservice.getTests(XmlPath);  
  }

 
}
