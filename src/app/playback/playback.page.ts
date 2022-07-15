import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-playback',
  templateUrl: './playback.page.html',
  styleUrls: ['./playback.page.scss'],
})
export class PlaybackPage implements OnInit {

  constructor(public nav : NavController) { }

  ngOnInit() {
  }

  goto(view){
    this.nav.navigateRoot(view);
  }
}
