import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PersonsService {
  personsChanged = new Subject<string[]>();
  public persons: string[];

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http
      .get<any>('https://swapi.co/api/people/?format=json')
      .pipe(map(res => {
        return res.results.map(character => character.name);
      }))
      .subscribe(transformedData => {
      this.personsChanged.next(transformedData);
    });
  }

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
