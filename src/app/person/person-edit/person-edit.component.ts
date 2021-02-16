import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {ActivatedRoute, Params} from "@angular/router";
import {Person} from "../shared/person.model";
import {PersonService} from "../shared/person.service";
import 'rxjs/add/operator/switchMap';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-person-edit',
  templateUrl: 'person-edit.component.html',
  styleUrls: ['person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  public persons: Observable<Person[]>;
  public id: string;
  public name: string;
  public birthDate: string;
  public email: string;
  public gender: string;
  public submitted = false;
  public mensagens: any[] = [];

  @ViewChild('formulario') formulario: NgForm;

  constructor(private route: ActivatedRoute,
              private personService: PersonService) {
  }

  ngOnInit() {
    this.route.params
    this.persons.switchMap((params: Params) => this.personService.getPersonForId(+params['id']));
  }

  private mensagemError(mensagem: string) {
    this.mensagem({severity: 'info', detail: mensagem});
  }

  private mensagemSuccess(mensagem: string) {
    this.mensagem({severity: 'success', detail: mensagem});
  }

  private mensagem(mensagem: any) {
    this.mensagens = [];
    this.mensagens.push(mensagem);
  }

  salvar() {
    this.submitted = true;

    if (this.formulario.valid) {
      this.mensagemSuccess('Saved successfully');
      this.clearForm();
    }
    else this.mensagemError('Please enter the fields')
  }

  clearForm() {
    this.id = null;
    this.name = null;
    this.birthDate = null;
    this.email = null;
    this.gender = null;
  }
}
