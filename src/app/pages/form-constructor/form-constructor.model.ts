export type Controls = 'input' | 'select' | 'datepicker';

export interface FormElement {
  name: string;
  control: Controls;
}
