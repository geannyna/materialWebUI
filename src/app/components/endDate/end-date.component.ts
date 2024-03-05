import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-end-date',
  standalone: true,
  templateUrl: './end-date.component.html',
  styleUrl: './end-date.component.css'
})
export class EndDateComponent implements OnInit{
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      fechaInicio: ['', Validators.required],
      fechaFin: ['', [Validators.required, this.validarFechaFin]]
    });
  }
  validarFechaFin(control: { parent: { controls: { fechaInicio: { value: string | number | Date; }; }; }; value: string | number | Date; }) {
    const fechaInicio = new Date(control.parent.controls.fechaInicio.value);
    const fechaFin = new Date(control.value);
    return fechaFin >= fechaInicio ? null : { fechaInvalida: true };
  }

}
