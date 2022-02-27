function formSwitch() {
    var allergyDetailBox = document.getElementById("allergyDetailBox");

    check = document.getElementsByClassName('js-check');

    if (check[0].checked) {
        allergyDetailBox.style.display ="none";
    }else {
        allergyDetailBox.style.display ="block";
    }
    window.addEventListener('load', formSwitch());
}

function checkInfo(){
    var inputbox = document.getElementById("input-box");
    var submitButton = document.getElementById("submitButton");
    var buttonBox = document.getElementById("buttonBox");
    const workArea = document.getElementById("checkDisplayBox");

    var tel1 = document.getElementsByName("entry.1307713836")[0].value;
    var tel2 = document.getElementsByName("entry.168716669")[0].value;
    var tel3 = document.getElementsByName("entry.1431886975")[0].value;
    var allergy = document.getElementsByName("entry.1600351969")[0].value;
    var name1 = document.getElementsByName("entry.1038520568")[0].value;
    var name2 = document.getElementsByName("entry.758212106")[0].value;
    var msg = document.getElementsByName("entry.1799748393")[0].value;

    if (name1 == "") {
        alert('お名前が未入力です')
    } else if (name2 == "") {
        alert('お名前が未入力です')
    } else if (tel1 == "") {
        alert('お電話番号が未入力です')
    } else if (tel2 == "") {
        alert('お電話番号が未入力です')
    } else if (tel3 == "") {
        alert('お電話番号が未入力です')
    } else {
        workArea.innerHTML = `
            <div id="checkDisplay" class="wrapper">
                <span>お名前</span>
                <p style="padding-left: 10px;">${name1} ${name2}</p>
                <span>お電話番号</span>
                <p style="padding-left: 10px;">${tel1} - ${tel2} - ${tel3}</p>
                <span>アレルギー</span>
                <p style="padding-left: 10px;">${allergy}</p>
                <span>お祝いメッセージ</span>
                <p style="padding-left: 10px;">${msg}</p>
                <div class="button">
                    <input class="button" id="back" type="button" value="戻る" onClick="backDisplay()">
                </div>
            </div>
            `;
            
        inputbox.style.display ="none";
        submitButton.style.display ="block";
        buttonBox.style.display ="block";

    }

}

function backDisplay() {
    var inputBox = document.getElementById("input-box");
    var submitButton = document.getElementById("submitButton");
    var checkDisplay = document.getElementById("checkDisplay");
    var buttonBox = document.getElementById("buttonBox");
    inputBox.style.display ="block";
    submitButton.style.display ="none";
    buttonBox.style.display ="none";
    checkDisplay.remove();
}