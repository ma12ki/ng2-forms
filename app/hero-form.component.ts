import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  active = true;
  onSubmit(form) {
    console.log(form);
    this.submitted = true; 
  }

  newHero() {
    this.model = new Hero(42, '', '');
    // this will force the form to be removed and recreated, restoring the 'pristine' state
    // this is a temporary hack, because there's no functionality for restoring forms atm
    // ...except that it does not work (?)
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
