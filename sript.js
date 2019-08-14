let getSel = s => document.querySelector(s);
let getSelAll = s => document.querySelectorAll(s);
getSel('.container3').style.display = 'none'

getSel('.edit').onclick = function () {
    getSel('.editBlock').style.display = 'block'
    getSel('.styleBlock').style.display = 'none'
    getSel('#saveText').value = getSel('.container1').innerHTML
}

getSel('.style').onclick = function () {
    getSel('.editBlock').style.display = 'none'
    getSel('.styleBlock').style.display = 'block'
}

let f3 = document.forms['f3'];
f3.onclick = function () {
    getSel('.container1').style.fontSize = f3.tr.value
}

let f4 = document.forms['f4'];
f4.onchange = function () {
    getSel('.container1').style.fontFamily = f4.choose.value
}

let f6 = document.forms['f6'];
f6.tb.onclick = function () {
    getSel('.container1').classList.toggle('bold');
}
f6.it.onclick = function () {
    getSel('.container1').classList.toggle('italic');
}

getSel('.add1').onclick = function () {
    getSel('.big-box1').style.display = 'flex'
    getSel('.big-box2').style.display = 'none'
}

for (let i = 0; i < getSelAll('.box').length; i++) {
    getSelAll('.box')[i].onclick = function () {
        getSel('.container1').style.color = this.style.backgroundColor;
    }
}

getSel('.add2').onclick = function () {
    getSel('.big-box2').style.display = 'flex'
    getSel('.big-box1').style.display = 'none'

}
for (let i = 0; i < getSelAll('.Box').length; i++) {
    getSelAll('.Box')[i].onclick = function () {
        getSel('.container1').style.background = this.style.backgroundColor;
    }
}

getSel('.add').onclick = function () {
    getSel('.container1').style.display = 'none'
    getSel('.container2').style.display = 'none'
    getSel('.container3').style.display = 'flex'
    getSel('.table').style.display = 'none'
    getSel('.list').style.display = 'none'
    getSel('.buttons').style.display = 'none'
}

let f7 = document.forms['f7'];
f7.choose1.onclick = function () {
    getSel('.table').style.display = 'flex'
    getSel('.list').style.display = 'none'
}
f7.choose2.onclick = function () {
    getSel('.table').style.display = 'none'
    getSel('.list').style.display = 'flex'
}

getSel('.createList').onclick = function () {
    getSel('.container1').style.display = 'flex'
    getSel('.container2').style.display = 'flex'
    getSel('.container3').style.display = 'none'
}

getSel('.save').onclick = function () {
    getSel('.editBlock').style.display = 'none'
    getSel('.container1').innerHTML = getSel('#saveText').value;
    getSel('.buttons').style.display = 'flex'
}

getSel('.createTable').onclick = function () {
    let tr = getSel('.inputTr').value;
    let td = getSel('.inputTd').value;
    let wTd = getSel('.widthTD').value;
    let hTd = getSel('.heightTD').value;
    let wBD = getSel('.widthBD').value;
    let tBD = getSel('#typeBorder').value;
    let sBD = getSel('#styleBorder').value;

    let styleTd = `style="width:${wTd}px;height:${hTd}px;border:${wBD}px ${tBD} ${sBD}"`

    getSel('#saveText').value += `<table>`
    for (let i = 0; i < tr; i++) {
        getSel('#saveText').value += `<tr>`
        for (let j = 0; j < td; j++) {
            getSel('#saveText').value += `<td ${styleTd}>TD</td>`
        }
        getSel('#saveText').value += `</tr>`
    }
    getSel('#saveText').value += `</table>`
    getSel('.container1').style.display = 'block'
    getSel('.container2').style.display = 'block'
    getSel('.container3').style.display = 'none'

}


getSel('.createList').onclick = function () {
    let lc = getSel('.listCount').value;
    let tm = getSel('#typeMarks').value;

    getSel('#saveText').value += `<ul>`
    for (let j = 0; j < lc; j++) {
        getSel('#saveText').value += `<li style="list-style-type:${tm}">item</li>`;
    }
    getSel('#saveText').value += `</ul>`

    getSel('.container1').style.display = 'block'
    getSel('.container2').style.display = 'block'
    getSel('.container3').style.display = 'none'
}