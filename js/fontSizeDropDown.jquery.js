( function ( $ ) {
    $.fn.fontSizeDropDown = function ( options ) {
        var settings = $.extend( { }, $.fn.fontSizeDropDown.defaults, options );

        return this.each( function () {
            var $select = $( this );

            for ( var i = settings.min; i <= settings.max; i++ ) {
                var $option = $( '<option value="' + i + settings.unit + '">' + i + settings.unit + '</option>' );

                if ( i === settings.default ) {
                    $option.prop( 'selected', true );
                }

                $select.append( $option );

                $select.on( 'change', function ( event ) {
                    $( settings.target ).css( 'font-size', $( this ).val() );
                } );
            }
        } );
    }

    $.fn.fontSizeDropDown.defaults = {
        min: 8,
        max: 72,
        default: 48,
        unit: 'px',
        target: 'input'
    }
}( jQuery ) );
