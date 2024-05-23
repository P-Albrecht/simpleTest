import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  routeList:string[][] = [
    [ 'ChatComponent'
    ],
    [ 'SettingsComponent'
    ],
    [ 'TreeViewComponent'
    ],
  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) {
  }

  async ngOnInit() {

  }

  onClickMe() {
    let t = (<HTMLInputElement>document.getElementById('interaction')).value
    console.log(t)

  }

  navClick(indexI: number) {                                                                                           
    let routeNav = ''                                                                                                  
    for (let e in this.routeList[indexI]) {                                          
      if (this.routeList[indexI][e].includes(':')){                                                                           
        routeNav = routeNav + '/' + (<HTMLInputElement>document.getElementById('param_' + indexI + '_' + e)).value;  
      } else {                                                                                                                
        routeNav = routeNav + '/' + this.routeList[indexI][e];                                                                
      }                                                                                                                       
    }                                                                                                                         
    this.router.navigate([routeNav]).then(() => {                                                             
      window.location.reload();                                                                                       
    });                                                                                                               
  }     



  treeInputValue = [{name: 'aaa'}, {name: 'bbb', children: [{name: 'bbb1'}, {name: 'bbb2'}]}, {name: 'ccc'} ]

  nodeSelectEventOutputEvent(response: any) {
    
  }

}

