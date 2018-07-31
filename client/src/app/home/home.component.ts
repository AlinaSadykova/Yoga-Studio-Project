import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

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
