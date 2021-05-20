import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  title = 'pruebaTecnicateleperformance';

  constructor() 
  { 
    
  }

  ngOnInit(): void {
  }

}
