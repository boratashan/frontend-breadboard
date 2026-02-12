import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HlmButtonImports } from '@spartan-ng/helm/button';

import { HlmDatePickerImports } from '@spartan-ng/helm/date-picker';


import { HlmTabsImports, HlmTabs, HlmTabsList } from '@spartan-ng/helm/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmButtonImports, HlmDatePickerImports, HlmTabs, HlmTabsList, HlmTabsImports],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spartan.ng');
  	/** The minimum date */
	public minDate = new Date(2023, 0, 1);

	/** The maximum date */
	public maxDate = new Date(2030, 11, 31);
}
