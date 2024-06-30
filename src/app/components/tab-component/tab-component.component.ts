import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-component.component.html',
  styleUrl: './tab-component.component.scss'
})
export class TabComponentComponent {
  @Input() isActive: boolean = false;
  @Input() text: string = '';
  @Input() canDelete: boolean = false;
  @Input() onChangeActiveTab: (newTab: string) => void = () => {}
  @Input() onDeleteTab: (tab: string) => void = () => {}

  isHover: boolean = false

  onChangeIsHover = (isHover: boolean) => {
    this.isHover = isHover
  }
}
