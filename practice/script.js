let arry = JSON.parse(localStorage.getItem("formItem"))
let dataValue = false
function getdata() {
    // debugger
    let data = {
        firstname: document.getElementById("firstname").value,
        email: document.getElementById("email").value,
        drop_down: document.getElementById("drop_down").value,
        gender: radioButton(),
        checkbox: checkBox()
    }
    if (dataValue) {
        let upvalue = arry.map((currelm, index) => {
            if (index === vardata) {
                return data
            }
            return currelm
        })
        arry = upvalue
        formData()
        dataValue = false
    } else {
        arry.push(data)
        formData()
    }
    clear()
    localStorage.setItem("formItem", JSON.stringify(arry))
}
function clear() {
    document.getElementById("firstname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("drop_down").value = ""
    document.getElementById("male").checked = false
    document.getElementById("female").checked = false
    document.getElementById("checkbox").checked = false
    document.getElementById("checkbox1").checked = false
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
    }).join("")
}
function deleteData(data1) {
    let deleted = arry.filter((currelm, index) => {
        // console.log(currelm)
        return index !== data1
    })
    arry = deleted
    localStorage.setItem("formItem", JSON.stringify(deleted))
    formData()
}
function updateData(data2) {
    let update = arry.find((currelm, index) => {
        return index == data2
    })
    document.getElementById("firstname").value = update.firstname
    document.getElementById("email").value = update.email
    document.getElementById("drop_down").value = update.drop_down

    dataValue = true;
    vardata = data2
    // checkbox
    if (update.checkbox.includes(document.getElementById("checkbox").value)) {
        document.getElementById("checkbox").checked = true
    }
    if (update.checkbox.includes(document.getElementById("checkbox1").value)) {
        document.getElementById("checkbox1").checked = true
    }

    // radio button
    if (document.getElementById("male").value === update.gender) {
        document.getElementById("male").checked = true
    } else if (document.getElementById("female").value = update.gender) {
        document.getElementById("female").checked = true
    }
}

// radioButton
function radioButton() {
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    empty = ""

    if (male.checked === true) {
        empty = document.getElementById("male").value
    } else if (female.checked === true) {
        empty = document.getElementById("female").value
    }
    console.log(empty)
    return empty
}

// checkBox

function checkBox() {
    let check = document.getElementById("checkbox")
    let check1 = document.getElementById("checkbox1")
    let empty = ""

    if (check.checked === true) {
        empty += document.getElementById("checkbox").value
    }
    if (check1.checked === true) {
        empty += document.getElementById("checkbox1").value
    }
    return empty
}
function search() {
    let searchData = document.getElementById("searchData").value
    let dbldata = JSON.parse(localStorage.getItem("formItem"))
    if (!searchData) {
        arry = dbldata
        return formData()
    }
    let search = arry.filter((currelm) => {
        return currelm.email == searchData
    })
    arry = search
    formData()
}

if (arry == null) {
    arry = []
}
if (arry.length > 0) {
    formData()
}
