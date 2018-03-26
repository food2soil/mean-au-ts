import { customElement } from "aurelia-framework";
import { bindable } from "aurelia-templating";

@customElement('info-drawer')
export class InfoDrawer {
  @bindable isOpen: boolean

  hideDrawer() {
    this.isOpen = false;
  }
}
