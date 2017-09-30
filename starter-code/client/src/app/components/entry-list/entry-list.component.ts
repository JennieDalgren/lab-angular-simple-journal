import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';
import { NewEntryService } from '../../services/new-entry.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries: Object[];

  constructor(private JournalEntriesService: JournalEntriesService) { }

  ngOnInit() {
    this.JournalEntriesService.getEntryList()
    .subscribe((data) => this.entries = data);
  }



}
