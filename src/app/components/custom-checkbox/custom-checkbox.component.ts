import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.scss'
})
export class CustomCheckboxComponent {
  @Input() name: string = ''
  @Input() info: string | undefined;
  @Input() isActive: boolean | undefined = false
  @Input() onChangeIsActive: () => void = ()=>{}

  onChangeActive = () => {
    this.isActive = !this.isActive;
    this.onChangeIsActive()
  }
}
