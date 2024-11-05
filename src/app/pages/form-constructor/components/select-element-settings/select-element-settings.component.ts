import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { FormElementActionsComponent } from '@app/pages/form-constructor/components/form-element-actions/form-element-actions.component';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { SETTINGS_OVERLAY_POSITION_RIGHT } from '@app/pages/form-constructor/form-constructor.constant';
import { SelectElement, SelectSettingsForm } from '@app/pages/form-constructor/form-constructor.model';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'select-element-settings',
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
  ],
  templateUrl: './select-element-settings.component.html',
  styleUrl: './select-element-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectElementSettingsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  public readonly label = input<SelectElement['label']>('');
  public readonly placeholder = input<SelectElement['placeholder']>('');
  public readonly hint = input<SelectElement['hint']>('');
  public readonly optionList = input<SelectElement['optionList']>([]);

  protected readonly SETTINGS_OVERLAY_POSITION_RIGHT = SETTINGS_OVERLAY_POSITION_RIGHT;

  protected readonly selectSettingsForm: SelectSettingsForm = this.fb.group({
    label: this.fb.nonNullable.control<string>(this.label()),
    placeholder: this.fb.nonNullable.control<string>(this.placeholder()),
    hint: this.fb.nonNullable.control<string>(this.hint()),
    optionList: this.fb.nonNullable.control<string[]>(this.optionList()),
  });

  public readonly settingsChanged = outputFromObservable<ReturnType<SelectSettingsForm['getRawValue']>>(
    this.selectSettingsForm.valueChanges.pipe(map(() => this.selectSettingsForm.getRawValue())),
  );

  public readonly removeClicked = output<void>();

  protected isSettingsOpen = false;

  public ngOnInit(): void {
    this.applyInputsToForm();
  }

  private applyInputsToForm(): void {
    this.selectSettingsForm.patchValue({
      label: this.label(),
      placeholder: this.placeholder(),
      hint: this.hint(),
      optionList: this.optionList(),
    });
  }
}
