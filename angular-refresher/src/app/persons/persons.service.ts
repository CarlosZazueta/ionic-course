import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  public persons: string[] = ['Max', 'Manuel', 'Anna'];

  public addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }
  public removePerson(name: string){
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
