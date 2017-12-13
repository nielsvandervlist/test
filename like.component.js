"use strict";
exports.__esModule = true;
var likes = /** @class */ (function () {
    function likes(likesCounts, isSelected) {
        this.likesCounts = likesCounts;
        this.isSelected = isSelected;
    }
    likes.prototype.onClick = function () {
        //this = onclick if this is selected ?=true +1 else -1
        this.likesCounts = (this.isSelected) ? -1 : +1;
        //this = onclick isSelected = false boolean
        this.isSelected = !this.isSelected;
    };
    return likes;
}());
exports.likes = likes;
