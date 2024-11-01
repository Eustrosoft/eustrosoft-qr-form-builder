export type ControlElement = 'input' | 'select' | 'datepicker';
export type InputType = 'text' | 'number' | 'password';
export type DatepickerType = 'range' | 'single';

export interface FormElement {
  label: string;
  controlElement: ControlElement;
}

export interface InputElement extends FormElement {
  type: InputType;
}

export interface SelectElement extends FormElement {
  optionList: string[];
}

export interface DatepickerElement extends FormElement {
  datepickerType: DatepickerType;
}

export type FormField = InputElement | SelectElement | DatepickerElement;
