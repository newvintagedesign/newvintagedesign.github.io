function sendMail(){
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
      'key': 'YOUR_KEY',
      'message': {
        'from_email': 'YOUR_SENDER@example.com',
        'to': [
          {
            'email': 'YOUR_RECEIVER@example.com',
            'name': 'YOUR_RECEIVER_NAME',
            'type': 'to'
          }
        ],
        'subject': 'title',
        'html': 'html can be used'
      }
    }
  });
}