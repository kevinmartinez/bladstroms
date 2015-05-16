(function () {
  'use strict';

var slogan = function (say) {
    console.log(say)
};

var Employees = function () {
    var position: string;
    var yearHired: number;
    var skills: string;
    var language: string;
    return console.dir(this);
};

Employees.prototype.slogan = slogan;

var developer = new Employees;
developer.position = 'Front-End';
developer.yearHired = 2015;
developer.slogan('Hello');
developer.language = 'Ruby';
developer.experience = 'Junior';

var assistants = new Employees;
assistants.position = 'Main assistant';
assistants.yearHired = 2000;
assistants.slogan("Service");





























}());