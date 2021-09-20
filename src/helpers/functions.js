export const getStringDate = (date)=>{
    try{
        if(!date) return 'N/A';
        const format_date = new Date(date);
        const string = format_date.toDateString().split(' ');
        const [month , day , year] = [string[1] , string[2] , string[3]];
        return `${day} ${month} ${year}`;
    }
    catch(e){
        return 'N/A';
    }
}
