import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContatosService } from '../../../services/contatos.service';
import { ContatoResponse } from '../../../models/contato.response';


@Component({
  selector: 'app-list-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-contacts.component.html',
  styleUrl: './list-contacts.component.css'
})
export class ListContactsComponent implements OnInit {


  //variável
  contatos: ContatoResponse[] = [];


  constructor(
    private contatosService: ContatosService
  ) {}


  ngOnInit(): void {
    this.contatosService.get()
      .subscribe({
        next: (data) => {
          this.contatos = data;
        },
        error: (e) => {
          console.log(e);
        }
      })
  }

  //função para executar edição
  onEdit(idContato: string): void {
    alert(idContato)
  }

  //função para executar exclusão
  onDelete(idContato: string): void {
    alert(idContato)
  }
}





