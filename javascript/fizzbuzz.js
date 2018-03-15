"use strict";

console.log("javascript");

$(document).ready(function(){

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            $('#fizzbuzz').append(`<div style="color: green">fizzbuzz</'div>`)
        } if (i % 3 === 0) {
            $('#fizzbuzz').append(`<div style="color: red">fizz</'div>`)
        } else if (i % 5 === 0) {
            $('#fizzbuzz').append(`<div style="color: blue">buzz</'div>`)
        } else {
            $('#fizzbuzz').append(`<div>${i}</div>`);
        }
    }


})