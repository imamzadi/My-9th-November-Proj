
// // app.js

document.addEventListener('DOMContentLoaded', function() {
      // Form submission
      const form = document.querySelector("form");
  
      form.addEventListener("submit", function(event) {
          let isValid = true;
  
          // Validate Name
          const name = document.querySelector("#name").value;
          if (name.trim() === "") {
              alert("Name is required");
              isValid = false;
          }
  
          // Validate Email
          const email = document.querySelector("#email").value;
          const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if (!email.match(emailRegex)) {
              alert("Please enter a valid email address.");
              isValid = false;
          }
  
          // Validate Message
          const message = document.querySelector("#message").value;
          if (message.trim() === "") {
              alert("Message cannot be empty");
              isValid = false;
          }
  
          // If the form is not valid, prevent submission
          if (!isValid) {
              event.preventDefault();
          }
      });
  });

//   read more/button section

   $(document).ready(function(){
    $(".invisible-content").hide();
    $(document).on('click',"#btn",function(){
        var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".box").find(".invisible-content").toggle();
        $(this).parent(".box").find(".visible-content").toggle();
    });
   });



  