import {Component} from '@angular/core';

/* decorator provides component metadata*/
@Component({
    selector: 'hero-detail',
    template:`
            <div class="container">
        <h1>{{title}}</h1>

        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                <span class="badge">{{hero.id}}</span>{{hero.name}}
            </li>
        </ul>
        </div>

        <div class="container" *ngIf="selectedHero">
        <h2>{{selectedHero.name}} details!</h2>
        <div><label>id :</label>{{selectedHero.id}}</div>
        <div>
            <label>name :</label>
            <input [(ngModel)]="selectedHero.name" placeholder="selectedHero.name">
        </div>
        </div>
    `,
})
export class HeroDetailComponent {

}
