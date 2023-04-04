import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterdata',
  templateUrl: './enterdata.component.html',
  styleUrls: ['./enterdata.component.css']
})
export class EnterdataComponent implements OnInit {
  input1Value: string | undefined;
  input2Value: string| undefined;
  message:any;
  x:any=[]
  options:any=['radio','checkbox','selectoption']
  addmessage:any
  deletealldatamessage:any
  mygetalldata:any
  xoption:any=[]
  deleteoneid:any
  deleteonedatamessage:any
  yoption:any=[]
  z:any=[]
  deleteid:any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('ojkk');

    // this.http
    // .get<any>('http://localhost:7000/api/getallmydatatoclient')
    // .subscribe(
    //   (response) => {
    //     console.log(response.mydata); // The array of data from MongoDB
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    var headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    this.http.get<any>('http://localhost:7000/api/getallmydatatoclient',{ headers ,responseType: 'json' }).subscribe((response:any) => {
      console.log(response);
      // console.log(response.mydata);
      this.mygetalldata=response.mydata
      for(let item of this.mygetalldata){

        // console.log(item._id)
        this.xoption.push(item._id)
        this.yoption.push(item.type)


      }
    });




  }



  adddata(){
     this.x.push(this.input2Value)
     console.log(this.x)
     this.addmessage=this.input2Value +"is added"
  }


  onSubmit() {
    var data = {
      type: this.input1Value,
      enterdata: this.x
    };

    this.http.post<any>(' http://localhost:7000/api/submitdata', data).subscribe((response:any) => {
      console.log(response);
      if(response){
        this.message="all data is submitted"
        window.location.reload();
      }
    });
  }



  deletealldata(){
    this.http.get<any>(' http://localhost:7000/api/deletealldata').subscribe((response:any) => {
      console.log(response);
      if(response){
        this.deletealldatamessage="all data in databse is deleted"
      }
    });
  }



  deleteone(deleteoneid:any){
    console.log(deleteoneid)
    console.log(this.xoption)
    for(var i in this.xoption){
      console.log(i)
   if(i==deleteoneid){
    this.deleteid=this.xoption[i]
   }
    }
     console.log(this.deleteid)

//  console.log(deleteo)
 var _id=this.deleteid

 this.http.post<any>(' http://localhost:7000/api/deleteonedata',{_id}).subscribe((response:any) => {
      console.log(response);
      if(response){
        this.deleteonedatamessage="all data in databse is deleted"
        window.location.reload();
      }
    });


  }


}










// var x= [10,20,30,40]
// var z=[2,3,4,5]
// var y=[]
// for( var j of z){
// for(let i of x){
//   y[i]=(j)
//   console.log(y[i])
//   console.log(i)
// }
//  }
