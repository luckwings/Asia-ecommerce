$(window).load(function(){$("#example1").glDatePicker({showAlways:!0}),$("#example2").glDatePicker({showAlways:!0,allowMonthSelect:!1,allowYearSelect:!1,prevArrow:"",nextArrow:"",selectedDate:new Date(2013,8,5),selectableDateRange:[{from:new Date(2013,8,1),to:new Date(2013,8,10)},{from:new Date(2013,8,19),to:new Date(2013,8,22)}],selectableDates:[{date:new Date(2013,8,24)},{date:new Date(2013,8,30)}]}),$("#example3").glDatePicker({showAlways:!0,cssName:"darkneon",selectedDate:new Date(2013,0,5),specialDates:[{date:new Date(2013,0,8),data:{message:"Meeting every day 8 of the month"},repeatMonth:!0},{date:new Date(0,0,1),data:{message:"Happy New Year!"},repeatYear:!0}],onClick:function(e,a,l,t){e.val(l.getFullYear()+" - "+l.getMonth()+" - "+l.getDate()),null!=t&&alert(t.message+"\n"+l)}}),$("#example4").glDatePicker({showAlways:!0,selectedDate:new Date(2013,8,5),dowOffset:3,selectableYears:[2012,2013,2014],selectableMonths:[8,11],selectableDOW:[1,4,6]});var example5=$("#example5").glDatePicker({showAlways:!0}).glDatePicker(!0);$("#example5-showAlways").change(function(){var showAlways=eval($(this).val());example5.options.showAlways=showAlways,showAlways?example5.show():example5.hide()}),$("#example5-cssName").change(function(){example5.options.cssName=$(this).val(),example5.render()}),$("#example5-selectableDOW").change(function(){example5.options.selectableDOW=eval($(this).val()),example5.render()}),$("#example5-dowOffset").change(function(){example5.options.dowOffset=eval($(this).val()),example5.render()}),$("#example5-dowNames").change(function(){example5.options.dowNames=eval($(this).val()),example5.render()}),$("#example5-monthNames").change(function(){example5.options.monthNames=eval($(this).val()),example5.render()})});