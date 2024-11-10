import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type ControlElement = 'input' | 'select' | 'datepicker' | 'ranged-datepicker';
export type InputType = 'text' | 'number' | 'password';
export type RangedDatepickerValue = { start: string; end: string };

export interface FormElement {
  controlElement: ControlElement;
  label: string;
  placeholder: string;
  hint: string;
}

export interface InputElement extends FormElement {
  inputType: InputType;
  formControl: FormControl<string>;
}

export interface SelectElement extends FormElement {
  optionList: string[];
  formControl: FormControl<string>;
}

export interface DatepickerElement extends FormElement {
  formControl: FormControl<string>;
}

export interface RangedDatepickerElement extends FormElement {
  formControl: FormControl<RangedDatepickerValue>;
}

export type FormFieldList = FormArray<FormControl<FormField>>;

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
}>;

export type RangedDatepickerSettingsForm = FormGroup<{
  label: FormControl<string>;
  placeholder: FormControl<string>;
  hint: FormControl<string>;
}>;
