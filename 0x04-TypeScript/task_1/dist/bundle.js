/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBaUJBLElBQU0sWUFBWSxHQUF5QixVQUFVLFNBQWlCLEVBQUUsUUFBZ0I7SUFDcEYsT0FBTyxVQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGVBQUssUUFBUSxDQUFFLENBQUM7QUFDakQsQ0FBQztBQU9EO0lBSUksc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNJLE9BQU8sbUJBQW1CO0lBQzlCLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmc7XG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcjtcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gICAgbnVtYmVyT2ZSZXBvcnRzOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCBwcmludFRlYWNoZXI6IHByaW50VGVhY2hlckZ1bmN0aW9uID0gZnVuY3Rpb24gKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX0uICR7bGFzdE5hbWV9YDtcbn1cblxuaW50ZXJmYWNlIHN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbn1cblxuY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgc3R1ZGVudENsYXNzSW50ZXJmYWNlIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICB9XG5cbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJ0N1cnJlbnRseSB3b3JraW5nJ1xuICAgIH1cblxuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0TmFtZTtcbiAgICB9XG59XG5cbmludGVyZmFjZSBzdHVkZW50Q2xhc3NDb25zdHJ1Y3RvciB7XG4gICAgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogc3R1ZGVudENsYXNzSW50ZXJmYWNlO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9