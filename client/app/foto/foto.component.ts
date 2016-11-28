import { Component, Input } from "@angular/core";

@Component({
  moduleId: module.id, // Faz com que o componente procure o template relativo à sua pasta.
  selector: "foto",
  templateUrl: "./foto.component.html"
})
export class FotoComponent {
  @Input() titulo: string = '';
  @Input() url: string = '';
  descricao: string = '';
}