angular.module('app')
  .directive('emailTemplatizer', function(){
    return{
      restrict: 'A',
      link: function(scope, element, attrs) {
        $('select').material_select();

        $('textarea').each(function () {
          this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
        }).on('input', function () {
          this.style.height = 'auto';
          this.style.height = (this.scrollHeight) + 'px';
        });
      }
    };

  }); // end directive
