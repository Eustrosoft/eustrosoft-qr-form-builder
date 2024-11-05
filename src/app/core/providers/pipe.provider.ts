import { Provider } from '@angular/core';
import { PxToRemPipe } from '@core/pipe/px-to-rem.pipe';
import { RuDateAdapterParsePipe } from '@core/pipe/ru-adapter-parse.pipe';

export function providePipes(): Provider[] {
  return [PxToRemPipe, RuDateAdapterParsePipe];
}
