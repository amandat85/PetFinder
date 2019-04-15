let isValid = true;

$(".chosen-select").chosen({
   disable_search: true, allow_single_deselect: true, disable_search_threshold: 10, width: "95%" 
})
// var config = {
//   '.chosen-select'           : {},
//   '.chosen-select'           : {disable_search:true},
//   '.chosen-select-deselect'  : {allow_single_deselect:true},
//   '.chosen-select-no-single' : {disable_search_threshold:10},
//   '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
// }
// for (var selector in config) {
//   	$(selector).chosen(config[selector]);
// }

$("#submitBtn").on("click", function(event) {
    event.preventDefault();
//FORM VALIDATION
function validateForm(){
  $(".form-control").each(function(){
    if($(this).val() === ""){
      isValid = false;
      console.log(this)
    }
  })
$(".chosen-select").each(function(){
  if($(this).val() === ""){
      isValid = false;
      console.log(this)
  }
})
}


validateForm();

// if()

//IF VALID
  //Get value of name and photo
  //Loop through chosen answers
  //Push answers into array in object, push photo and name into object

//POST TO JSON WITH $POST

//CLEAR USER INPUT ON SUBMIT

//COMPARE USER RESULTS TO JSON RESULTS

//MODAL  POP OF MATCH


//WRITE IN VANILLA JS
//REMEMBER TO LINK THIS FILE!!!!!!




  //   // Here we grab the form elements
  //   let newUsers= {
  //     customerName: $("#reserve-name").val().trim(),
  //     phoneNumber: $("#reserve-phone").val().trim(),
  //     customerEmail: $("#reserve-email").val().trim(),
  //     customerID: $("#reserve-unique-id").val().trim()
  //   };

  //   console.log(newUsers);

  //   // This line is the magic. It"s very similar to the standard ajax function we used.
  //   // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
  //   // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
  //   // depending on if a tables is available or not.

  //   $.post("/api/users", newUsers,
  //     function(data) {

  //       // If a table is available... tell user they are booked.
  //       // if (data) {
  //       //   alert("Yay! You are officially booked!");
  //       // }

  //       // If a table is available... tell user they on the waiting list.
  //       // else {
  //       //   alert("Sorry you are on the wait list");
  //       // }

  //       // Clear the form when submitting
  //       $("#reserve-name").val("");
  //       $("#reserve-phone").val("");
  //       $("#reserve-email").val("");
  //       $("#reserve-unique-id").val("");

  //     });

  });