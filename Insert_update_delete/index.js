let arry = []
let dataValue = false;
let vardata = ""

function getdata() {

    let name = document.getElementById("firstname").value
    let email = document.getElementById("email").value
    let dropDown = document.getElementById("drop_down").value


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
        clear();
        dataValue = false
    }
    else {
        arry.push(data);

        formData();
        clear()
    }
}
function clear() {
    document.getElementById("firstname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("male").checked = false
    document.getElementById("female").checked = false
    document.getElementById("drop_down").value = ""
    document.getElementById("chechbox").checked = false
    document.getElementById("chechbox1").checked = false
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
    })
}
function deleteData(data1) {
    let data = document.getElementById("table_data")
    let index = arry.filter((value, ind) => {
        return ind !== data1;
    })

    arry = index
    formData()
}

function updateData(data2) {
    let data = document.getElementById("table_data")
    let index = arry.find((value, ind) => {
        return ind === data2
    })
    document.getElementById("firstname").value = index.firstname
    document.getElementById("email").value = index.email
    dataValue = true;
    vardata = data2

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
    let empty = " ";

    if (checkbox.checked == true) {
        empty = document.getElementById("checkbox").value
    }
    if (checkbox1.checked == true) {
        empty = document.getElementById("checkbox1").value
    }
    return empty;
    console.log(empty)
}
