( function ( $ ) {
    $.fn.fontsDropDown = function ( options ) {
        var settings = $.extend( { }, $.fn.fontsDropDown.defaults, options );

        return this.each( function () {
            var $select = $( this );

            $.each( settings.fonts, function ( index, font ) {
                var fontFamily = font.value.replace( /"/g, '\'' );
                var option = '<option value="' + fontFamily + '" style="font-family: ' + fontFamily + '">' + font.title + '</option>';
                $select.append( option );
            } );

            $select.on( 'change', function ( event ) {
                $( settings.target ).css( 'font-family', $( this ).val() );
            } );
        } );
    }

    $.fn.fontsDropDown.defaults = {
        fonts: [
            {
                value: '"Open Sans", sans-serif',
                title: 'Open Sans'
            },
            {
                value: '"Times New Roman", Times, serif',
                title: 'Times New Roman'
            },
            {
                value: 'Arial, Helvetica, sans-serif',
                title: 'Arial'
            },
            {
                value: 'Verdana, Geneva, sans-serif',
                title: 'Verdana'
            },
            {
                value: '"Courier New", Courier, monospace',
                title: 'Courier New'
            },
        ],
        target: 'input'
    }
}( jQuery ) );
