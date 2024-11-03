import { Injectable } from '@angular/core';
import { DatepickerElement, FormField, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';

@Injectable({
  providedIn: 'root',
})
export class FormElementService {
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
