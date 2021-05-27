import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.validaForm();
  }


  // window.addEventListener("load", function() {
  //   let formulario = document.querySelector("form.formulario")
  //   formulario.addEventListener("submit", function (event) {
  //     event.preventDefault()

  //   })
  // })


  // public validaForm(form) {
  //   /*
  //   o parâmetro form desta função significa: this.form,
  //   pois a chamada da função - validaForm(this) foi
  //   definida na tag form.
  //   */
  //   //Verifica se o campo nome foi preenchido e
  //   //contém no mínimo três caracteres.
  //   if (form.name.value == "" || form.name.value == null || form.name.value.length < 3) {
  //     //É mostrado um alerta, caso o campo esteja vazio.
  //     alert("Por favor, indique o seu nome.");
  //     //Foi definido um focus no campo.
  //     form.name.focus();
  //     //o form não é enviado.
  //     return false;
  //   }
  //   //o campo e-mail precisa conter: "@", "." e não pode estar vazio
  //   if (form.email.value.indexOf("@") == -1 ||
  //     form.email.value.indexOf(".") == -1 ||
  //     form.email.value == "" ||
  //     form.email.value == null) {
  //     alert("Por favor, indique um e-mail válido.");
  //     form.email.focus();
  //     return false;
  //   }

  //   //Valida a textArea, que é como validar um campo de texto simples.
  //   if (form.mensagem.value == "" || form.mensagem.value == null || form.mensagem.value.length < 5) {
  //     alert("Por favor, escreva sua mensagem.");
  //     form.mensagem.focus();
  //     return false;
  //   }
  //   else {
  //     alert("Formulário enviado com sucesso!")
  //   }
  // }
}
