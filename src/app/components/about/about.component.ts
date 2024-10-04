import { Component } from '@angular/core';
import { HeaderData,HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private uiData: HeaderData = {
    title: 'Hecho Por Ing.Jesus guerra',
    subtitle: 'Estos somos nosotros!',
    thumbnail: 'https://i.pinimg.com/474x/64/1b/ce/641bce95e9b9d1b2a5a2854b31572edf.jpg'
  }

  constructor(private headerService: HeaderService) {
    headerService.uiData.set(this.uiData)
  }

}