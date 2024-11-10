import { inject, Injectable } from '@angular/core';
import { DatepickerElement, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';
import { DATEPICKER_DEFAULT_PARAMS, INPUT_DEFAULT_PARAMS, SELECT_DEFAULT_PARAMS } from '@app/pages/form-constructor/form-constructor.constant';
import { FormElementService } from '@app/pages/form-constructor/services/form-element.service';

@Injectable({
  providedIn: 'root',
})
export class FormElementFactoryService {
  private readonly formElementService = inject(FormElementService);

  public makeInputElement(params: Partial<InputElement> = {}): InputElement {
    return {
      controlElement: 'input',
      label: params?.label ?? INPUT_DEFAULT_PARAMS.label,
      placeholder: params?.placeholder ?? INPUT_DEFAULT_PARAMS.placeholder,
      hint: params?.hint ?? INPUT_DEFAULT_PARAMS.hint,
      inputType: params?.inputType ?? INPUT_DEFAULT_PARAMS.inputType,
      formControl: params?.formControl ?? this.formElementService.makeInputElementControl(),
    };
  }

  public makeSelectElement(params: Partial<SelectElement> = {}): SelectElement {
    return {
      controlElement: 'select',
      label: params?.label ?? SELECT_DEFAULT_PARAMS.label,
      placeholder: params?.placeholder ?? SELECT_DEFAULT_PARAMS.placeholder,
      hint: params?.hint ?? SELECT_DEFAULT_PARAMS.hint,
      optionList: params?.optionList ?? SELECT_DEFAULT_PARAMS.optionList,
      formControl: params?.formControl ?? this.formElementService.makeSelectElementControl(),
    };
  }

  public makeDatepickerElement(params: Partial<DatepickerElement> = {}): DatepickerElement {
    return {
      controlElement: 'datepicker',
      label: params?.label ?? DATEPICKER_DEFAULT_PARAMS.label,
      placeholder: params?.placeholder ?? DATEPICKER_DEFAULT_PARAMS.placeholder,
      hint: params?.hint ?? DATEPICKER_DEFAULT_PARAMS.hint,
      formControl: params?.formControl ?? this.formElementService.makeDatepickerElementControl(),
    };
  }
}
