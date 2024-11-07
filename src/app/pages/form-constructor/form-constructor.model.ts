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
  value: string | null;
}

export interface SelectElement extends FormElement {
  optionList: string[];
  value: string | null;
}

export interface DatepickerElement extends FormElement {
  datepickerType: DatepickerType;
  value: string | null;
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
  optionList: FormControl<string>;
}>;

export type DatepickerSettingsForm = FormGroup<{
  label: FormControl<string>;
  placeholder: FormControl<string>;
  hint: FormControl<string>;
  datepickerType: FormControl<DatepickerType>;
}>;
