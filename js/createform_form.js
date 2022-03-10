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
//  disable
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
//  addInput
//
//
function addInput(select_val, input_id) {
    var obj = document.createElement('div');
    var e = document.getElementById(select_val);
    var strUser = e.options[e.selectedIndex].value;
    if (strUser === '0' || strUser === '3') {
        var obj2 = document.getElementById(input_id + 'child');
        if (obj2 == null) {  // Avoid duplication
            obj.innerHTML = document.getElementById('addInput').innerHTML
                .replace(/{arrayInputChild}/g, input_id + 'child'); // g for any
            document.getElementById(input_id).appendChild(obj);
            $('#' + input_id + 'child').animate({ opacity: '0.5' });
            $('#' + input_id + 'child').animate({ opacity: '1' });
        }
    } else {
        document.getElementById(input_id + 'child').remove();
    }
}




// 
// 
//  question
// 
// 
$(document).ready(function () {
    var $tableBody = $('#recipeTableBody');
    var $tableBody2 = $('#recipeTableBody2');
    var n = 16;
    var m = n + 1;

    // Mobile
    // var n = 160.5;
    // var h = 1800;
    // var h2 = 1850;
    
    // Desktop
    // var n2 = 220.5;
    // var h3 = 2700;
    // var h4 = 2750;

    function getRandomString(length) {
        var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
    //usage: getRandomString(20); // pass desired length of random string

    $(document).on('click', '.recipe-table__add-row-btn', function (e) {

        // Add row
        n++;
        let i = getRandomString(5)
        var htmlString = $('#rowTemplate').html()
            .replace(/{arraySelectID}/g, 'arraySelect' + i)
            .replace(/{arrayInputID}/g, 'arrayInput' + i)
            .replace(/{n}/g, 'b' + n)
            .replace(/{m}/g, 'b' + m)
            .replace(/{newRowID}/g, 'tr' + i);
        $tableBody.append(htmlString);
        var htmlString2 = $('#rowTemplate2').html()
            .replace(/{arraySelectID_check}/g, 'arraySelect' + i + '_check')
            .replace(/{arrayInputID_check}/g, 'arrayInput' + i + '_check')
            .replace(/{n}/g, 'b' + n)
            .replace(/{m}/g, 'b' + m)
            .replace(/{newRowID_check}/g, 'tr' + i + '_check');
        $tableBody2.append(htmlString2);
        $('#tr' + i).animate({ opacity: '0.1' });
        $('#tr' + i).animate({ opacity: '1' });

        // // If within specific width
        // $(function() {      
        //     let isMobile = window.matchMedia("only screen and (max-width: 1280px)").matches;
        //     if (isMobile) {
        //         // Increase height
        //         if (i >= 7) {
        //             var cols = document.getElementsByClassName('form-content');
        //             for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //                 cols[x].style.height = h3 + n2 + 'px';
        //             }
        //             h3 = h3 + n2;
        //             // var cols = document.getElementsByClassName('content');
        //             // for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //             //     cols[x].style.height = h4 + n2 + 'px';
        //             // }
        //             // h4 = h4 + n2;
        //         }
        //     } else {
        //         // Increase height
        //         if (i >= 7) {
        //             var cols = document.getElementsByClassName('form-content');
        //             for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //                 cols[x].style.height = h + n + 'px';
        //             }
        //             h = h + n;
        //             // var cols = document.getElementsByClassName('content');
        //             // for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //             //     cols[x].style.height = h2 + n + 'px';
        //             // }
        //             // h2 = h2 + n;
        //         }
        //     }
        //  });

        return false;
    });

    $tableBody.on('click', '.recipe-table__del-row-btn', function (e) {

        // Del row
        n--;
        var $el = $(e.currentTarget);

        // alert($el);
        // var $tr = $('#'+el+'_check');
        // $tr.remove();

        var $row = $el.closest('tr');
        $row.remove();

        // // If within specific width
        // $(function() {
        //     let isMobile = window.matchMedia("only screen and (max-width: 1280px)").matches;    
        //     if (isMobile) {
        //         // Decrease height
        //         if (i >= 6) { // If exceed the initial canvas height
        //             var cols = document.getElementsByClassName('form-content');
        //             for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //                 cols[x].style.height = h3 - n2 + 'px';
        //             }
        //             h3 = h3 - n2;
        //             // var cols = document.getElementsByClassName('content');
        //             // for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //             //     cols[x].style.height = h4 - n2 + 'px';
        //             // }
        //             // h4 = h4 - n2;
        //         }
        //     } else {
        //         // Decrease height
        //         if (i >= 6) { // If exceed the initial canvas height
        //             var cols = document.getElementsByClassName('form-content');
        //             for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //                 cols[x].style.height = h - n + 'px';
        //             }
        //             h = h - n;
        //             // var cols = document.getElementsByClassName('content');
        //             // for (x = 0; x < cols.length; x++) {  // All cols in the document will be looped
        //             //     cols[x].style.height = h2 - n + 'px';
        //             // }
        //             // h2 = h2 - n;
        //         }
        //     }
        // });

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






function updateConfirmPageFields() { 
        // 
        // 
        // Get form data and show on Confirm Form page
        // 
        // 
        var v = document.getElementById("v").value;
        var v2 = document.getElementById("v2").value;
        var v3 = document.getElementById("v3").value;
        var v4 = document.getElementById("v4").value;
        var v5 = document.getElementById("v5").value;
        var v6 = document.getElementById("v6").value;
        var v7 = document.getElementById("v7").value;
        var v8 = document.getElementById("v8").value;
        var v9 = document.getElementById("v9").value;
        var v10 = document.getElementById("v10").value;
        var v11 = document.getElementById("v11").value;
        var v12 = document.getElementById("v12").value;
        var v13 = document.getElementById("v13").value;
        var v14 = document.getElementById("v14").value;
        var v15 = document.getElementById("v15").value;
        var v16 = document.getElementById("v16").value;
        var v17 = document.getElementById("v17").value;

        document.getElementsById('c')[0].placeholder = v;
        document.getElementsById('c2')[0].placeholder = v2;
        document.getElementsById('c3')[0].placeholder = v3;
        document.getElementsById('c4')[0].placeholder = v4;
        document.getElementsById('c5')[0].placeholder = v5;
        document.getElementsById('c6')[0].placeholder = v6;
        document.getElementsById('c7')[0].placeholder = v7;
        document.getElementsById('c8')[0].placeholder = v8;
        document.getElementsById('c9')[0].placeholder = v9;
        document.getElementsById('c10')[0].placeholder = v10;
        document.getElementsById('c11')[0].placeholder = v11;
        document.getElementsById('c12')[0].placeholder = v12;
        document.getElementsById('c13')[0].placeholder = v13;
        document.getElementsById('c14')[0].placeholder = v14;
        document.getElementsById('c15')[0].placeholder = v15;
        document.getElementsById('c16')[0].placeholder = v16;
        document.getElementsById('c17')[0].placeholder = v17;
}