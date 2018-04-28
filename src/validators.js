export function required(value) {
  return !value ? ['This field is required'] : [];
}

export function email(value) {
  const emailRegExp = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$", "i");
  return !emailRegExp.test(value) ? ['This email address is invalid']: [];
}

export function code(value) {
    const regex = new RegExp("^[0-9]{3}$");
    let isValid = true;

    if (value === "111") return ['This code is invalid'];

    return !regex.test(value) ? ['This code is invalid'] : [];
}

export function card(number) {
    const regex = new RegExp("^[0-9]{16}$");
    let isValid = true;

    if (!regex.test(number))
      isValid = false;

    return !(luhnCheck(number) && isValid) ? ['This card is invalid'] : [];
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}
