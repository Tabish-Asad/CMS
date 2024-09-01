var arrCus=[];

export function addCustomer(id,name,address,mobileNo){
    var newCus={id:id,name:name,address:address,mobileNo:mobileNo}
    arrCus.push(newCus)
}
 
export function searchCustomer(id){
    var e=arrCus.find(e=>e.id==id)
    return e;
}
export function modifyCustomer(id,name,address,mobileNo){
    var e=arrCus.find(e=>e.id==id);
    if(e){
        e.name=name;
        e.address=address;
        e.mobileNo=mobileNo;
    }
    
}
// export function deleteCustomer(id){
//     var index=arrCus.findIndex(e=>e.id==id);      
//     arrCus.splice(index,1);    
// } 

export function deleteCustomer(id) {
    for (let i = 0; i < arrCus.length; i++) {
        if (arrCus[i].id == id) {
            arrCus.splice(i, 1);
            break; // Exit the loop once the customer is deleted
        }
    }
}

export function getCustomerList(){
    return [...arrCus]
}