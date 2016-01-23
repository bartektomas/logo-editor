jQuery( document ).ready( function ( $ ) {
    $( document ).on( 'click', '.action-link', function ( event ) {
        $( '.action-link' ).removeClass( 'active' );
        $( this ).addClass( 'active' );

        $( '.mode-pane' ).each( function () {
            if ( !$( this ).hasClass( 'hide' ) ) {
                $( this ).addClass( 'hide' );
            }
        } );

        $( '#' + $( this ).data( 'target' ) ).removeClass( 'hide' );
    } ).on( 'click', '.droparea', function ( event ) {

        $( '#logo-file' ).trigger( 'click' );

    } ).on( 'change', '#logo-file', function ( event ) {

        var file = event.target.files[0];
        showUploadedFile( file );

    } ).on( 'click', '#delete-logo-file', function ( event ) {

        deleteUploadedFile()

    } );

    $( '.droparea' )[0].ondragover = function () {
        $( '.droparea' ).addClass( 'hover' );
        return false;
    };
    $( '.droparea' )[0].ondragleave = function () {
        $( '.droparea' ).removeClass( 'hover' );
        return false;
    };

    $( '.droparea' )[0].ondrop = function ( event ) {
        event.preventDefault();

        var file = event.dataTransfer.files[0];

        $( '.droparea' ).removeClass( 'hover' );
        showUploadedFile( file );
    };

    $( '#logo-font-family' ).fontsDropDown( {
        target: '#logo-text'
    } );

    $( '#logo-font-size' ).fontSizeDropDown( {
        target: '#logo-text'
    } );

    $( '#logo-font-color' ).ColorPicker( {
        onChange: function ( hsb, hex, rgb ) {
            $( '#logo-font-color' ).val( '#' + hex );
            $( '#logo-text' ).css( 'color', '#' + hex );
        }
    } );

    function showUploadedFile( file ) {
        var fReader = new FileReader();

        fReader.readAsDataURL( file );
        fReader.onload = function ( event ) {
            $( '#file-preview' ).animate( { opacity: 0 }, 'fast', function () {
                $( this ).attr( 'src', event.target.result ).animate( { opacity: 1 }, 'fast' );
                $( '#droparea-hint' ).empty().append( 'Для замены, кликните или перетащите новый файл' );
                $( '#delete-logo-file' ).removeClass( 'hide' );
            } );
        }
    }

    function deleteUploadedFile() {
        $( '#file-preview' ).animate( { opacity: 0 }, 'fast', function () {
            $( this ).attr( 'src', 'http://placehold.it/300x300?text=LOGO' ).animate( { opacity: 1 }, 'fast' );
            $( '#droparea-hint' ).empty().append( 'Перетащите файл сюда или кликните для выбора' );
            $( '#delete-logo-file' ).addClass( 'hide' );
        } );
    }
} );