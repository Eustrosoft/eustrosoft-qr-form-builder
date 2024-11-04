import { FormControl, FormGroup } from '@angular/forms';

export type ControlElement = 'input' | 'select' | 'datepicker';
export type InputType = 'text' | 'number' | 'password';
export type DatepickerType = 'range' | 'single';

export interface FormElement {
  label: string;
  placeholder: string;
  controlElement: ControlElement;
}

export interface InputElement extends FormElement {
  inputType: InputType;
}

export interface SelectElement extends FormElement {
  optionList: string[];
}

export interface DatepickerElement extends FormElement {
  datepickerType: DatepickerType;
}

export type FormField = InputElement | SelectElement | DatepickerElement;

export type InputSettingsForm = FormGroup<{
  label: FormControl<string>;
  placeholder: FormControl<string>;
  inputType: FormControl<InputType>;
}>;

export type InputSettingsRawValue = {
  [K in keyof InputSettingsForm]: InputSettingsForm[K] extends FormControl<infer V> ? V : never;
};
