import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public nav : NavController) { }

  ngOnInit() {
  }

  goto(view){
    this.nav.navigateRoot(view);
  }
}
