import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsPage } from "./tabs.page";
import { Tab2Page } from "../tab2/tab2.page";
import { Tab3Page } from "../tab3/tab3.page";
import { NewsPage } from "../news/news.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "/tabs/(news:news)",
        pathMatch: "full"
      },
      {
        path: "news",
        outlet: "news",
        component: NewsPage
      },
      {
        path: "tab2",
        outlet: "tab2",
        component: Tab2Page
      },
      {
        path: "tab3",
        outlet: "tab3",
        component: Tab3Page
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/(news:news)",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
