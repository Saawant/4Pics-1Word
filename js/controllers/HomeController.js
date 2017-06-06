angular.module('4p1w').controller('HomeController', ['$window',function($window){
  var _self = this

  _self.currentQuestion = 0
  _self.lookup = {
    0 :'parents',
    1 :'sports',
    2 : 'usa',
    3 : 'present',
    4 : 'seasons'
  }
  var alpha = 'abcdefghijklmnopqrstuvwxyz'
  _self.wrong = ''
  _self.currentCorrect = ''


  _self.changeQuestion = function(){

    _self.currentQuestion = _self.currentQuestion + 1
    console.log(_self.currentQuestion);
    _self.generateOptions()
    _self.wrong = ''
    _self.currentCorrect = ''
  }

  _self.selectOption = function(option){
    if(_self.lookup[_self.currentQuestion].includes(option)){
      _self.currentCorrect = _self.currentCorrect + option
      if(_self.currentCorrect == _self.lookup[_self.currentQuestion] ){
        _self.changeQuestion()
      }
    }
    else{
      _self.wrong = _self.wrong + option
    }
  }


  _self.generateOptions = function(){
    var text = ''
    for( var i=0; i < _self.lookup[_self.currentQuestion].length; i++ ){
      var temptext = alpha.charAt(Math.floor(Math.random() * alpha.length));
      console.log(temptext);
      if(!_self.lookup[_self.currentQuestion].includes(temptext)){
        text = text + temptext
      }
      text += _self.lookup[_self.currentQuestion].charAt(i)
      console.log(text);
    }
    _self.currentOptions = text
  }
  _self.generateOptions()
}])
