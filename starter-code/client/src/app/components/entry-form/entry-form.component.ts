import { Component, OnInit } from '@angular/core';
import { NewEntryService } from '../../services/new-entry.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {
  newTitle:string;
  newContent:string;
  valuer: any;
  formValue: Object = {};

  constructor(private NewEntryService: NewEntryService) { }

  ngOnInit() {
  }

  handleSubmitForm(myForm) {
    this.formValue = myForm.value
    this.NewEntryService.insertNew(this.formValue).
     subscribe((value) => {
       return this.valuer = value;
     })
    myForm.value = {};
  }

}
