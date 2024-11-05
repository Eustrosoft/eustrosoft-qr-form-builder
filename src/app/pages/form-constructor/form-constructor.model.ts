import { FormControl, FormGroup } from '@angular/forms';

export type ControlElement = 'input' | 'select' | 'datepicker';
export type InputType = 'text' | 'number' | 'password';
export type DatepickerType = 'range' | 'single';

export interface FormElement {
  controlElement: ControlElement;
  label: string;
  placeholder: string;
  hint: string;
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
  hint: FormControl<string>;
  inputType: FormControl<InputType>;
}>;

export type SelectSettingsForm = FormGroup<{
  label: FormControl<string>;
  placeholder: FormControl<string>;
  hint: FormControl<string>;
  optionList: FormControl<string[]>;
}>;
