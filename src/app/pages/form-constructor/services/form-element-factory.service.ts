import { Injectable } from '@angular/core';
import { DatepickerElement, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';

@Injectable({
  providedIn: 'root',
})
export class FormElementFactoryService {
  public makeInputElement(params: Partial<InputElement> = {}): InputElement {
    return { controlElement: 'input', label: params?.label ?? 'Input', type: params?.type ?? 'text' };
  }

  public makeSelectElement(params: Partial<SelectElement> = {}): SelectElement {
    return { controlElement: 'select', label: params?.label ?? 'Select', optionList: params?.optionList ?? [] };
  }

  public makeDatepickerElement(params: Partial<DatepickerElement> = {}): DatepickerElement {
    return { controlElement: 'datepicker', label: params?.label ?? 'Datepicker', datepickerType: params?.datepickerType ?? 'single' };
  }
}
