console.log('\'Allo \'Allo!');

$.ajax({
    url: "http://liga-fls.pl/home/index.php?option=com_joomleague&view=roster&p=84:liga-c1-wiosna-2015&tid=21:ubs&division=0&Itemid=564",
    success: function(data) {
        alert('xxx');
    },
    crossDomain: true,
    dataType: 'jsonp'
});