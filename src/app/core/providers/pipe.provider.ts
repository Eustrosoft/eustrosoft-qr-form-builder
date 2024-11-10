import { Provider } from '@angular/core';
import { PxToRemPipe } from '@core/pipe/px-to-rem.pipe';
import { RuDateAdapterParsePipe } from '@core/pipe/ru-adapter-parse.pipe';
import { Iso8601DateFormatPipe } from '@core/pipe/iso8601-date-format.pipe';

export function providePipes(): Provider[] {
  return [PxToRemPipe, RuDateAdapterParsePipe, Iso8601DateFormatPipe];
}
