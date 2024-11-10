import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { DatepickerElement, DatepickerSettingsForm } from '@app/pages/form-constructor/form-constructor.model';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { FormElementActionsComponent } from '@app/pages/form-constructor/components/form-element-actions/form-element-actions.component';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { SETTINGS_OVERLAY_POSITION_RIGHT } from '@app/pages/form-constructor/form-constructor.constant';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'datepicker-element-settings',
  standalone: true,
  imports: [
    CdkOverlayOrigin,
    FormElementActionsComponent,
    CdkConnectedOverlay,
    FlexBlockComponent,
    FormsModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatHint,
    MatCardTitle,
    MatLabel,
    MatOption,
    MatSelect,
  ],
  templateUrl: './datepicker-element-settings.component.html',
  styleUrl: './datepicker-element-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerElementSettingsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  public readonly label = input<DatepickerElement['label']>('');
  public readonly placeholder = input<DatepickerElement['placeholder']>('');
  public readonly hint = input<DatepickerElement['hint']>('');

  protected readonly SETTINGS_OVERLAY_POSITION_RIGHT = SETTINGS_OVERLAY_POSITION_RIGHT;

  protected readonly datepickerSettingsForm: DatepickerSettingsForm = this.fb.group({
    label: this.fb.nonNullable.control<string>(this.label()),
    placeholder: this.fb.nonNullable.control<string>(this.placeholder()),
    hint: this.fb.nonNullable.control<string>(this.hint()),
  });

  public readonly settingsChanged = outputFromObservable<ReturnType<DatepickerSettingsForm['getRawValue']>>(
    this.datepickerSettingsForm.valueChanges.pipe(map(() => this.datepickerSettingsForm.getRawValue())),
  );

  public readonly removeClicked = output<void>();

  protected isSettingsOpen = false;

  public ngOnInit(): void {
    this.applyInputsToForm();
  }

  private applyInputsToForm(): void {
    this.datepickerSettingsForm.patchValue({
      label: this.label(),
      placeholder: this.placeholder(),
      hint: this.hint(),
    });
  }
}
