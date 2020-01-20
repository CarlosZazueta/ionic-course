import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService {
  public persons = ['Max', 'Manuel', 'Anna'];

  public addPerson(name: string) {
    this.persons.push(name);
    console.table(this.persons);
  }
}
