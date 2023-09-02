(function($){
    $.fn.tooltip = function(options)
    {
        return this.each(function()
        {
            var settings = $.extend({
                color: "white",
                backgroundColor: "black"
            }, options)
            $(this).hover(function(){

                $(this).after('<div class="tt"><div class="triangle"></div><div class="tooltip">'+$(this).attr('title')+'</div></div>')
                $(this).next('.tt').show().css(
                    {
                    left: $(this).offset().left,
                    top: $(this).offset().top + 10
                    })

                $(this).next('.tt').find('.tooltip').css({color: settings.color, backgroundColor: settings.backgroundColor})
                $(this).attr('title', '')
            },
            function(){
                $(this).attr('title', $(this).next('.tt').find('.tooltip').text())
                $(this).next('.tt').remove()
            })
        })
    }
}(jQuery))
