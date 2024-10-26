import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GHeaderComponent } from '@core/components/g-header/g-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly title = 'eustrosoft-qr-form-builder';
}
