// 
// 
// stepper
// 
// 
$(function () {
    $("#wizard").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        labels: {
            finish: "Submit",
            next: "Forward",
            previous: "Backward"
        }
    });
    $('.wizard > .steps li a').click(function () {
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
    // Custome Jquery Step Button
    $('.forward').click(function () {
        $("#wizard").steps('next');
    })
    $('.backward').click(function () {
        $("#wizard").steps('previous');
    })
    // // Select Dropdown
    // $('html').click(function() {
    //     $('.select .dropdown').hide(); 
    // });
    // $('.select').click(function(event){
    //     event.stopPropagation();
    // });
    // $('.select .select-control').click(function(){
    //     $(this).parent().next().toggle();
    // })    
    // $('.select .dropdown li').click(function(){
    //     $(this).parent().toggle();
    //     var text = $(this).attr('rel');
    //     $(this).parent().prev().find('div').text(text);
    // })
})







//
//
//disable
//
//
// function disable(select_val, input_id) {
//     var e = document.getElementById(select_val);
//     var strUser = e.options[e.selectedIndex].value;
//     if (strUser === "0" || strUser === "3") {
//         document.getElementById(input_id).disabled = false;
//     } else {
//         document.getElementById(input_id).value = document.getElementById(input_id).defaultValue;
//         document.getElementById(input_id).disabled = true;
//     }
// }
//
//
//addInput
//
//
function addInput(select_val, input_id) {
    var obj = document.createElement('div');
    var e = document.getElementById(select_val);
    var strUser = e.options[e.selectedIndex].value;
    if (strUser === '0' || strUser === '3') {
        var obj2 = document.getElementById(input_id + 'child');
        if (obj2 == null){  // Avoid duplication
            obj.innerHTML = document.getElementById('addInput').innerHTML
                .replace(/{arrayInputChild}/g, input_id + 'child'); // g for any
            document.getElementById(input_id).appendChild(obj);
            $('#' + input_id + 'child').animate({opacity: '0.5'});
            $('#' + input_id + 'child').animate({opacity: '1'});
        }
    } else {
        document.getElementById(input_id + 'child').remove();
    }
}




// 
// 
// question
// 
// 
$(document).ready(function () {

    var $tableBody = $('#recipeTableBody');
    let i = 9;

    $(document).on('click', '.recipe-table__add-row-btn', function (e) {
        var htmlString = $('#rowTemplate').html()
            .replace(/{arraySelectID}/g, 'arraySelect' + i)
            .replace(/{arrayInputID}/g, 'arrayInput' + i)
            .replace(/{newRowID}/g, 'newRow' + i);
        $tableBody.append(htmlString);
        $('#newRow' + i).animate({opacity: '0.1'});
        $('#newRow' + i).animate({opacity: '1'});

        // Increase height
        var cols = document.getElementsByClassName('form-content');
        for(x = 0; x < cols.length; x++) {
            cols[x].style.height = 'height: 1800px';
        }

        i++;
        return false;
    });

    $tableBody.on('click', '.recipe-table__del-row-btn', function (e) {
        var $el = $(e.currentTarget);
        var $row = $el.closest('tr');
        $row.remove();
        i--;
        return false;
    });

    Sortable.create(
        $tableBody[0],
        {
            animation: 150,
            scroll: true,
            handle: '.drag-handler',
            onEnd: function () {
                console.log('Type something here...');
            }
        }
    );
});