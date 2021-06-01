import { Component, OnInit } from '@angular/core';

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

  /* botao */
  public botao() {
    if (this.dataname == "" || this.dataname == null || this.dataname.length < 3) {
      alert("Por favor, indique o seu nome.");
    } else if (this.dataemail.indexOf("@") == -1 || this.dataemail.indexOf(".") == -1 || this.dataemail == "" || this.dataemail == null) {
      alert("Por favor, indique um e-mail válido.");
    } else if (this.datatext == "" || this.datatext == null || this.datatext.length < 5) {
      alert("Por favor, escreva sua mensagem.");
    } else {
      // Swal.fire({
      //   title: 'Error!',
      //   text: 'Do you want to continue',
      //   icon: 'error',
      //   confirmButtonText: 'Cool'
      // })

    }
  }
  
  // TODO modal animado
}
