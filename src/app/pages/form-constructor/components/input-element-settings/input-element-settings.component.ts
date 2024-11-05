import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { InputElement, InputSettingsForm, InputType } from '@app/pages/form-constructor/form-constructor.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FlexBlockComponent } from '@core/components/flex-block/flex-block.component';
import { MatOption, MatSelect } from '@angular/material/select';
import { select } from '@ngxs/store';
import { FormConstructorState } from '@app/pages/form-constructor/store/form-constructor.state';
import { outputFromObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'input-element-settings',
  standalone: true,
  imports: [
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    FlexBlockComponent,
    MatSelect,
    MatOption,
    MatCardTitle,
    MatCardActions,
  ],
  templateUrl: './input-element-settings.component.html',
  styleUrl: './input-element-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputElementSettingsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  public readonly label = input<InputElement['label']>('');
  public readonly placeholder = input<InputElement['placeholder']>('');
  public readonly hint = input<InputElement['hint']>('');
  public readonly inputType = input<InputElement['inputType']>('text');

  protected readonly position = input<ConnectedPosition>({
    originX: 'end',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'top',
    offsetX: 8,
  });
  protected isOpen = false;

  protected readonly inputTypeOptionList = select(FormConstructorState.getInputTypeOptionList$);

  protected readonly inputSettingsForm: InputSettingsForm = this.fb.group({
    label: this.fb.nonNullable.control<string>(this.label()),
    placeholder: this.fb.nonNullable.control<string>(this.placeholder()),
    hint: this.fb.nonNullable.control<string>(this.hint()),
    inputType: this.fb.nonNullable.control<InputType>(this.inputType()),
  });

  public readonly settingsChanged = outputFromObservable<ReturnType<InputSettingsForm['getRawValue']>>(
    this.inputSettingsForm.valueChanges.pipe(map(() => this.inputSettingsForm.getRawValue())),
  );

  public readonly removeClicked = output<void>();

  public ngOnInit(): void {
    this.applyInputsToForm();
  }

  private applyInputsToForm(): void {
    this.inputSettingsForm.patchValue({
      label: this.label(),
      placeholder: this.placeholder(),
      inputType: this.inputType(),
    });
  }
}
