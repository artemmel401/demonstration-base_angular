import { Component } from '@angular/core';
import { firstSettingsTabs, secondSettingsTabs } from '../consts/settings-tabs';
import { links } from '../consts/links';
import { CommonModule } from '@angular/common';
import { ShiftSFocusDirective } from './directives/shift-s-focus.directive';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomOptionsComponent } from './components/custom-options/custom-options.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { userRoles } from '../consts/user-roles';
import { languages } from '../consts/languages';
import { FormsModule } from '@angular/forms';
import { TabComponentComponent } from './components/tab-component/tab-component.component';
import { tabs } from '../consts/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    CommonModule, 
    ShiftSFocusDirective, 
    CustomButtonComponent, 
    CustomOptionsComponent, 
    CustomCheckboxComponent, 
    FormsModule,
    TabComponentComponent
  ]
})
export class AppComponent {
  title = 'demonstration-base';
  inputValue = '';
  activeTab = 'Administrator EN (User)'
  isActive1C = true
  isLockBlankPassword = false

  buttons = [
    {
      icon: 'icons/menu-2.svg'
    },
    {
      icon: 'icons/message.svg' 
    },
    {
      text: 'Sales Rules'
    },
    {
      text: 'Start Interview'
    },
    {
      text: 'Generate',
      options: ['Generate-1','Generate-2','Generate-3','Generate-4']
    },
    {
      icon: 'icons/add-user.svg'
    },
    {
      icon: 'icons/add-event.svg'
    },
    {
      icon: 'icons/dots-horizontal.svg'
    },
    {
      icon: 'icons/dots-horizontal.svg'
    }
  ]

  firstSettingsTabs = firstSettingsTabs
  secondSettingsTabs = secondSettingsTabs

  firstSettingsActiveTab: string = this.firstSettingsTabs[0]
  secondSettingsActiveTab: string = this.secondSettingsTabs[0]

  userRoles = userRoles
  languages = languages
  tabs = tabs

  links = links
  originalLinks = [...this.links];

  onSearchChange = (event: Event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      if (target.value !== ''){
        this.links = this.links.filter((link)=>(link.name.toLowerCase().replace(" ", '').includes(target.value.toLowerCase())
        ))
      } else {
        this.links = [...this.originalLinks];
    }
    }
  }

  onChangeActiveTab = (newTab: string) => {
    this.activeTab = newTab
  }
  onChangeSettingsTab = (newTab: string, isFirstSettings: boolean) => {
    isFirstSettings ? this.firstSettingsActiveTab = newTab : this.secondSettingsActiveTab = newTab
  }
  onChangeActive1C = () => {
    this.isActive1C = !this.isActive1C
  }
  onChangeLockBlankPassword = () => {
    this.isLockBlankPassword = !this.isLockBlankPassword
  }

  onDeleteTab = (tabToDelete: string) => {
    this.tabs = this.tabs.filter((tab)=>(tab.text !== tabToDelete))
    if (this.activeTab === tabToDelete){
      this.activeTab = tabs[0].text
    }
  }
}
