import { customElement } from "aurelia-framework";
import { bindable } from "aurelia-templating";
import { ICache } from "../../../services/cache/cache.service";

@customElement('welcome-overlay')
export class WelcomeOverlay {

  private welcomeDismissedKey: string = 'WELCOME_DISMISSED';

  isDismissed: boolean

  constructor(
    private cache: ICache
  ) { }
  
  dismissWelcome() {
    this.cache.set(ICache.Mode.Local, this.welcomeDismissedKey, true);
    this.isDismissed = true;
  }

  bind() {
    this.isDismissed = this.cache.get(ICache.Mode.Local, this.welcomeDismissedKey);
  }
}
