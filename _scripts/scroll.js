$(function() { 

function ft_scroll(){

    document_height = $(document).height();
    scroll_now = $(window).scrollTop();
    window_height = $(window).height();
    
	max_scroll = document_height-window_height;

	scroll_percentage = scroll_now/(max_scroll/100);
    
    $('#loading').width(scroll_percentage + '%');

}



$(window).scroll(function() {
ft_scroll();
});

$(window).resize(function() {
ft_scroll();
});

});