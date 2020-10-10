import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ComplexSelectModalComponent } from '@components/index';
import { Router } from '@angular/router';

const townOptions = [
  { id: 1, name: 'Bedford', selected: 'true' },
  { id: 2, name: 'Luton' },
  { id: 3, name: 'Northampton' },
  { id: 4, name: 'Milton Keynes' },
];

const musicOptions = [
  { id: 1, name: 'Pop/Chart' },
  { id: 2, name: 'Dance/House' },
  { id: 3, name: 'RnB/Urban' },
  { id: 4, name: 'Rock/Live' },
  { id: 5, name: 'Karaoke/Open Mic' },
];

@Component({
  selector: 'app-feed-main-search',
  templateUrl: 'feed-main-search.html',
  styleUrls: ['feed-main-search.scss'],
})
export class FeedMainSearchComponent implements OnDestroy {
  public mainSearchExpanded = false;
  public musicStyleOptions: any = [];
  public selectedMusicStyleOptions: any = [];
  public feedSearchOptions: any;

  private ngUnsubscribe = new Subject();

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) {
    this.feedSearchOptions = {
      town: {
        title: 'My Town',
        options: townOptions,
        selectedOption: townOptions[0]
      },
      music: {
        title: 'My Music',
        allOptionsLabel: 'All Music Styles',
        options: musicOptions,
        selectedOptions: [
          { id: 0, name: 'All Music Styles' }
        ]
      }
    };
  }

  public async openSelectModal(modalCategory: string) {
    const selectModal = await this.modalCtrl.create(
      {
        component: ComplexSelectModalComponent,
        cssClass: 'select-options-modal',
        componentProps: {
          title: this.feedSearchOptions[modalCategory].title,
          all_options_label: this.feedSearchOptions[modalCategory].allOptionsLabel,
          options: this.feedSearchOptions[modalCategory].options,
          selected_options: this.feedSearchOptions[modalCategory].selectedOptions,
        }
      }
    );

    selectModal.onDidDismiss().then(selectedOptions => {
      if (!selectedOptions.data) {
        return;
      }

      if (this.feedSearchOptions[modalCategory].selectedOptions !== selectedOptions.data) {
        this.feedSearchOptions[modalCategory].selectedOptions = selectedOptions.data;
      }
      console.log(selectModal);
    });

    await selectModal.present();
  }

  goToSearch(): void {
    this.router.navigate([`feed/search/bedford/bars-clubs`]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
