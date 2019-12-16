import { Component, OnInit } from '@angular/core';
import { appService } from './app.service';
import { DataDto } from './data-dto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'task';
  data:any;
  current_page = 1;
records_per_page = 10;
  constructor(private appService:appService){
    this.getData();
  }
  ngOnInit(){
    // this.changePage(1);
  }
  getData(){
    this.appService.getData().subscribe(
      res =>{
        this.data=res;
        setTimeout(() => {
          this.changePage(1);
        }, );

        // var listing_table = document.getElementById("myTable");
        // console.log(res);
        // var recordSet:NodeListOf<HTMLElement> = listing_table.querySelectorAll(".grid-body .row");
        // console.log(listing_table.querySelectorAll(".row"));
      }
    )
  };


prevPage()
{
    if (this.current_page > 1) {
        this.current_page--;
        this.changePage(this.current_page);
    }
}

nextPage()
{
    if (this.current_page < this.numPages()) {
        this.current_page++;
        this.changePage(this.current_page);
    }
}

changePage(page:number)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("myTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1)  page = 1;
    if (page > this.numPages()) page = this.numPages();
    console.log(page)
    var recordSet:NodeListOf<HTMLElement> = listing_table.querySelectorAll(".grid-body .row");
    console.log(listing_table.querySelectorAll(".grid-body .row"));
    for(var i =0 ; i < recordSet.length ;i++){
      console.log(recordSet[i].style.display);
    	recordSet[i].style.display = 'none';
    }

    for (var i = (page-1) * this.records_per_page; i < (page * this.records_per_page); i++) {
        //listing_table.innerHTML += objJson[i].adName + "<br>";
        console.log(page);
       if(recordSet[i])
        recordSet[i].style.display = '';
    }
    page_span.innerHTML = page + " (" + this.records_per_page + " records per page)" ;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
        // btn_prev.style.display = "none";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == this.numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

numPages()
{
	var recordset = document.querySelectorAll(".grid-body .row");
    return Math.ceil(recordset.length / this.records_per_page);
}



}
