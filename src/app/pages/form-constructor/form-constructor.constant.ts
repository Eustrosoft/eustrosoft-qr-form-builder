import { DatepickerElement, InputElement, SelectElement } from '@app/pages/form-constructor/form-constructor.model';

export const INPUT_DEFAULT_PARAMS: InputElement = {
  controlElement: 'input',
  label: 'Input',
  placeholder: '',
  inputType: 'text',
} as const;

export const SELECT_DEFAULT_PARAMS: SelectElement = {
  controlElement: 'select',
  label: 'Select',
  placeholder: '',
  optionList: [],
} as const;

export const DATEPICKER_DEFAULT_PARAMS: DatepickerElement = {
  controlElement: 'datepicker',
  label: 'Datepicker',
  placeholder: '',
  datepickerType: 'single',
} as const;
