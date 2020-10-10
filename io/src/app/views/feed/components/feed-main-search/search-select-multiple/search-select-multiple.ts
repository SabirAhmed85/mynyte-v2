import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-select-multiple',
  templateUrl: 'search-select-multiple.html',
  styleUrls: ['search-select-multiple.scss'],
})
export class SearchSelectMultipleComponent implements OnChanges {
  @Input() title: string;

  @Input() selectedOptions: any[];

  @Output() openSelectModalClicked: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes.selectedOptions) {
      this.selectedOptions = changes.selectedOptions.currentValue;
    }
  }

  public openSelectModalWasClicked() {
    console.log(this.selectedOptions);
    this.openSelectModalClicked.emit();
  }
}
