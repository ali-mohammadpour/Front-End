(function($){
    $.fn.pink = function(){   // 'fn' be prototype jQuery eshare mikone ke baraye ezafe kardane ye object bayad soraghesh berim.
        // $('a').css('color', 'pink')
        this.css('color', 'pink')   // prototype objecte JS hast va luzumi nadare dar un az objecte jQuery estefade konim.
        return this   // alan methode pink() vurudish ro be khuruji montaghel mikone.
    }
}(jQuery))   // parametr dar zamane ejra.
