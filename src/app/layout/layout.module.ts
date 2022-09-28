import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { UserSectionComponent } from './header/user-section/user-section.component';
import { AsideComponent } from './aside/aside.component';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuMobileComponent } from './header/menu-mobile/menu-mobile.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    UserSectionComponent,
    BaseComponent,
    MenuMobileComponent,
    UserPanelComponent,
  ],

  exports:[
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    UserSectionComponent,
    BaseComponent,
    MenuMobileComponent,
    UserPanelComponent,
  ],

  imports: [
    MaterialModule,
    CoreModule,

    BlockUIModule.forRoot(),
  ]
})
export class LayoutModule { }
