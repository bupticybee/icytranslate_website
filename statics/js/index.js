angular.module("translate-app",[])
    .controller('TranslateController',function($scope,$http) {
        this.input_text = '';
        this.output_text = '';
        this.requesting = false;
        this.try_to_request = false;
        this.immediate_translate = true;
        var ts = this;
        this.reverse_immediate = function(){
            console.log('doing...');
            ts.immediate_translate = !ts.immediate_translate;
        }
        this.input_change = function() {
            this.try_to_request = this.input_text;
            if (this.immediate_translate && ! this.requesting){
                this.translate()
            }
        }
        this.translate = function(){
            var request_text = this.try_to_request;
            this.try_to_request = false;
            if (request_text == false){
                return
            }
            this.output_text = this.output_text + '...';
            data = {'segment':request_text};          
            $http.post('/translate/segment',JSON.stringify(data)).then(function (data){
                ts.requesting = false;
                ts.output_text = data.data['translate'];
            },function errfun(e){
                ts.output_text = "err during api";
                ts.requesting = false;
                console.log('error during api');
                console.log(e);
            })
        }
    }
)