const INPUTREGEXP:Record<string, string> = {
  first_name: '^([А-Я]{1}[а-яё]{1,}|[A-Z]{1}[a-z]{1,})$',
  second_name: '^([А-Я]{1}[а-яё]{1,}|[A-Z]{1}[a-z]{1,})$',
  phone: '^\\+?[0-9]{10,15}$',
  login: '^(?=.*[A-Za-z_-])[A-Za-z0-9_-]{3,20}$',
  display_name: '^(?=.*[A-Za-z_-])[A-Za-z0-9_-]{3,20}$',
  password: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_-]{8,40}$',
  passwordDbl: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_-]{8,40}$',
  oldPassword: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_-]{8,40}$',
  newPassword: '^(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9_-]{8,40}$',
  email: '^([-a-zA-Z0-9\.])+\@([-a-zA-Z0-9]){1,}\.([A-Za-z]{2,4})$',
}


export default function validate(value: string, name: string): boolean {
  let reg = new RegExp(INPUTREGEXP[name], "g");
  return !reg.test(value);
}