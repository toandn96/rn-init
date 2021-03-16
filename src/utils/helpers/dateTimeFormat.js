import moment from 'moment';

export function formatDate(d, f) {
  if (d) {
    try {
      return moment(d).format(f);
    } catch (error) {
      return '';
    }
  }
  return '';
}
