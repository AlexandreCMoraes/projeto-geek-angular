import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataname: string = "";
  dataemail: string = ""
  datatext: string = ""

  /* Botão do formulario e validações */
  public btnForm() {
    if (this.dataname == "" || this.dataname == null || this.dataname.length < 3) {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor, preencha os campos do formulário começando pelo seu nome'
      })
    } else if (this.dataemail.indexOf("@") == -1 || this.dataemail.indexOf(".") == -1 || this.dataemail == "" || this.dataemail == null) {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor, indique um e-mail válido, por exemplo: email@email.com'
      })
    } else if (this.datatext == "" || this.datatext == null || this.datatext.length < 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Por favor, escreva sua mensagem. Não deixe o campo vazio 😢, gostaríamos do seu feedback 🙂'
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Enviado com sucesso!',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }
}
