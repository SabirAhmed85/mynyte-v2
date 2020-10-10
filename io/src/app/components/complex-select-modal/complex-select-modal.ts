import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-complex-select-modal',
  templateUrl: './complex-select-modal.html',
  styleUrls: ['./complex-select-modal.scss'],
})
export class ComplexSelectModalComponent implements OnInit {
  public title: string;
  public allOptionsLabel: string;
  public options$: BehaviorSubject<any[]> = new BehaviorSubject<any>([]);
  public options: any = [];
  public return: any = [];
  public selectAll$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public selectAll = false;
  public selectAllOption = {id: 0, name: ''};
  public selectedOptions: any = [];
  public showWarningBanner = false;

  constructor(public navParams: NavParams, public modalCtrl: ModalController) {
    this.title = navParams.get('title');
    this.options = navParams.get('options');
    this.selectedOptions = navParams.get('selected_options');
    this.allOptionsLabel = navParams.get('all_options_label');
    this.selectAllOption.name = this.allOptionsLabel;
    console.log(this.title, this.options, this.selectedOptions);
    if (this.selectedOptions.filter((option) => option.id === 0).length) {
      this.options.forEach((option) => option.selected = true);
    }
    else {
      this.options.forEach((option) => {
        option.selected = this.selectedOptions.filter(
          (selectedOption) => selectedOption.id === option.id
        ).length
          ? true
          : false;
      });
    }

    this.selectAll =
      this.options.length === this.selectedOptions.length || this.selectedOptions.filter((option) => option.id === 0).length ?
        true :
        false;

    this.options$.next(this.options);
    this.selectAll$.next(this.selectAll);
  }

  ngOnInit() {
    this.options$.subscribe((options) => {
      this.options = options;
    });
    this.selectAll$.subscribe((selectAll) => {
      this.selectAll = selectAll;
    });
  }

  public toggleSelect(selected) {
    if (selected === true) {
      this.selectAll$.next(false);
    } else if (
      this.options.filter((option) => option.selected === true).length ===
      this.options.length - 1
    ) {
      this.selectAll$.next(true);
    }
  }

  public selectAllClicked() {
    this.options.forEach(
      (option) => (option.selected = !this.selectAll ? true : false)
    );
    this.options$.next(this.options);
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }

  public selectAndDismissWasClicked() {
    let selectedOptions;
    this.selectedOptions = this.options.filter((option) => option.selected === true);
    if (this.selectedOptions.length > 0) {
      selectedOptions = this.formatSelectedOptions;
      this.modalCtrl.dismiss(selectedOptions);
    }
    else {
      this.showWarningBanner = true;
    }
  }

  get noOptionsSelected() {
    return this.options.filter(option => !!option.selected).length === 0 && !!this.showWarningBanner;
  }

  private get formatSelectedOptions() {
    return this.selectedOptions.length === this.options.length
    ? [this.selectAllOption]
    : this.selectedOptions;
  }
}
