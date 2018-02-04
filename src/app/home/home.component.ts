import { Component, OnInit } from '@angular/core';
import { FeedServiceService } from '../feed-service.service';
import { UserService } from "../user.service";
import { Router } from "@angular/router";

// Add the RxJS Observable operators we need in this app.
import '../rxjs-operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  protected feedUrl: string = 'https%3A%2F%2Ffeeds.feedburner.com%2FIon-book';
  protected feeds: any;

  constructor (
    protected feedService: FeedServiceService,
    protected userService: UserService,
    protected router: Router
  ) {}

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

  protected logout(){
    this.userService.logout;
    this.router.navigate(['login']);
  }

}
