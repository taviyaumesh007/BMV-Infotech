let arry = []
let dataValue = false;
let vardata = ""

function getdata() {

    let name = document.getElementById("firstname").value
    let email = document.getElementById("email").value
    // let male = document.getElementById("male").value
    // let female = document.getElementById("female").value


    let data = {
        firstname: name,
        email: email,
        gender: radioButton(),

    }
    if (dataValue) {

        let upValue = arry.map((value, ind) => {
            if (ind === vardata) {
                return data
            }
            return value
        })
        arry = upValue
        console.log(arry)
        formData();

        dataValue = false
    }
    else {
        arry.push(data);
        console.log(arry)
    }
    formData();
    clear()

}
function clear() {
    document.getElementById("firstname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("male").checked = false
    document.getElementById("female").checked = false

}
function formData() {
    document.getElementById("table_data").innerHTML = arry.map((user, index) => {
        return (
            `<tr>
            <td>${index + 1}</td>
            <td>${user.firstname}</td>
            <td>${user.email}</td>
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
    // console.log(index)
    arry = index
    formData()
}

function updateData(data2) {
    let data = document.getElementById("table_data")
    let index = arry.find((value, ind) => {
        return ind === data2
    })
    console.log(index)
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
    else {
        empty = document.getElementById("female").value
    }
    return empty;
    console.log(empty)
}




