
  var productdetailes = [
    {
        "id": 1,
        "product_name": "a",
        "product_quantity": "10",
        "product_price": "Rs 5"
    },
    {
        "id": 2,
        "product_name": "b",
        "product_quantity": "30",
        "product_price": "Rs 60"
    },
    {
        "id": 3,
        "product_name": "c",
        "product_quantity": "80",
        "product_price": "Rs 28"
    },
    {
        "id": 4,
        "product_name": "d",
        "product_quantity": "50",
        "product_price": "Rs 10"
    },
    {
        "id": 5,
        "product_name": "e",
        "product_quantity": "25",
        "product_price": "Rs 50"
    },
    {
        "id":6,
        "product_name": "f",
        "product_quantity": "100",
        "product_price": "Rs 14"
    },
    {
        "id": 7,
        "product_name": "g",
        "product_quantity": "65",
        "product_price": "Rs 45"
    },
    {
        "id": 8,
        "product_name": "h",
        "product_quantity": "35",
        "product_price": "Rs 500"
    }
]


bindjsondata();



function bindjsondata() {

    document.getElementById('tblbody').innerHTML = "";
   
    productdetailes.forEach(function (item, index) {
        var btnEditId = "btnedit" + item.id;
        var btnDeleteId = "btndelete" + item.id;
        var tableRow = "<tr Id='" + item.id + "'   data-CustomerID='" + item.id + "'   data-productName='" + item.product_name + "' data-productquantity='" + item.product_quantity + "' data-productprice='" + item.product_price+ "'>"
            + "<td class='td-data'>" + item.id + "</td>"
            + "<td class='td-data'>" + item.product_name + "</td>"
            + "<td class='td-data'>" + item.product_quantity + "</td>"
            + "<td class='td-data'>" + item.product_price+ "</td>"
            + "<td class='td-data'>" +
            "<button id='" + btnEditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" + item.id + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
            "<button id='" + btnDeleteId + "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteCustomerRow(" + item.id + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
            + "</td>"
            + "</tr>";
        document.getElementById('tblbody').innerHTML += tableRow;
    })

    
    var AddRow = "<tr>"
        + "<td class='td-data'></td>"
        + "<td class='td-data'><input type='text' id='txtproductName' placeholder='name..'></td>"
        + "<td class='td-data'><input type='email' id='txtproductquantity' placeholder='quantity..'></td>"
        + "<td class='td-data'><input type='text' id='txtproductprice' placeholder='Price..'></td>"
        + "<td class='td-data'>" + "<button id= 'btnaddCustomer' onclick='addCustomer()' class='btn btn-success'> <i class='fa fa-plus-circle' aria-hidden='true'></i>Add</button>"+"</td>"
        + "</tr>";
    document.getElementById('tblbody').innerHTML += AddRow;
}

function CreateUniqueCustomerID() {
    
    const ID = Date.now();
    return ID;
}

function addCustomer() {
    var customerID = CreateUniqueCustomerID();
    var productName = document.getElementById("txtproductName").value;
    if (!productName) {
        alert('Please enter name!')
        return false;
    }
    var productquantity = document.getElementById("txtproductquantity").value;
    if (!productquantity) {
        alert('Please enter quantity!')
        return false;
    }
    

    var productprice= document.getElementById("txtproductprice").value;
    if (!productprice) {
        alert('Please enter Price!')
        return false;
    }
    
 productdetailes.push({
        "id": customerID,
        "product_name": productName,
        "product_quantity": productquantity,
        "product_price": productprice
    });
    document.getElementById('txtproductName').value = "";
    document.getElementById('txtproductquantity').value = "";
    document.getElementById('txtproductprice').value = "";

    bindjsondata();
};

function showEditRow(CustomerID) {

    
    var CustomerRow = document.getElementById(CustomerID);

   
    var data = CustomerRow.querySelectorAll(".td-data");

    var customerID = data[0].innerHTML;
    var productName = data[1].innerHTML;
    var productquantity = data[2].innerHTML;
    var productprice = data[3].innerHTML;

    data[0].innerHTML = '<input name="txtupdate_CustomerID"  disabled id="txtupdate_CustomerID" value="' + customerID + '"/>';
    data[1].innerHTML = '<input name="txtupdate_ProductName" id="txtupdate_ProductName" value="' + productName + '"/>';
    data[2].innerHTML = '<input name="txtupdate_productquantity" id="txtupdate_productquantity" value="' +productquantity+ '"/>';
    data[3].innerHTML = '<input name="txtupdate_productprice" id="txtupdate_productprice" value="' + productprice + '"/>';


    data[4].innerHTML =
        "<button class='btn btn-primary btn-xs btn-updateCustomer' onclick='updateCustomers(" + customerID + ")'>" +
        "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>"
        + "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancelUpdate(" + customerID + ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>"
        + "<button class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteCustomerRow(" + customerID + ")'>"
        + "<i class='fa fa-trash' aria-hidden='true'></i>Delete</button>"
}
function cancelUpdate(CustomerID) {


    var btneditId = "btnedit" + CustomerID;
    var btndeleteId = "btndelete" + CustomerID;

     
    var CustomerRow = document.getElementById(CustomerID); 
    var data = CustomerRow.querySelectorAll(".td-data");

    var productName = CustomerRow.getAttribute("data-ProductName");
    var productprice= CustomerRow.getAttribute("data-productprice");
    var productquantity = CustomerRow.getAttribute("data-productquantity");


    data[0].innerHTML = CustomerID;
    data[1].innerHTML = productName;
    data[2].innerHTML =productquantity;
    data[3].innerHTML = productprice;


    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showEditRow(" + CustomerID + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteCustomer' onclick='deleteCustomerRow(" + CustomerID + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[4].innerHTML = actionbtn;
}
function deleteCustomerRow(CustomerID) {
    
    productdetailes.splice(productdetailes.findIndex(a => a.id === CustomerID), 1)
    bindjsondata();
}
function updateCustomers(CustomerID) {
    
    var CustomerRow = document.getElementById(CustomerID);
    var data = CustomerRow.querySelectorAll(".td-data");

    var productName = data[1].querySelector("#txtupdate_ProductName").value;
    var productquantity = data[2].querySelector("#txtupdate_productquantity").value;
    var productprice = data[3].querySelector("#txtupdate_productprice").value;

   
    var customerObJ = productdetailes.filter((x) => x.id == CustomerID).pop();
    if (customerObJ != null) {
        customerObJ.product_name =productName;
        customerObJ.product_quantity = productquantity;
        customerObJ.product_price = productprice;
    }
    bindjsondata();

}






