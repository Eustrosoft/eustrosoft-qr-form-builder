import { RuCustomDateAdapter } from '@cdk/classes/ru-custom-date-adapter.class';
import { EnCustomDateAdapter } from '@cdk/classes/en-custom-date-adapter.class';
import { AppLocalesList } from '@app/app.constant';

export const localizedDateAdapterFactory = (localeId: AppLocalesList): EnCustomDateAdapter | RuCustomDateAdapter => {
  switch (localeId) {
    case AppLocalesList.ENGLISH:
      return new EnCustomDateAdapter();
    case AppLocalesList.RUSSIAN:
      return new RuCustomDateAdapter();
    default:
      return new RuCustomDateAdapter();
  }
};
