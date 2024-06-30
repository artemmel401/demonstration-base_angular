import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  standalone: true,
  imports: [CommonModule]
})
export class CustomButtonComponent {
  @Input() buttonText: string | undefined;
  @Input() imgUrl: string | undefined;
  @Input() btnColor: string | undefined = ''
}
