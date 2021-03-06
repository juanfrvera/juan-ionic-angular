import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  darkMode : boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkForDarkMode();
    });
  }

  checkForDarkMode() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.toggleDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));

    this.darkMode = prefersDark.matches;
  }

  // Add or remove the "dark" class based on if the media query matches
  toggleDarkTheme(shouldAdd : boolean) {
    document.body.classList.toggle('dark', shouldAdd);
    document.body.classList.toggle('light', !shouldAdd);

    this.darkMode = shouldAdd;
  }

  onDarkModeChanged(event){
    this.toggleDarkTheme(event);
  }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }
}
