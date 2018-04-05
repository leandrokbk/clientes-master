
//jQuery wrapper
jQuery(document).ready(function(){

var loadCostumersError  = function(){
    console.log('fail');
};
var loadCostumerSuccess = function(costumersList){
    //console.table(costumersList);
    //$.each(costumersList,function(index,cliente){
        //console.log(index,cliente.nome);
        var source =($('#line').html());
        var template = Handlebars.compile(source);
        var lines = template({
            clientes:costumersList
        });
        console.log(lines);
        $('table tbody').html(lines);
    };


var loadCostumers = function(){
    console.log("carregando clientes...");
    $.ajax({
        url:'http://www.mocky.io/v2/5a8629813100000f002531f4',
        dataType:'jsonp',
        error: loadCostumersError,
        success:loadCostumerSuccess
    });

}();




});