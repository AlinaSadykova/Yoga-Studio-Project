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
 
  // back(){
  //   // if (this.count == 1){
  //   //   // document.getElementById("myCarousel1").style.display = "inline-block";
  //   //   // document.getElementById("myCarousel2").style.display = "inline-block";
  //   //   // document.getElementById("myCarousel3").style.display = "inline-block";
  //   //   // document.getElementById("myCarousel4").style.display = "none";
  //   //   // document.getElementById("myCarousel5").style.display = "none";
  //   //   document.getElementById("left").style.display = "none";
  //   // }
  //   this.count --;
  //   if(this.count  == 1){
  //     console.log(this.count)
  //      // document.getElementById("myCarousel1").style.display = "inline-block";
  //     // document.getElementById("myCarousel2").style.display = "inline-block";
  //     // document.getElementById("myCarousel3").style.display = "inline-block";
  //     // document.getElementById("myCarousel4").style.display = "none";
  //     // document.getElementById("myCarousel5").style.display = "none";
  //     document.getElementById("myCarousel1").style.display = "inline-block";
  //     document.getElementById("myCarousel2").style.display = "inline-block";
  //     document.getElementById("myCarousel3").style.display = "inline-block";
  //     document.getElementById("myCarousel4").style.display = "none";
  //     document.getElementById("myCarousel5").style.display = "none";
  //     document.getElementById("left").style.display = "none";
  //     document.getElementById("right").style.display = "inline-block";
      
  //   }
  //   if(this.count  == 2 ){
  //     console.log(this.count)
  //     document.getElementById("myCarousel1").style.display = "none";
  //     document.getElementById("myCarousel2").style.display = "inline-block";
  //     document.getElementById("myCarousel3").style.display = "inline-block";
  //     document.getElementById("myCarousel4").style.display = "inline-block";
  //     document.getElementById("myCarousel5").style.display = "none";
  //     document.getElementById("left").style.display = "inline-block";
      
  //   }
    
  // }
   
  // forward(){
  //   this.count++;
  //  console.log(this.count)
  //   if(this.count  == 2){
  //     console.log(this.count)
  //     document.getElementById("myCarousel1").style.display = "none";
  //     document.getElementById("myCarousel2").style.display = "inline-block";
  //     document.getElementById("myCarousel3").style.display = "inline-block";
  //     document.getElementById("myCarousel4").style.display = "inline-block";
  //     document.getElementById("myCarousel5").style.display = "none";
  //     document.getElementById("left").style.display = "inline-block";
  //   }

  //   if(this.count  == 3){
  //     console.log(this.count)
  //     document.getElementById("myCarousel1").style.display = "none";
  //     document.getElementById("myCarousel2").style.display = "none";
  //     document.getElementById("myCarousel3").style.display = "inline-block";
  //     document.getElementById("myCarousel4").style.display = "inline-block";
  //     document.getElementById("myCarousel5").style.display = "inline-block";
  //     document.getElementById("right").style.display = "none";
  //     document.getElementById("left").style.display = "inline-block";
      
  //   }
  //   // if(this.count % 5 == 3){
  //   //   document.getElementById("myCarousel1").style.display = "inline-block";
  //   //   document.getElementById("myCarousel2").style.display = "none";
  //   //   document.getElementById("myCarousel3").style.display = "none";
  //   //   document.getElementById("myCarousel4").style.display = "inline-block";
  //   //   document.getElementById("myCarousel5").style.display = "inline-block";
  //   // }
  //   // if(this.count % 5 == 4){
  //   //   document.getElementById("myCarousel1").style.display = "inline-block";
  //   //   document.getElementById("myCarousel2").style.display = "inline-block";
  //   //   document.getElementById("myCarousel3").style.display = "none";
  //   //   document.getElementById("myCarousel4").style.display = "none";
  //   //   document.getElementById("myCarousel5").style.display = "inline-block";
  //   // }
    
  // }
    

 
}
