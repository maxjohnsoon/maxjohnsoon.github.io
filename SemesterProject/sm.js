$("#eword").hide()
$("#sword").show()
$("#ecard").show()
$("#scard").hide()
$(document).ready(function(){
            $("#sword").click(function(){
                  $("#eword").show()
                  $("#sword").hide()
                  $("#scard").show()
                  $("#ecard").hide()
                });
            });

$(document).ready(function(){
            $("#eword").click(function(){
                  $("#sword").show()
                  $("#eword").hide()
                  $("#ecard").show()
                  $("#scard").hide()
                });
            });

$("#btnSubmit").click(function(){
        var current_grade = $('#current_grade').val();
        var goal_grade = $('#goal_grade').val();
        var final_worth = $('#final_worth').val();

        if ( !$('#current_grade').val() || !$('#goal_grade').val() || !$('#final_worth').val() ) {
            alert("Please enter a value into all three fields!");
          }
        else {
            var grade_required = Math.round( ( ( goal_grade - ( current_grade * ( ( 100 - final_worth ) / 100 ) ) ) / final_worth ) * 100 );

            alert("You will need to score at least " + grade_required +
                  "% on your final to get a " + goal_grade +
                  "% overall. Start studying!");
            }
        });
  
