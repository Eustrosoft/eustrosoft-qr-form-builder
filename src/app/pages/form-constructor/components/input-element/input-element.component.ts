import { ChangeDetectionStrategy, Component, inject, Injector, input, model, OnInit } from '@angular/core';
import { InputElement } from '@app/pages/form-constructor/form-constructor.model';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControlDirective,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Component({
  selector: 'input-element',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel, MatHint, FormsModule],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputElementComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: InputElementComponent,
      multi: true,
    },
  ],
})
export class InputElementComponent implements ControlValueAccessor, Validator, OnInit {
  private readonly injector: Injector = inject(Injector);

  public readonly label = input<InputElement['label']>('');
  public readonly placeholder = input<InputElement['placeholder']>('');
  public readonly hint = input<InputElement['hint']>('');
  public readonly inputType = input<InputElement['inputType']>('text');
  public readonly value = model<InputElement['formControl']['value']>('');
  public readonly isTouched = model<boolean>(false);
  public readonly isDisabled = model<boolean>(false);

  protected formControlDirective: FormControlDirective | null = null;

  public ngOnInit(): void {
    this.initFormControlDirective();
  }

  private initFormControlDirective(): void {
    this.formControlDirective = this.injector.get<FormControlDirective | null>(FormControlDirective, null);
  }

  protected inputChanged(event: string): void {
    this.markAsTouched();
    this.onChange(event);
    this.writeValue(event);
  }

  protected markAsTouched(): void {
    if (!this.isTouched()) {
      this.onTouched();
      this.isTouched.set(true);
    }
  }

  public writeValue(value: string): void {
    this.value.set(value);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    if (control.invalid) {
      return control.errors;
    }
    return null;
  }

  public registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /* eslint-disable @typescript-eslint/no-empty-function */
  public onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};
  public onValidatorChange: () => void = () => {};
  /* eslint-enable @typescript-eslint/no-empty-function */
}
