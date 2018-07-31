import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
      }
    }
 
    
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
    
  display() {
    document.getElementById("myModal").style.display="block";
  };
  span(){
    document.getElementById("myModal").style.display="none";
  };
  display2() {
    document.getElementById("myModal2").style.display="block";
  };
  span2(){
    document.getElementById("myModal2").style.display="none";
  };
  display3() {
    document.getElementById("myModal2").style.display="none";
    document.getElementById("myModal").style.display="block";
  };
 
  

 
}
