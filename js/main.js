$(document).ready(function(){
	console.log('Loading Menu de los datos');
	var men = '<ul class="tree" id="tree">';
      var ext = '';
	$.getJSON('json/menu.json', function(dataJson) {
            $.each(dataJson.menu, function(index, val) {
             //alert(index);
             men += '<li>'+index.toUpperCase()+'</li>';
             men += '<ul>';
             $.each(val, function(index2, val2) {
                   ext = '<a href="'+val2.links+'" target="'+val2.targe+'" style="float:right"><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-new-window"></span></button></a>';
                   men += '<li><a class="item" data-title="'+val2.title+'" data-href="'+val2.links+'">'+val2.label+'</a>'+ext+'</li>';
             });
             men += '</ul>';

       });
      men += '</ul>';
      $('#mtree').html(men);
      loadProcesoItem();
      });
})

function loadProcesoItem(){
      $('.item').click(function() {
            var title = $(this).data('title');
            var url = $(this).data('href');
            $('#resultT').html('<h4><center>'+title+'</center></h4>');
            $('#resultD').load(url);
      });
}