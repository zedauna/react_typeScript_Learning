/**
 * 
 * @param date 
 * @returns 
 */
export const dateString=(date:Date):string=>{
    return date.toISOString().split("T")[0];
}

/**
 * 
 * @param number 
 * @returns 
 */
export const numberToDate=(number:number):string=>{
    const today=new Date();
    if(number ===0){
        return dateString(today)
    }else{
        return dateString(new Date(today.setDate(today.getDate()-number)))
    }
}