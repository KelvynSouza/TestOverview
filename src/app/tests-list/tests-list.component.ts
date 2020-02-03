import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
  OnDestroy
} from "@angular/core";
import { TestsListService } from "./tests-list.service";
import { BaseTests } from "./model/baseTests";
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: "app-tests-list",
  templateUrl: "./tests-list.component.html",
  styleUrls: ["./tests-list.component.css"]
})
export class TestsListComponent implements OnInit,OnDestroy {  
  
  test: BaseTests;
  subscriber:Subscription;
  constructor(private testservice: TestsListService) {
    
  }
  ngOnInit() {    
    this.subscriber = this.testservice.testsSubject$.subscribe((e)=>{this.test = e;console.log(e)});
    
    //console.log(this.test);
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
 
  

 
}
