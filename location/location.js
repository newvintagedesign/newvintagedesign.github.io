var address = (function () {

    var wardData = null;

    function wardFinder() {

        $.ajax({
            url: '../app/js/wards.geojson',
            dataType: 'json',
            success: function load(d) {
                wardData = d;
            }
        });

        var defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(42.774235, -81.570954),
            new google.maps.LatLng(43.173135, -80.880189));

        var options = {
            types: [],
            componentRestrictions: {country: 'CA'},
            bounds: defaultBounds
        };

        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('auto-comp'), options);

        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();

            if (typeof place !== 'undefined' || place.geometry) {
                var polys = L.geoJson(wardData);
                var pt = new Array();
                pt[1] = place.geometry.location.lat();
                pt[0] = place.geometry.location.lng();
                var layer = leafletPip.pointInLayer(pt, polys, true);
                if (layer.length > 0) {
                    ward = layer[0].feature.properties.WARDS;
                    switch (ward) {
                        case '1':
                            return 1;
                            break;
                        case '2':
                            return 2;
                            break;
                        case '3':
                            return 3;
                            break;
                        case '4':
                            return 4;
                            break;
                        case '5':
                            return 5;
                            break;
                        case '6':
                            return 6;
                            break;
                        case '7':
                            return 7;
                            break;
                        case '8':
                            return 8;
                            break;
                        case '9':
                            return 9;
                            break;
                        case '10':
                            return 10;
                            break;
                        case '11':
                            return 11;
                            break;
                        case '12':
                            return 12;
                            break;
                        case '13':
                            return 13;
                            break;
                        case '14':
                            return 14;
                            break;
                        default:
                            return undefined;
                            break;
                    }
                }
            }
        });
    }
    var ward = wardFinder();

    $('#vote').on('click', function() {
        var value = $('#auto-comp').val();
        if(value.length !== 0) {
            var addressArray = splitByComma(value);
            if(addressArray.length === 4 || addressArray.length === 5 ) {
               var address = spaceToUnderscore(addressArray);
                createURI(address);
            } else {
                $('#vote-modal').modal('show');
            }
        } else {
            $('#vote-modal').modal('show');
        }
    });

    function splitByComma(value) {
        return value.split(',');
    }

    function spaceToUnderscore(addressArray) {
        for(i in addressArray){
            var spaces = addressArray[i];
            var underscores = spaces.split(' ').join('_');
            addressArray[i] = underscores;
        }
        return addressArray.join().split(',').join('');
    }

    function createURI(address) {
        if(ward === undefined) {
            $('#vote-modal').modal('show');
        }
        else if(ward !== null) {
            var url = location.origin + '/vote/?address=' + address + '&ward=' + ward;
            window.location = url;
        }
    }

})();
