let message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternateWay = (message as string).endsWith('c');
