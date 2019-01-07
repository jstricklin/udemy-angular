import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    styles: [`
        .largeArr {
            color: white;
        }
        `]
})
export class AppComponent {
    title = 'udemy-angular';
    displayDetails = false;
    totalClicks = [];
    onBtnClick() {
        this.displayDetails = !this.displayDetails;
        this.totalClicks.push(new Date);
    }
}
