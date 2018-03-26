import { autoinject } from "aurelia-framework";
import { IAuth } from "app/services/auth/auth.service";
import { RouteConfig } from "aurelia-router";
import { ICache } from "../../services/cache/cache.service";

@autoinject
export class HomeDashboard {

  private welcomeDismissedKey: string = 'WELCOME_DISMISSED';
  
  isWelcomeDismissed: boolean;
  isDrawerOpen: boolean;

  constructor(
    public auth: IAuth,
    public cache: ICache
  ) { }

  dismissWelcome() {
    this.cache.set(ICache.Mode.Local, this.welcomeDismissedKey, true);
    this.isWelcomeDismissed = true;
  }

  showDrawer() {
    this.isDrawerOpen = true;
  }

  bind() {
    this.isWelcomeDismissed = this.cache.get(ICache.Mode.Local, this.welcomeDismissedKey);
  }
}
