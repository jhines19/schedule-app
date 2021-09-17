//moment.js in header to get todays date displayed
var todaysDate = moment();
$("#today").text(todaysDate.format("dddd, MMMM Do YYYY"));


//click and type into cell
//.on , event delegation, etc.
//on click, insert text
//on click, save

$('.col-9').each(function() {
    var default_value = this.value;
    $(this).focus(function() {
        if(this.value == default_value) {
            this.value = '';
        }
    });
    $(this).blur(function() {
        if(this.value == '') {
            this.value = default_value;
        }
    });
});
function example_append() {
    $('#tbl').append($('#description-field').val());
}

//save your entry :activity 06 in unit 05
//(practice saving something in localStorage. Havent even done that yet.)
