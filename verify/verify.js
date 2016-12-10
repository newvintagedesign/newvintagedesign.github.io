var verify = (function () {

    var url = location.href;
    var x = url.split('?');
    var y = x[1].split('&');
    var redirectUrl = location.origin + '/thanks/';
    var urlValues = [];
    var count = 0;

    for (i in y) {
        var temp = y[i].split('=');
        urlValues.push(temp[1]);
    }

    $('#candidate').append(urlValues[1].split('_').join(' '));

    $(':input').each(function () {
        $(this).val(urlValues[count++]);
    });

    $(document).ready(function () {
        $('#test-form').bootstrapValidator({})
            .on('success.form.bv', function (e) {
                // Prevent form submission
                e.preventDefault();

                // Get the form instance
                var $form = $(e.target);

                // Get the BootstrapValidator instance
                var bv = $form.data('bootstrapValidator');

                var url;

                if (urlValues[3] == 1) {
                    url = 'https://script.google.com/macros/s/AKfycbyJyRja21fpSfKlyL0HXmxsBbsm0MQv4kqZw4R1QcHz-OcB1aBu/exec';
                }
                else if (urlValues[3] == 2) {
                    url = 'https://script.google.com/macros/s/AKfycbyMQHRM-sm5gIQyB12JBUCU7qHsuWKNLV-PMyjG-j--9CbO14g/exec';
                }
                else if (urlValues[3] == 3) {
                    url = 'https://script.google.com/macros/s/AKfycbwdhY6n2wA14M5wLZsfmMo9DN8YxrZ2FoJ7Mow0wVkhICZ-iWs/exec';
                }
                else if (urlValues[3] == 4) {
                    url = 'https://script.google.com/macros/s/AKfycbyTFALpBAywysDa6UEpWTH8GJ-JYmyZRPiIpIl3hllYagurIIyB/exec';
                }
                else if (urlValues[3] == 5) {
                    url = 'https://script.google.com/macros/s/AKfycbxUEKgLHniO8f5Z-zeO3he-TzNIAahhl3LnAbmPy5yzd2j2giH0/exec';
                }
                else if (urlValues[3] == 6) {
                    url = 'https://script.google.com/macros/s/AKfycbxSk9skHr0HktbUdRzNC9CaIlYgL2TJQZ2obu8ctNPW1tb1Rpk/exec';
                }
                else if (urlValues[3] == 7) {
                    url = 'https://script.google.com/macros/s/AKfycbzyQH39kXNyfrIVwObV9ywEmGUrW2d3eWaHQKUFCsfl-_c7Y4IV/exec';
                }
                else if (urlValues[3] == 8) {
                    url = 'https://script.google.com/macros/s/AKfycbw4I7ArSA9YtDTPnE8qfhrjzQ3wKOUHoOfnMEye8VUnrSGB14Zi/exec';
                }
                else if (urlValues[3] == 9) {
                    url = 'https://script.google.com/macros/s/AKfycbzKQOadePmlfxRgwT7-HDJQEP60bEvq97u875Z1Ezy2czSfzD8b/exec';
                }
                else if (urlValues[3] == 10) {
                    url = 'https://script.google.com/macros/s/AKfycbwnrCQj7qJhxZSJ0h9vfXt9HrGRpHMnbwGD7CL9uyxcmSLcx_o/exec';
                }
                else if (urlValues[3] == 11) {
                    url = 'https://script.google.com/macros/s/AKfycbxPaOyOff29-xvnEvWWPej1odHqtMGS-x186yur1CkPU-35MRU/exec';
                }
                else if (urlValues[3] == 12) {
                    url = 'https://script.google.com/macros/s/AKfycbwLEQxWSUMkHsIcCSscWgkxRh7apo7A3QborBFYrqKNqu-XYaA/exec';
                }
                else if (urlValues[3] == 13) {
                    url = 'https://script.google.com/macros/s/AKfycbx812_nGs9CEKRw94OGC9un3XTRgw990cLH9dPsmrM_fQLqAIgR/exec';
                }
                else if (urlValues[3] == 14) {
                    url = 'https://script.google.com/macros/s/AKfycbwYwOz4WV8Qt_T3lYZdJS1h-0PyGPjW0IelJBDtvbPhMRtR5Aom/exec';
                }

                // show the loading
                // $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
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

})();
