import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-select',
  templateUrl: 'search-select.html',
  styleUrls: ['search-select.scss'],
})
export class SearchSelectComponent implements OnInit {
  @Input() title: string;

  @Input() options: any[];

  @Input() selectedOption: any;

  public selected: any;

  ngOnInit() {
    this.selected = this.selectedOption.id;
  }
}
