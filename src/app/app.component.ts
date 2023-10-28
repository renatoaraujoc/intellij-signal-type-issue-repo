import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type AType = {
    someSubtype?: {
      abc: number;
    }
};

const anObject: AType = {
    someSubtype: {
        abc: 123
    }
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signal-types-issue';
}
