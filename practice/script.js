let arry = []
let dataValue = false;
let vardata = ""
function getdata() {
    let name = document.getElementById("firstname").value
    let email = document.getElementById("email").value
    let drop_down = document.getElementById("drop_down").value

    let obj = {
        firstname: name,
        email: email,
        gender: radioButton(),
        drop_down: drop_down,
        checkbox: checkbox(),
    }
    if (dataValue) {
        let upValue = arry.map((value, ind) => {
            if (ind === vardata) {
                return obj
            }
            return value;
        })
        arry = upValue
        formData()
        dataValue = false
    } else {
        arry.push(obj)
        formData()
    }
    clear()
}

function formData() {
    document.getElementById("table_data").innerHTML = arry.map((user, index) => {
        return (
            `
            <tr>
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
            </tr>
            `
        )
    })
}
function deleteData(data1) {
    let index = arry.filter((value, ind) => {
        return ind !== data1
    })
    arry = index
    formData()
}
function updateData(data2) {
    let update = arry.find((value, ind) => {
        return ind === data2
    })
    document.getElementById("firstname").value = update.firstname
    document.getElementById("email").value = update.email
    dataValue = true
    vardata = data2;
    // checkbox
    if (update.checkbox.includes(document.getElementById("checkbox").value)) {
        document.getElementById("checkbox").checked = true
    }
    if (update.checkbox.includes(document.getElementById("checkbox1").value)) {
        document.getElementById("checkbox1").checked = true
    }
    // radioButton
    if (document.getElementById("male").value == update.gender) {
        document.getElementById("male").checked = true
    } else if (document.getElementById("female").value == update.gender) {
        document.getElementById("female").checked = true
    }
}
function clear() {
    document.getElementById("firstname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("male").checked = false
    document.getElementById("female").checked = false
    document.getElementById("checkbox").checked = false
    document.getElementById("checkbox1").checked = false
}

function radioButton() {
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let blank = ""

    if (male.checked == true) {
        blank = document.getElementById("male").value
    } else if (female.checked == true) {
        blank = document.getElementById("male").value
    }
    return blank
}

function checkbox() {
    let checkbox = document.getElementById("checkbox")
    let checkbox1 = document.getElementById("checkbox1")
    let blank = ""

    if (checkbox.checked == true) {
        blank += document.getElementById("checkbox").value
    }
    if (checkbox1.checked == true) {
        blank += document.getElementById("checkbox1").value
    }
    return blank;
}