/** Parsed from parts, not `new Date(iso)`: that reads the string as UTC, so in
    a negative-offset timezone the birthday would land a day early. */
export function ageOn(isoBirthDate: string, today = new Date()): number {
  const [y, m, d] = isoBirthDate.split('-').map(Number)
  let age = today.getFullYear() - y
  const beforeBirthday =
    today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)
  if (beforeBirthday) age -= 1
  return age
}

export const BIRTH_DATE = '1997-02-15'
