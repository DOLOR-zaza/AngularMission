// Aaron Esteban Tellez Zamudio
// Componente reutilizable para mostrar una opción de configuración.
// Este componente recibe información mediante @Input()
// y avisa cambios al componente padre mediante @Output().

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-setting-option',
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  templateUrl: './setting-option.component.html',
  styleUrl: './setting-option.component.scss'
})
export class SettingOptionComponent {
  // Input: recibe el título de la opción desde el componente padre.
  @Input() title: string = '';

  // Input: recibe una descripción corta de la opción.
  @Input() description: string = '';

  // Input: recibe el ícono de Angular Material que se mostrará.
  @Input() icon: string = 'settings';

  // Input: recibe el estado actual de la opción.
  @Input() enabled: boolean = false;

  // Output: envía al componente padre el nuevo valor cuando cambia el switch.
  @Output() enabledChange = new EventEmitter<boolean>();

  // Método que se ejecuta cuando el usuario activa o desactiva la opción.
  public onToggleChange(value: boolean): void {
    this.enabledChange.emit(value);
  }
}
