let arry = []
let dataValue = false;
let vardata = ""

function getdata() {
    let name = document.getElementById("firstname").value
    let email = document.getElementById("email").value
    let dropDown = document.getElementById("drop_down").value

    let update = document.getElementById("update");
    if (update.textContent.includes("update")) {
        update = document.getElementById("update").innerHTML = "submit";
    }
    let data = {
        firstname: name,
        email: email,
        gender: radioButton(),
        drop_down: dropDown,
        checkbox: checkbox(),
    }
    if (dataValue) {
        let upValue = arry.map((value, ind) => {
            if (ind === vardata) {
                return data
            }
            return value
        })
        arry = upValue
        formData();
        dataValue = false
    } else {
        arry.push(data);
        formData();
    }

    // if (!fname) {
    //     document.getElementById("fname").innerHTML = "Please Enter Valid Name"
    // }
    // if (!email) {
    //     document.getElementById("eml").innerHTML = "please Enter Valid Email"
    // }

    // if (!drdError) {
    //     document.getElementById("drdError").innerHTML = " please Select any one "
    // }
    // if (!checkbox) {
    //     document.getElementById("ckdError").innerHTML = " please Select any one "
    // }
    clear()
}

function clear() {
    document.getElementById("firstname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("male").checked = false
    document.getElementById("female").checked = false
    document.getElementById("drop_down").value = ""
    document.getElementById("checkbox").checked = false
    document.getElementById("checkbox1").checked = false
}

function formData() {
    document.getElementById("table_data").innerHTML = arry.map((user, index) => {
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
            </tr>`
        )
    }).join("");
}
function deleteData(data1) {
    let index = arry.filter((value, ind) => {
        return ind !== data1;
    })
    arry = index
    formData()
}

function updateData(data2) {
    let index = arry.find((value, ind) => {
        return ind === data2
    })
    document.getElementById("firstname").value = index.firstname
    document.getElementById("email").value = index.email
    document.getElementById("drop_down").value = index.drop_down

    dataValue = true;
    vardata = data2
    let update = document.getElementById("update");
    if (update.textContent.includes("submit")) {
        update = document.getElementById("update").innerHTML = "update"
    }
    // checkbox 
    if (index.checkbox.includes(document.getElementById("checkbox").value)) {
        document.getElementById("checkbox").checked = true
    }
    if (index.checkbox.includes(document.getElementById("checkbox1").value)) {
        document.getElementById("checkbox1").checked = true
    }
    // radioButton

    if (document.getElementById("male").value === index.gender) {
        return document.getElementById("male").checked = true;
    }
    else if (document.getElementById("female").value === index.gender) {
        return document.getElementById("female").checked = true;
    }
}

function radioButton() {
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let empty = " "
    if (male.checked == true) {
        empty = document.getElementById("male").value
    }
    else if (female.checked == true) {
        empty = document.getElementById("female").value
    }
    return empty;
}

function checkbox() {
    let checkbox = document.getElementById("checkbox")
    let checkbox1 = document.getElementById("checkbox1")
    let empty1 = " ";

    if (checkbox.checked == true) {
        empty1 += document.getElementById("checkbox").value + ", "
    }
    if (checkbox1.checked == true) {
        empty1 += document.getElementById("checkbox1").value
    }
    return empty1;
}

