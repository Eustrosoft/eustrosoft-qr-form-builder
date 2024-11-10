import { ChangeDetectionStrategy, Component, inject, Injector, input, model, OnInit } from '@angular/core';
import { DatepickerElement } from '@app/pages/form-constructor/form-constructor.model';
import { MatFormField, MatHint, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { AbstractControl, ControlValueAccessor, FormControlDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Iso8601DateFormatPipe } from '@core/pipe/iso8601-date-format.pipe';

@Component({
  selector: 'datepicker-element',
  standalone: true,
  imports: [MatFormField, MatDatepickerToggle, MatDatepicker, MatDatepickerInput, MatInput, MatSuffix, MatLabel, MatHint],
  templateUrl: './datepicker-element.component.html',
  styleUrl: './datepicker-element.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DatepickerElementComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: DatepickerElementComponent,
      multi: true,
    },
  ],
})
export class DatepickerElementComponent implements ControlValueAccessor, Validator, OnInit {
  private readonly injector: Injector = inject(Injector);
  private readonly iso8601DateFormatPipe: Iso8601DateFormatPipe = inject(Iso8601DateFormatPipe);

  public readonly label = input<DatepickerElement['label']>('');
  public readonly placeholder = input<DatepickerElement['placeholder']>('');
  public readonly hint = input<DatepickerElement['hint']>('');
  public readonly value = model<DatepickerElement['formControl']['value']>('');
  public readonly isTouched = model<boolean>(false);
  public readonly isDisabled = model<boolean>(false);

  protected formControlDirective: FormControlDirective | null = null;

  public ngOnInit(): void {
    this.initFormControlDirective();
  }

  private initFormControlDirective(): void {
    this.formControlDirective = this.injector.get<FormControlDirective | null>(FormControlDirective, null);
  }

  protected dateChange(value: Date): void {
    const date = this.iso8601DateFormatPipe.transform(value);
    this.markAsTouched();
    this.onChange(date);
    this.writeValue(date);
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
