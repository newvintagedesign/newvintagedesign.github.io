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
                    url = 'https://script.google.com/macros/s/AKfycbx5j7MT3jhG0KOOo6a0J3ULVITV2qDdASZ23XK0gZK4HHXAVbN9/exec';
                }
                else if (urlValues[3] == 2) {
                    url = 'https://script.google.com/macros/s/AKfycbx2n2HDo6WO0jLiikG_hDjIJJ-DYaBzRYpxnEskyPBpzz1JsWBR/exec';
                }
                else if (urlValues[3] == 3) {
                    url = 'https://script.google.com/macros/s/AKfycbxT1gQWurFRUO07rTe0nEX0gmfWSTGmaVH7CmMeXt7uYFJWO1-C/exec';
                }
                else if (urlValues[3] == 4) {
                    url = 'https://script.google.com/macros/s/AKfycbyNhtRJ3nvqaq8UBN7PEMm7zk125jC27LU3gDzVSx5JPL4H550/exec';
                }
                else if (urlValues[3] == 5) {
                    url = 'https://script.google.com/macros/s/AKfycbwR2JwVd6arkh5VxP7BfTrpdYG4FLG6qYgFdJ029uuGGnjqYKtb/exec';
                }
                else if (urlValues[3] == 6) {
                    url = 'https://script.google.com/macros/s/AKfycbyPa-xPUjs7uLZMpWtgM25Ir0UXEzKH6Q69haR9cDf3ZkuICk0/exec';
                }
                else if (urlValues[3] == 7) {
                    url = 'https://script.google.com/macros/s/AKfycbwUuveMGvEAwEQZ5h4D7xt13mSWKaGNjdUnngi8myrHfihXDLfC/exec';
                }
                else if (urlValues[3] == 8) {
                    url = 'https://script.google.com/macros/s/AKfycbxb7f1c7j3Rw1IyQMpmyub05JQUS7VS3EmmHIH_d-T-LQvearQ/exec';
                }
                else if (urlValues[3] == 9) {
                    url = 'https://script.google.com/macros/s/AKfycbxfM7wabv82cE7CtdT5gpy1NWP5LCqviNU9lyziIFitxEXLWs8/exec';
                }
                else if (urlValues[3] == 10) {
                    url = 'https://script.google.com/macros/s/AKfycbzcWauWD39PjWBCzcLLCJ_prml06CGmHYem5lvroqJJw4bZOuY/exec';
                }
                else if (urlValues[3] == 11) {
                    url = 'https://script.google.com/macros/s/AKfycbyDiwYJ8kR7McNM1vaOMQAOQfw2oPvr8ze6fP9F4pj6Hj7zZiaB/exec';
                }
                else if (urlValues[3] == 12) {
                    url = 'https://script.google.com/macros/s/AKfycbzrWrDIAd9PQMFN1vhkzdIBZ5pb8-If_8_kRETjbPgqRhH9Fkil/exec';
                }
                else if (urlValues[3] == 13) {
                    url = 'https://script.google.com/macros/s/AKfycbzUECCVJunKbmRCpBd3Tz5Z3r4PqWhaoaqWjUXsx7v-t67H9H0-/exec';
                }
                else if (urlValues[3] == 14) {
                    url = 'https://script.google.com/macros/s/AKfycbyEKdUSv4phh0L8nUDhuQmVx5cdV1Yu2RAFEmQ5YlT-rQgNXRTA/exec';
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
