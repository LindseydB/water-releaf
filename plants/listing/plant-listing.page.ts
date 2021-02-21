import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { IResolvedRouteData, ResolverHelper } from '../../utils/resolver-helper';
import { PlantListingModel } from './plant-listing.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-plant-listing',
  templateUrl: './plant-listing.page.html',
  styleUrls: [
    './styles/plant-listing.page.scss',
    './styles/plant-listing.shell.scss'
  ]
})
export class PlantListingPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;
  mostRecentMoisture: number;
  listing: PlantListingModel;

  @HostBinding('class.is-shell') get isShell() {
    return (this.listing && this.listing.isShell) ? true : false;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions = this.route.data
    .pipe(
      // Extract data for this page
      switchMap((resolvedRouteData: IResolvedRouteData<PlantListingModel>) => {
        return ResolverHelper.extractData<PlantListingModel>(resolvedRouteData.data, PlantListingModel);
      })
    )
    .subscribe((state) => {
      this.listing = state;

    }, (error) => console.log(error));
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }
}
