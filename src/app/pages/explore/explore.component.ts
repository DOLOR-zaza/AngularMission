import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/general/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore',
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

  public test(searchTerm: string) {
    console.log('Search term:', searchTerm);
  }
}
// Aaron Esteban Tellez Zamudio
