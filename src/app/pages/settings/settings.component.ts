// Aaron Esteban Tellez Zamudio
// Página Settings del proyecto Library Backlog.
// En este componente se define la información que será enviada al componente hijo
// mediante Inputs y se recibe la respuesta del hijo mediante Outputs.

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SettingOptionComponent } from '../../components/general/setting-option/setting-option.component';

interface SettingItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  enabled: boolean;
}

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SettingOptionComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  // Lista de opciones que se mandan al componente hijo usando Inputs.
  public settings: SettingItem[] = [
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Receive updates about new books and activity in the backlog.',
      icon: 'notifications',
      enabled: true
    },
    {
      id: 'darkMode',
      title: 'Dark mode',
      description: 'Change the visual mode of the application interface.',
      icon: 'dark_mode',
      enabled: false
    },
    {
      id: 'publicProfile',
      title: 'Public profile',
      description: 'Allow other users to view your reading activity.',
      icon: 'account_circle',
      enabled: true
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      description: 'Show book suggestions based on your backlog preferences.',
      icon: 'auto_awesome',
      enabled: false
    }
  ];

  public lastChange: string = 'No changes yet';

  // Método que recibe el Output del componente hijo cuando cambia una opción.
  public onSettingChange(settingId: string, enabled: boolean): void {
    this.settings = this.settings.map((setting) => {
      if (setting.id === settingId) {
        return {
          ...setting,
          enabled
        };
      }

      return setting;
    });

    const selectedSetting = this.settings.find((setting) => setting.id === settingId);

    this.lastChange = `${selectedSetting?.title} was ${enabled ? 'enabled' : 'disabled'}`;
  }

  // Método que reinicia todas las opciones desde el botón Reset.
  public resetSettings(): void {
    this.settings = this.settings.map((setting) => ({
      ...setting,
      enabled: false
    }));

    this.lastChange = 'All settings were disabled';
  }
}
