import dayjs from 'dayjs';
import { SortType } from '../const';

const disabledSorts = ['event', 'offer' ];
const isDisabled = (sortType) => (disabledSorts.includes(sortType) ? 'disabled' : '');

const sorts = {
  [SortType.DAY]: undefined,
  [SortType.EVENT]: undefined,
  [SortType.OFFERS]: undefined,
  [SortType.PRICE]: (pointA, pointB) => pointB.basePrice - pointA.basePrice,
  [SortType.TIME]: (pointA, pointB) => dayjs(pointA.dateFrom).diff(dayjs(pointB.dateFrom)),
};

export { isDisabled, sorts };
