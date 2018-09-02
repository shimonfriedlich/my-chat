import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  myForm;
  classes: string[];
  constructor(private formBuilder:FormBuilder) { 

  }
  onSubmit(){
    console.log('submit');
  }
  ngOnInit() {
     this.myForm = this.formBuilder.group({
      name:  ['student1'],
      class: ['A']
    });

    this.classes=['A','B','C'];
  }
  

}
