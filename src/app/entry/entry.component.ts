import { Component, OnInit} from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit{

  title = 'smalltask';
  selectedOption: any;
  subOption: any;
  selectedValue:any
  options:any = ['marry','unmarry']
 name:any
 nameControl = new FormControl('', [Validators.required]);
//  checkbox1Value: boolean = false;
//  checkbox2Value: boolean = false;
//  checkbox3Value: boolean = false;
 selectedLabel:any=[]
 text:any;
 message:any
 allofdata:any
 mytypedata:any=['radio','checkbox']
 x:any=[]
 checkbox1Value:any=[]
 allapthdata:any=[]

constructor(private http:HttpClient ){}
  ngOnInit(): void {

  this.http.get<any>('http://localhost:7000/api/alldata').subscribe((response:any) => {
    console.log(response);
    console.log(response.mydata)
    this.allofdata=response.mydata
  })


  }

onCheckboxChange(ite:any,i:number){
 console.log(this.checkbox1Value)
    this.selectedLabel.push(ite);
    console.log(i)
    // console.log(ite)

    this.x[i]= this.selectedLabel
    console.log( this.selectedLabel)


}





makeRequest() {

  var one=this.nameControl.value

  var data=  { Name:this.nameControl.value ,otherdetils:this.x };


  return this.http.post<any>('http://localhost:7000/api/mydata',{data}).subscribe((result:any)=>{
    console.log(result)
    if(result){
    this.message="the data is saved"
    window.location.reload();
  }
    })

}





  }




















   // if (this.checkbox1Value){
  //   this.checkbox2Value=false;
  //   this.checkbox3Value=false
  //   this.selectedLabel.push('no job');
  //   this.checkbox1Value=false
  // }
  // if (this.checkbox2Value)  {
  //   this.checkbox1Value=false;
  //   this.checkbox3Value=false
  //   this.selectedLabel.push('no property')
  //   this.checkbox2Value=false
  // };
  // if (this.checkbox3Value) {
  //   this.checkbox2Value=false;
  //   this.checkbox1Value=false
  //   this.selectedLabel.push('other')};
  //   this.checkbox3Value=false
  // console.log( this.selectedLabel);
  // return  this.selectedLabel;







  //   console.log(this.nameControl.value )
//   console.log("alll")
//   var one=this.nameControl.value
//   var two=this.selectedOption
//   var three=this.subOption
//   var four=this.selectedValue
//  var five =this.selectedLabel
//  var six =this.text

//   const requestBody =  { Name:`${one}` , maleorfemail: `${two}`, majororminor:`${three}` ,marriedorunmarried:`${four}`,selfdetails:`${five}` ,othertext:`${six}`};;
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json'
//     })
//   };
//   return this.http.post<any>('http://localhost:7000/api/mydata',requestBody, httpOptions).subscribe((result:any)=>{
//     console.log(result)
//     if(result){
//     this.message="the data is saved"
//     window.location.reload();
//   }
