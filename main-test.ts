import { likes } from './like.component';

let component = new likes(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);

