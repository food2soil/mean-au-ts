import { autoinject } from "aurelia-framework";
import { IAuth } from "app/services/auth/auth.service";
import { RouteConfig } from "aurelia-router";
import { ICache } from "../../services/cache/cache.service";

@autoinject
export class HomeDashboard {
  
  isDrawerOpen: boolean;

  showDrawer() {
    this.isDrawerOpen = true;
  }
}
