import { inject, Injectable } from '@angular/core';
import { DatepickerElement, FormField, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';
import { FormBuilder, FormControl, FormRecord } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormElementService {
  private readonly fb: FormBuilder = inject(FormBuilder);

  private _form: FormRecord<FormControl<unknown>> | null = null;

  get form(): FormRecord<FormControl<unknown>> {
    if (!this._form) {
      this._form = this.makeForm();
      return this._form;
    }
    return this._form;
  }

  private makeForm(): FormRecord<FormControl<unknown>> {
    return this.fb.nonNullable.record({});
  }

  public makeInputElementControl(initialValue: string = ''): FormControl<string> {
    return this.fb.nonNullable.control<string>(initialValue);
  }

  public makeSelectElementControl(initialValue: string = ''): FormControl<string> {
    return this.fb.nonNullable.control(initialValue);
  }

  public makeDatepickerElementControl(initialValue: string = ''): FormControl<string> {
    return this.fb.nonNullable.control(initialValue);
  }

  public isInputElement(formField: FormField): formField is InputElement {
    return formField.controlElement === 'input';
  }

  public isSelectElement(formField: FormField): formField is SelectElement {
    return formField.controlElement === 'select';
  }

  public isDatepickerElement(formField: FormField): formField is DatepickerElement {
    return formField.controlElement === 'datepicker';
  }
}
