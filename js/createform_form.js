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
});

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
function addInput(select_val, input_id, tr) {
    var obj = document.createElement('div');
    var obj3 = document.createElement('div');
    var e = document.getElementById(select_val);
    var strUser = e.options[e.selectedIndex].value; // Get the value from an option (form element)
    if (strUser === '0' || strUser === '3') {
        var obj2 = document.getElementById(input_id + '_child');
        if (obj2 == null) {  // Avoid duplication
            // Add input in question setting page
            obj.innerHTML = document.getElementById('addInput').innerHTML
                .replace(/{arrayInputChild}/g, input_id + '_child') // g for any
                .replace(/{tr}/g, tr); // g for any
            document.getElementById(input_id).appendChild(obj);
             // Add input in Confirmation page
            obj3.innerHTML = document.getElementById('addInput2').innerHTML
                .replace(/{arrayInputChild_check}/g, input_id + '_child_check') // g for any
                .replace(/{tr_check}/g, tr + '_check'); // g for any
            document.getElementById(input_id + '_check').appendChild(obj3);
            // Animation
            $('#' + input_id + '_child').animate({ opacity: '0.5' });
            $('#' + input_id + '_child_check').animate({ opacity: '0.5' });
            $('#' + input_id + '_child').animate({ opacity: '1' });
            $('#' + input_id + '_child_check').animate({ opacity: '1' });
        }
    } else {
        if (document.getElementById(input_id + '_child') != null) {
            document.getElementById(input_id + '_child').remove();
            document.getElementById(input_id + '_child_check').remove();
        }
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

    // Old method
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
        let i = getRandomString(5)
        var htmlString = $('#rowTemplate').html()
            .replace(/{arraySelectID}/g, 'arraySelect' + i)
            .replace(/{arrayInputID}/g, 'arrayInput' + i)
            .replace(/{n}/g, 'textarea' + i)
            .replace(/{m}/g, '2textarea' + i)
            .replace(/{newRowID}/g, 'tr' + i);
            // console.log(i);
        $tableBody.append(htmlString);
        var htmlString2 = $('#rowTemplate2').html()
            .replace(/{arraySelectID_check}/g, 'arraySelect' + i + '_check')
            .replace(/{arrayInputID_check}/g, 'arrayInput' + i + '_check')
            .replace(/{n_check}/g, 'textarea' + i + '_check')
            .replace(/{m_check}/g, '2textarea' + i + '_check')
            .replace(/{newRowID_check}/g, 'tr' + i + '_check');
            // console.log(i);
        $tableBody2.append(htmlString2);
        // Animation
        $('#tr' + i).animate({ opacity: '0.1' });
        $('#tr' + i).animate({ opacity: '1' });

        // Old method
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

    var $targetDelRow;
    $tableBody.on('click', '.recipe-table__del-row-btn', function (e) {

        // Del row
        var $el = $(e.currentTarget);
        $targetDelRow = $el.closest('tr');

        // Old method 2
        // var $el = $(e.currentTarget);
        // var $row = $el.closest('tr');
        // console.log($row[0].id);
        // $('#' + $row[0].id + '_check').remove();
        // $row.remove();

        // Old method
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
    $(document).on('click', '.recipe-table__del-row-btn2', function (){
        $targetDelRow.remove();
        $('#' + $targetDelRow[0].id + '_check').remove();
    });
    

    Sortable.create(
        $tableBody[0],
        {
            animation: 150,
            scroll: true,
            handle: '.drag-handler',
            onEnd: function () {
                console.log('tableBody changed');
                updateCheckTableBody($tableBody[0]);
            }
        }
    );

    // var trCountForIndexing = $tableBody[0].getElementsByTagName('tr').length;
    // var trForIndexing = $tableBody[0].getElementsByTagName('tr');
    // trForIndexing[0].
});

//
//
// Update Confirmation page tableBody simutaneously
//
//
function updateCheckTableBody(thisTableBody) { // !!!!Temporary approach: modify the table instead of making rows up or down
    // console.log(thisTableBody.getElementsByTagName("tr").length);

    let tr = thisTableBody.getElementsByTagName('tr');
    let trCheck = document.getElementById('recipeTableBody2').getElementsByTagName('tr');

    let trCount = thisTableBody.getElementsByTagName('tr').length;
    let trCountCheck = document.getElementById('recipeTableBody2').getElementsByTagName('tr').length;

    if (trCount == trCountCheck) {
        for (let i = 0; i < trCount; i++ ) {
            // tr
            trCheck[i].id = tr[i].id + '_check';
            // select
            trCheck[i].getElementsByTagName('span')[0].getElementsByTagName('select')[0].id = tr[i].getElementsByTagName('span')[1].getElementsByTagName('select')[0].id + '_check';
            trCheck[i].getElementsByTagName('span')[0].getElementsByTagName('select')[0].value = tr[i].getElementsByTagName('span')[1].getElementsByTagName('select')[0].value;
            // textarea
            trCheck[i].getElementsByTagName('span')[1].getElementsByTagName('textarea')[0].id = tr[i].getElementsByTagName('span')[2].getElementsByTagName('textarea')[0].id + '_check';
            trCheck[i].getElementsByTagName('span')[1].getElementsByTagName('textarea')[0].value = tr[i].getElementsByTagName('span')[2].getElementsByTagName('textarea')[0].value;
            // textarea
            trCheck[i].getElementsByTagName('span')[2].getElementsByTagName('textarea')[0].id = tr[i].getElementsByTagName('span')[3].getElementsByTagName('textarea')[0].id + '_check';
            trCheck[i].getElementsByTagName('span')[2].getElementsByTagName('textarea')[0].value = tr[i].getElementsByTagName('span')[3].getElementsByTagName('textarea')[0].value;
            // arrayInput wrapper
            trCheck[i].getElementsByTagName('span')[3].getElementsByTagName('div')[0].id = tr[i].getElementsByTagName('span')[4].getElementsByTagName('div')[0].id + '_check';
            // arrayInput itself
            if (tr[i].getElementsByTagName('span')[4].getElementsByTagName('div')[0].getElementsByTagName('input')[0] != null) {
                if (trCheck[i].getElementsByTagName('span')[3].getElementsByTagName('div')[0].getElementsByTagName('input')[0] == null) {
                    var obj4 = document.createElement('div');
                    // Add input in Confirmation page
                    obj4.innerHTML = document.getElementById('addInput2').innerHTML
                        .replace(/{arrayInputChild}/g, tr[i].getElementsByTagName('span')[4].getElementsByTagName('div')[0].id + '_child_check'); // g for any
                    document.getElementById(tr[i].getElementsByTagName('span')[4].getElementsByTagName('div')[0].id + '_check').appendChild(obj4);
                }
                trCheck[i].getElementsByTagName('span')[3].getElementsByTagName('div')[0].getElementsByTagName('input')[0].id = tr[i].getElementsByTagName('span')[4].getElementsByTagName('div')[0].getElementsByTagName('input')[0].id + '_check';
                trCheck[i].getElementsByTagName('span')[3].getElementsByTagName('div')[0].getElementsByTagName('input')[0].value = tr[i].getElementsByTagName('span')[4].getElementsByTagName('div')[0].getElementsByTagName('input')[0].value;
            } else if (tr[i].getElementsByTagName('span')[4].getElementsByTagName('div')[0].getElementsByTagName('input')[0] == null) {
                if (trCheck[i].getElementsByTagName('span')[3].getElementsByTagName('div')[0].getElementsByTagName('input')[0] != null) {
                    trCheck[i].getElementsByTagName('span')[3].getElementsByTagName('div')[0].getElementsByTagName('input')[0].remove();
                }
            }
        }

    } else {
        console.log('trCount does not match trCountCheck');
        
    }
}

// 
// 
// Get form data and show on "Confirmation" page
// 
// 
function updateConfirmationPgFields(thisObj) {
    // console.log(thisObj.value);
    // console.log(thisObj.id);
    // console.log(document.getElementById(thisObj.id + '_check').value);
    document.getElementById(thisObj.id + '_check').value = thisObj.value;
}
function updateConfirmationPgCheckboxes(thisObj) {
    // console.log(thisObj.checked);
    // console.log(document.getElementById(thisObj.id + '_check').checked);
    if (thisObj.checked == true){
        document.getElementById(thisObj.id + '_check').checked = true;
    } else {
        document.getElementById(thisObj.id + '_check').checked = false;
    }
}
function updateConfirmationPgFileInputs(thisObj) {
    // console.log(thisObj.files[0].name);
    document.getElementById(thisObj.id + '_check').value = thisObj.files[0].name;
}
// $('input[type=file]').change(function () {
//     console.log(this.files[0].mozFullPath);
// });

//
//
// focus on fields
//
//
// var id = null;
// function autoWidth(thisObj) {
//     var siblings = document.getElementsByClassName(thisObj.closest('tr').id).length;
//     for (let i = 0; i < siblings; i++){
//         if (document.getElementsByClassName(thisObj.closest('tr').id)[i].id != thisObj.id) {
//             var obj = document.getElementsByClassName(thisObj.closest('tr').id)[i].closest('td');
//             $(obj).animate({ width: '5vw' });
//         } else {
//             var obj2 = thisObj.closest('td');
//             $(obj2).animate({ width: '30vw' });
//         }
//     }
// }