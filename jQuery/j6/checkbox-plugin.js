(function(){
    $.fn.mychk = function()
    {
        return this.each(function()   // hanuz objecte jQuery nist.
        {
            $(this).click(function()
            {
                if(this.checked)   // ba objecte JSesh kar daram.
                {
                    $(this).after('<img class="mychk" src="chk.png">')
                    $('.mychk').click(function()
                    {
                        $(this).prev('input').attr('checked', false).show()
                        $(this).remove()
                    })
                    $(this).hide()
                }
            })
        })
    }
}(jQuery))
