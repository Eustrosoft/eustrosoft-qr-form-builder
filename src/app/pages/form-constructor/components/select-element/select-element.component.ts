import { ChangeDetectionStrategy, Component, inject, Injector, input, model, OnInit } from '@angular/core';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectChange } from '@angular/material/select';
import { SelectElement } from '@app/pages/form-constructor/form-constructor.model';
import { AbstractControl, ControlValueAccessor, FormControlDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'select-element',
  standalone: true,
  imports: [MatFormField, MatLabel, MatSelect, MatHint, MatOption],
  templateUrl: './select-element.component.html',
  styleUrl: './select-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectElementComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SelectElementComponent,
      multi: true,
    },
  ],
})
export class SelectElementComponent implements ControlValueAccessor, Validator, OnInit {
  private readonly injector: Injector = inject(Injector);

  public readonly label = input<SelectElement['label']>('');
  public readonly placeholder = input<SelectElement['placeholder']>('');
  public readonly hint = input<SelectElement['hint']>('');
  public readonly optionList = input<SelectElement['optionList']>([]);
  public readonly value = model<SelectElement['formControl']['value']>('');
  public readonly isTouched = model<boolean>(false);
  public readonly isDisabled = model<boolean>(false);

  protected formControlDirective: FormControlDirective | null = null;

  public ngOnInit(): void {
    this.initFormControlDirective();
  }

  private initFormControlDirective(): void {
    this.formControlDirective = this.injector.get<FormControlDirective | null>(FormControlDirective, null);
  }

  protected selectionChanged(event: MatSelectChange): void {
    this.markAsTouched();
    this.onChange(event.value);
    this.writeValue(event.value);
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
