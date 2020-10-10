import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FeedResolverService,
  FeedListingResolverService,
  OffersResolverService,
  OfferResolverService,
  FeedListingOffersResolverService,
  FeedListingEventsResolverService,
  FeedListingOfferResolverService,
  FeedListingBookTableResolverService,
  FeedSearchResolverService
} from '@resolvers/index';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'mynyte',
        loadChildren: () =>
          import('../views/mynyte/mynyte.module').then(
            (m) => m.MyNytePageModule
          ),
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../views/offers/offers.module').then(
                (m) => m.OffersPageModule
              ),
            resolve: {
              offers$: OffersResolverService,
            },
          },
          {
            path: ':id',
            loadChildren: () =>
              import('../views/offers/offer/offer.module').then(
                (m) => m.OfferPageModule
              ),
            resolve: {
              offer$: OfferResolverService,
            },
          },
        ],
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../views/feed/feed.module').then((m) => m.FeedPageModule),
            resolve: {
              listings$: FeedResolverService,
            },
          },
          {
            path: 'search/:town/:searchType',
            loadChildren: () =>
              import('../views/feed/feed-search/feed-search.module').then((m) => m.FeedSearchPageModule),
            resolve: {
              listings$: FeedSearchResolverService,
            },
          },
          {
            path: ':listingType/:id',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../views/feed/listing/listing.module').then(
                    (m) => m.ListingPageModule
                  ),
                resolve: {
                  listing$: FeedListingResolverService,
                },
              },
              {
                path: 'offers',
                children: [
                  {
                    path: '',
                    loadChildren: () =>
                      import(
                        '../views/feed/listing/listing-offers/listing-offers.module'
                      ).then((m) => m.ListingOffersPageModule),
                    resolve: {
                      listingOffers$: FeedListingOffersResolverService,
                    },
                  },
                  {
                    path: ':offerId',
                    loadChildren: () =>
                      import(
                        '../views/feed/listing/listing-offers/listing-offer/listing-offer.module'
                      ).then((m) => m.ListingOfferPageModule),
                    resolve: {
                      listingOffer$: FeedListingOfferResolverService,
                    },
                  },
                ],
              },
              {
                path: 'events',
                loadChildren: () =>
                  import(
                    '../views/feed/listing/listing-events/listing-events.module'
                  ).then((m) => m.ListingEventsPageModule),
                resolve: {
                  listingEvents$: FeedListingEventsResolverService,
                },
              },
              {
                path: 'book-table',
                loadChildren: () =>
                  import(
                    '../views/feed/listing/listing-book-table/listing-book-table.module'
                  ).then((m) => m.ListingBookTablePageModule),
                  resolve: {
                    restaurantSettings$: FeedListingBookTableResolverService,
                  },
              },
            ],
          },
        ],
      },
      {
        path: 'covid',
        loadChildren: () =>
          import('../views/covid/covid.module').then((m) => m.CovidPageModule),
      },
      {
        path: 'more',
        loadChildren: () =>
          import('../views/more/more.module').then((m) => m.MorePageModule),
      },
      {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
