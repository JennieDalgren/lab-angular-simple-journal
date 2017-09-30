import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalEntriesService } from '../../services/journal-entries.service'


@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})



export class SingleEntryComponent implements OnInit {
  entryId: string;
  entry: Object = {};

  constructor(private JournalEntriesService: JournalEntriesService,
              private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params=>this.entryId = params['id']);
    this.JournalEntriesService.getEntry(this.entryId)
      .subscribe((data) => this.entry = data);

  }
}
