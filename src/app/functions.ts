export function prepareDataForRegExp(data: string): string {
  const result = data
    .split('')
    .map((it) => {
      const backslash = '\\'.split('').slice(0, 1)[0];
      const chars = ['(', ')', '{', '}', '|', ':', '?', '*', '+', '^', '.'];
      const checkForChars = chars.some((it2) => it2 === it);

      if (backslash === it) {
        return '\\\\';
      }
      if (checkForChars) {
        return `\\${it}`;
      }
      return it;
    })
    .join('');
  return result;
}
