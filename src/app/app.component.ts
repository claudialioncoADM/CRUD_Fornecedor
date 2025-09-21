import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

import { ProAppConfigService } from '@totvs/protheus-lib-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {

  constructor(private proAppConfigService: ProAppConfigService) {
    if (!this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
    }
  }

  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('O App não está sendo executado dentro do Protheus.');
    }
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/fornecedor/', shortLabel: 'Home', icon: 'po-icon-home' },
    // {label: 'Incluir', link: '/fornecedorform/', shortLabel: 'Incluir', icon: 'po-icon-user'},
    { label: 'Exit', link: '/', shortLabel: 'Sair', icon: 'po-icon-exit', action: this.closeApp.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
