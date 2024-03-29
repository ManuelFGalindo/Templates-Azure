import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AndersonAlexisRuales';

  constructor(configService: ConfigService) {
    console.log('config', configService.config);
  }
}
