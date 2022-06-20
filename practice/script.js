const arry = [];

function getdata() {
    let name = document.getElementById("firtname").value


    let data = {
        firstname: name,
    }
    formData()
}


function formData() {
    document.getElementById("table_data").innerHTML = arry.map((user, index) => {
        return (
            `<tr>
             <td>ergwetg</td>
            </tr>`
        )

    })
}
