var verify = (function () {

    var candidates = {
        ward01: ['Dana Booth', 'Michael Torok', 'Spoiled Ballot'],
        ward02: ['Brandon Dickson', 'Piercon Knezic', 'Spoiled Ballot'],
        ward03: ['Asala Aladl', 'Mickey Tecleab', 'Spoiled Ballot'],
        ward04: ['Meegan St. Denis', 'Zola Ncube', 'Spoiled Ballot'],
        ward05: ['Kaygen Dache', 'Ben Drummond', 'Fawaz Mahbouba', 'Spoiled Ballot'],
        ward06: ['Landon Tulk', 'Grace Wu', 'Rachel Phillips', 'Spoiled Ballot'],
        ward07: ['Almas Farooqi', 'Jacob Bildy', 'Lev Konopelko', 'Mariam Said', 'Spoiled Ballot'],
        ward08: ['Rosa Pashaei', 'Olivia Akena', 'Vesa Shabani', 'Hassan Yousef', 'Yusra Al-Sharafi', 'Spoiled Ballot'],
        ward09: ['Maia Harris', 'Noor Hmidan Simsam', 'Spoiled Ballot'],
        ward10: ['Benjamin Charlebois', 'Spoiled Ballot'],
        ward11: ['Zac Piette', 'Moeez Tahir', 'Spoiled Ballot'],
        ward12: ['Floranda Agroam', 'Michael Scafe', 'Raghad Elniwairi', 'Twana Husni', 'Spoiled Ballot'],
        ward13: ['Jocelyn Wong', 'Tyler Bryden', 'McKenzie Edwards', 'Meghan Matthies', 'Hannah McPherson', 'Spoiled Ballot'],
        ward14: ['Camilla Cusmaan', 'Spoiled Ballot']
    }

    function candidateAppender(key) {
        var html = '';
        for(var i = 0; i < candidates[key].length; i++){
            html = html + '<input for="your_vote" type="radio" name="your_vote" value="' + candidates[key][i].split(' ').join('_') +'"> ' + candidates[key][i] + '</label><br>'
        }
        return html;
    }


    function checkRadio() {
        var r = document.getElementsByName("your_vote");
        var s = document.getElementsByName("referendum");
        var c = -1
        var d = -1

        for (var i = 0; i < r.length; i++) {
            if (r[i].checked) {
                c = i;
            }
        }
        for (var i = 0; i < s.length; i++) {
            if (s[i].checked) {
                d = i;
            }
        }
        if (c == -1 || d == -1) {
            return false;
        }
        return true;
    }

    $(document).ready(function () {
        $('#test-form').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    first_name: {
                        message: 'The first name is not valid',
                        validators: {
                            notEmpty: {
                                message: 'The first name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 1,
                                max: 30,
                                message: 'The first name must be more than 1 and less than 30 characters long'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9_ ]*$/,
                                message: 'The first name can only accept alphabetical input'
                            },
                        }
                    },
                    last_name: {
                        message: 'Last Name is not valid',
                        validators: {
                            notEmpty: {
                                message: 'Last Name is required and cannot be empty'
                            },
                            stringLength: {
                                min: 1,
                                max: 40,
                                message: 'Last Name must be more than 1 and less than 40 characters long'
                            },
                            regexp: {
                                regexp: /^[a-zA-Z0-9_ ]*$/,
                                message: 'The first name can only accept alphabetical input'
                            },
                        }
                    },
                    gender: {
                        validators: {
                            notEmpty: {
                                message: 'Gender is required and cannot be empty'
                            },
                            stringLength: {
                                min: 1,
                                max: 20,
                                message: 'Gender must be more than 1 and less than 20 characters long'
                            },
                        }
                    },
                    age: {
                        validators: {
                            notEmpty: {
                                message: 'Age is required and cannot be empty'
                            },
                            stringLength: {
                                min: 2,
                                max: 2,
                                message: 'Age must be a number between 10 and 99'
                            },
                            regexp: {
                                regexp: /^[0-9]+$/,
                                message: 'Age can only be numbers'
                            },
                        }
                    },
                    cell_number: {
                        validators: {
                            stringLength: {
                                min: 11,
                                max: 11,
                                message: 'Cell Number must be a 11 digits ( 1 + area code + number) with no spaces'
                            },
                            regexp: {
                                regexp: /^[0-9]+$/,
                                message: 'Cell Number can only be numbers'
                            },
                        }
                    },
                    email_address: {
                        validators: {
                            notEmpty: {
                                message: 'Please enter an e-mail'
                            },
                            emailAddress: {
                                message: 'The email address is not a valid'
                            }
                        }
                    }
                }
            })
            .on('success.form.bv', function (e) {
                // Prevent form submission
                e.preventDefault();

                // Get the form instance
                var $form = $(e.target);

                // Get the BootstrapValidator instance
                var bv = $form.data('bootstrapValidator');

                // Use Ajax to submit form data
                var url = 'https://script.google.com/macros/s/AKfycbwcYgaF2tk_-k1nt436LNUBCRBd4YzBXKsC4a2_EiPePquW_Xg/exec';
                var arrayForm = makeArray();
                var redirectUrl = setURI(arrayForm);
                // show the loading
                $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
                var jqxhr = $.post(url, $form.serialize(), function (data) {
                        console.log("Success! Data: " + data.statusText);
                        $(location).attr('href', redirectUrl);
                    })
                    .fail(function (data) {
                        console.warn("Error! Data: " + data.statusText);
                        // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                        if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                            //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                            $(location).attr('href', redirectUrl);
                        }
                    });
            });
    });

    $('.form-control[name="cell_number"]').on("keypress keyup blur",function (event) {
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });

    function getWard() {
        var url = location.href.split('&');
        var urlLength = url.length;
        var wardNumber = url[urlLength - 1].split('=');
        return wardNumber[1];
    }

    function getAddress() {
        var url = location.href.split('&');
        var address = url[0].split('=');
        return address[1];
    }

    function setURI(inputArray) {
        var url = location.origin + '/check/';
        return url;
    }

    function setCandidates() {
        switch ( getWard() ) {
            case '1':
                $('#candidates_go_here').append(candidateAppender('ward01'));
                break;
            case '2':
                $('#candidates_go_here').append(candidateAppender('ward02'));
                break;
            case '3':
                $('#candidates_go_here').append(candidateAppender('ward03'));
                break;
            case '4':
                $('#candidates_go_here').append(candidateAppender('ward04'));
                break;
            case '5':
                $('#candidates_go_here').append(candidateAppender('ward05'));
                break;
            case '6':
                $('#candidates_go_here').append(candidateAppender('ward06'));
                break;
            case '7':
                $('#candidates_go_here').append(candidateAppender('ward07'));
                break;
            case '8':
                $('#candidates_go_here').append(candidateAppender('ward08'));
                break;
            case '9':
                $('#candidates_go_here').append(candidateAppender('ward09'));
                break;
            case '10':
                $('#candidates_go_here').append(candidateAppender('ward10'));
                break;
            case '11':
                $('#candidates_go_here').append(candidateAppender('ward11'));
                break;
            case '12':
                $('#candidates_go_here').append(candidateAppender('ward12'));
                break;
            case '13':
                $('#candidates_go_here').append(candidateAppender('ward13'));
                break;
            case '14':
                $('#candidates_go_here').append(candidateAppender('ward14'));
                break;
        }
    }

    $('.container').prepend('<h1>LYAC Election: Ward ' + getWard() + ' Ballot</h1><hr>');
    setCandidates();


    function makeArray() {
        var inputArray = [];
        if (checkRadio() === true) {
            $('#address').val(getAddress());
            $('#ward').val(getWard());

            $('input[type="text"], input[type="number"], input[type="radio"]:checked').each(function () {
                inputArray.push($(this).val());
            });
            if (document.getElementById('email_opt').checked) {
                inputArray.push('yes');
            } else {
                inputArray.push('no');
            }
            inputArray.push("" + createVerifyCode());
            var temp = createArrayFromURI()
            for (i in temp) {
                inputArray.push(temp[i]);
            }
            return inputArray;
        }
        else if (checkRadio() === false) {
            e.preventDefault();
            $('#vote-modal').modal('show');
        }
    }

    function createVerifyCode() {
        var code = Math.round(Math.random() * 10000);
        return code;
    }

    function createArrayFromURI() {
        var url = location.href.split('?');
        var keyPair = url[1].split('&');
        var dataArray = [];
        for (i in keyPair) {
            var temp = keyPair[i].split('=');
            dataArray.push(temp[1]);
        }
        return dataArray;
    }

})();
