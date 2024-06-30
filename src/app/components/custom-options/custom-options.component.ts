import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-options.component.html',
  styleUrl: './custom-options.component.scss'
})
export class CustomOptionsComponent {
  @Input() selectedValue: string | number | undefined = ''
  @Input() options: string[] | undefined = [];
  @Input() isHoverBackground: boolean = true

  isOpen = false

  changeIsOpen = () => {
    this.isOpen = !this.isOpen
  }
  changeSelected = (newValue: string | number) => {
    this.selectedValue = newValue
    this.isOpen = false
  }
}
