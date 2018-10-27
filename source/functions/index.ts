export function updateQueryStringParameter(search: string, key: string, value: string): string {
  const regExp: RegExp = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
  if (!value) {
    return search.replace(regExp, '');
  }
  const separator: string = search.indexOf('?') !== -1 ? '&' : '?';

  return search.match(regExp)
    ? search.replace(regExp, `$1${key}=${value}$2`)
    : `${search}${separator}${key}=${value}`;
}
