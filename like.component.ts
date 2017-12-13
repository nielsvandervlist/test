export class likes{

    constructor(public likesCount: number, public isSelected: boolean){}

    onClick(){

        //this = onclick if this is selected ?=true +1 else -1
        this.likesCount = (this.isSelected) ? -1 : +1;

        //this = onclick isSelected = false boolean
        this.isSelected = !this.isSelected;
    }

}