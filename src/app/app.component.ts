import {Component, computed, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Prisma} from '@prisma/client';

const someModelArgs = {
  select: {
    id: true,
    someStuff: true,
    child: {
      select: {
        id: true,
        aInt: true,
        aFloat: true,
      }
    }
  }
} satisfies Prisma.SomeModelDefaultArgs;

type SomeModelType = Prisma.SomeModelGetPayload<typeof someModelArgs>;

const typeIsCorrectHere: SomeModelType = {
  id: 'dawdawd',
  someStuff: 'DWAdawd',
  child: {
    id: 'dawdaw232d',
    aInt: 1,
    aFloat: 0.0
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

  someModelSignal = signal<SomeModelType | null>(null);

  aComputed = computed(() => {
    const someModelSignal = this.someModelSignal();

    if(!someModelSignal?.child) {
      return null;
    }

    // Uncomment below and  ask IntelliSense to open up, the types won't show up, hovering works though
    // someModelSignal.child.

    const {aInt, aFloat, id} = someModelSignal.child;

    return {
      aInt, aFloat, id
    };
  });
}
