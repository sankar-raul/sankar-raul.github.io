var output = document.getElementById('output');
function showO(ok) {

    output.value = output.value + ok.innerHTML;

    output1.value = output1.value + ok.value;
    // alert(output1.value);
    let check = eval(output1.value);
    preview.innerHTML = check;

}

function cl() {
    output.value = "";
    output1.value = "";
    preview.innerHTML = "";
}
function cl1() {

    output.value = output.value.substr(0, output.value.length -1);
    output1.value = output1.value.substr(0, output1.value.length -1);
    if (output1.value.length <= 0) {
        preview.innerHTML = "";
    } else {
        preview.innerHTML = eval(output1.value);
    }
}

function equalTo() {
    output.value = preview.innerHTML;
    output1.value = output.value;
    preview.innerHTML = "";

}