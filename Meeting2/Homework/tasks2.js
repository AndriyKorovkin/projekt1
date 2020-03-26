function ask (message, confirmAnswer, declineAnswer){
  const responce = confirm(message);

  if(responce){
    confirmAnswer();
  }
    else {
      declineAnswer();
    }

}


ask (
  'Ты сделал домашнюю работу?',
  function() {console.log('Отлично!');
  },
  function() {console.log('О.... Тебя ждет бессонная ночь!');
  } 
);

ask (
  'А если проверят?',
  function() {console.log('Отлично!');
  },
  function() {console.log('Попандос!');
  } 
);