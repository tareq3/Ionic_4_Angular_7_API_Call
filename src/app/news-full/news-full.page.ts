import { Component, OnInit } from "@angular/core";
import { NewsService } from "../service/news.service";

@Component({
  selector: "app-news-full",
  templateUrl: "./news-full.page.html",
  styleUrls: ["./news-full.page.scss"]
})
export class NewsFullPage implements OnInit {
  article: any;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
}
