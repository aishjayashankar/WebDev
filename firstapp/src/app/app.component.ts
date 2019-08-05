
import { DataService } from './data.service';
import { Data } from './data';
import { Component  } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFirstApp';
  data: Data[];
  constructor(private dataservice: DataService) { }

  OnInit() {
    this.dataservice
      .getUsers()
      .subscribe((data: Data[]) => {
          this.data = data;
        });

}
}
