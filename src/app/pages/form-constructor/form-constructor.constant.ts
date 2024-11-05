import { DatepickerElement, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';

export const INPUT_DEFAULT_PARAMS: InputElement = {
  label: 'Input',
  placeholder: '',
  hint: '',
  controlElement: 'input',
  inputType: 'text',
} as const;

export const SELECT_DEFAULT_PARAMS: SelectElement = {
  label: 'Select',
  placeholder: '',
  hint: '',
  controlElement: 'select',
  optionList: [],
} as const;

export const DATEPICKER_DEFAULT_PARAMS: DatepickerElement = {
  label: 'Datepicker',
  placeholder: '',
  hint: '',
  controlElement: 'datepicker',
  datepickerType: 'single',
} as const;
