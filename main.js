var balance = 400.0;
  
      function get_balance() {
        document.getElementById('answer').value = 'ბალანსი შეადგენს: ' + balance
      }
  
      function make_withdrawal() {
          var withdrawal = document.getElementById('answer').value;
          if (isNaN(withdrawal) || withdrawal === '') {
              make_withdrawal();
          } else {
              balance -= withdrawal;
          }
      }

      function put_in() {
        var putIn = Number(document.getElementById('answer').value);
              balance += putIn;
      }