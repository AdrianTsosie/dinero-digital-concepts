$(document).ready(function() {

    /**
     * jQuery Validate Function
     *
     * This function provides front-end validation for your form.
     * If all tests set up here pass, the form data is AJAX submitted
     * to the mailer.php file.
     *
     * Update this file as needed for your form.
     * All ids and name values must match up to your form here.
     *
     * @author Rochelle Lewis <rlewis37@cnm.edu>
     **/

    $("#contact-form").validate({

            // setup handling of form errors
            debug: true,
            errorClass: "alert alert-danger",
            errorLabelContainer: "#output-araea",
            errorElement: "div",
            // rules here define what is good or bad input
            // each rule starts with the form input element's NAME attribute
            rules: {
                name: {
                    required: true
                },
                email: {
                    email: true,
                    required: true
                },
                subject: {
                    required: false,
                    maxlength: 64
                },
                message: {
                    required: true,
                    maxlength: 2000,
                    minlength: 10
                }
            },
            // error messages to display to the end user when rules above don't pass
            messages: {
                name: {
                    required: "Please add your name."
                },
                email: {
                    email: "Please add a valid email.",
                    required: "Please add a valid email."
                },
                subject: {
                    maxlength: "64 characters max.",
                },
                message: {
                    required: "Please add a message",
                    maxlength: "2000 characters max.",
                    minlength: "10 character min."
                }
            },

            // AJAX submit the form data to back end if rules pass
            submitHandler: function(form) {
                $("#contact-form").ajaxSubmit({
                    type: "POST",
                    url: $("#contact-form").attr("action"),

                    success: function (ajaxOutput) {
                        // clear the output area's formatting
                        $("#output-area").css("display", "");

                        // write the server's reply to the output area
                        $("#output-area").html(ajaxOutput);

                        //reset the form if it was successful
                        if($(".alert-success").length >= 1) {
                            $("#contact-form")[0].reset();
                        }
                    }
                })
            }
    });
});
