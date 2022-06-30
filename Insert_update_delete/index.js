let arry = JSON.parse(localStorage.getItem("formItem"));
let dataValue = false;
let vardata = '';

function getdata() {
    let firstname = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;
    let dropDown = document.getElementById('drop_down').value;

    const genvalue = radioButton();
    const ckdBox = checkbox();
    let data = {
        firstname: firstname,
        email: email,
        gender: genvalue,
        drop_down: dropDown,
        checkbox: ckdBox,
    };
    // validation
    let fname = document.getElementById('firstname').value;
    let emailvalue = document.getElementById('email').value;
    let drdDown = document.getElementById('drop_down').value;
    let check = document.getElementById('checkbox');
    let check1 = document.getElementById('checkbox1');
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!fname) {
        document.getElementById('fname').innerHTML = '** Please Enter Name';
    } else {
        document.getElementById('fname').innerHTML = '';
    }
    if (!emailvalue) {
        document.getElementById('eml').innerHTML = '** Please Enter Email';
    } else if (!emailvalue.match(mailformat)) {
        document.getElementById('eml').innerHTML = 'invalid E-mail';
    } else {
        document.getElementById('eml').innerHTML = '';
    }
    if (!drdDown) {
        document.getElementById('drdError').innerHTML = '** Please select any one';
    } else {
        document.getElementById('drdError').innerHTML = '';
    }
    if (male.checked === false && female.checked === false) {
        document.getElementById('genderval').innerHTML = '** Please select any one';
    } else {
        document.getElementById('genderval').innerHTML = '';
    }
    if (check.checked === false && check1.checked === false) {
        document.getElementById('ckdError').innerHTML = '** Please select any one';
    } else {
        document.getElementById('ckdError').innerHTML = '';
    }
    if (
        fname && emailvalue && drdDown && (male.checked === true || female.checked === true) && (check.checked === true || check1.checked === true) &&
        emailvalue.match(mailformat)
    ) {
        if (dataValue) {
            let upValue = arry.map((value, ind) => {   // upvalue return array object
                if (ind === vardata) {
                    return data;
                }
                return value;
            });
            arry = upValue;
            formData();
            dataValue = false;

            let update = document.getElementById('update');
            if (update.textContent.includes('update')) {
                update = document.getElementById('update').innerHTML = 'submit';
            }
        } else {
            arry.push(data);
            formData();
        }
        clear();
        localStorage.setItem("formItem", JSON.stringify(arry))
    }
}

function clear() {
    document.getElementById('firstname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('drop_down').value = '';
    document.getElementById('checkbox').checked = false;
    document.getElementById('checkbox1').checked = false;
}

function formData() {
    document.getElementById('table_data').innerHTML = arry.map((user, index) => {
        return (
            `<tr>
            <td>${index + 1}</td>
            <td>${user.firstname}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.drop_down}</td>
            <td>${user.checkbox}</td>
            <td>
            <button onclick=deleteData(${index})>Delete</button>
            <button onclick=updateData(${index})>Update</button>
            </td>
        </tr>`)
    }).join('');
}

function deleteData(data1) {
    let index = arry.filter((value, ind) => {
        return ind !== data1;
    });
    arry = index
    localStorage.setItem("formItem", JSON.stringify(index))
    formData();
}

function updateData(data2) { // index return type object
    let index = arry.find((value, ind) => {
        return ind === data2;
    });
    document.getElementById('firstname').value = index.firstname;
    document.getElementById('email').value = index.email;
    document.getElementById('drop_down').value = index.drop_down;

    dataValue = true;
    vardata = data2;
    let update = document.getElementById('update');
    if (update.textContent.includes('submit')) {
        update = document.getElementById('update').innerHTML = 'update';
    }
    // *********** checkbox **************
    if (index.checkbox.includes(document.getElementById('checkbox').value)) {
        document.getElementById('checkbox').checked = true;
    }
    if (index.checkbox.includes(document.getElementById('checkbox1').value)) {
        document.getElementById('checkbox1').checked = true;
    }
    //*********** radioButton ***********

    if (document.getElementById('male').value === index.gender) {
        document.getElementById('male').checked = true
    } else if (document.getElementById('female').value === index.gender) {
        document.getElementById('female').checked = true
    }
}

function radioButton() {
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let empty = ' ';
    if (male.checked === true) {
        empty = document.getElementById('male').value;
    } else if (female.checked === true) {
        empty = document.getElementById('female').value;
    }
    return empty;
}

function checkbox() {
    let checkbox = document.getElementById('checkbox');
    let checkbox1 = document.getElementById('checkbox1');
    let empty1 = ' ';

    if (checkbox.checked === true) {
        empty1 += document.getElementById('checkbox').value + ', ';
    }
    if (checkbox1.checked === true) {
        empty1 += document.getElementById('checkbox1').value;
    }
    return empty1;
}
if (arry == null) {
    arry = []
}
if (arry.length > 0) {
    formData();
}

function search() {
    let searchData = document.getElementById("searchData").value  // input box value 
    let dblarray = JSON.parse(localStorage.getItem("formItem"));
    if (!searchData) {
        arry = dblarray;
        return formData();
    }
    let search = arry.filter((value) => {
        return (value.email == searchData)
    })
    arry = search
    formData()
}

