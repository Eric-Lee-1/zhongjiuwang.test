var  Ewm =document.querySelector('main .w .loginto .Ewm');
var account = document.querySelector('main .w .loginto .account');
var top_Ewn =document.querySelector('main .w .loginto .top p:first-of-type');
var top_account =document.querySelector('main .w .loginto .top p:last-of-type');

// console.log(Ewm)
// console.log(account)
// console.log(top_Ewn)
// console.log(top_account)
top_Ewn.onclick = function(){
    top_Ewn.style.fontWeight = 'bolder' ;
    top_Ewn.style.color = '#e33938';
    top_account.style.fontWeight ='100';
    top_account.style.color='#1f1f1f'
    Ewm.style.display ='block';
    account.style.display = 'none';
}

top_account.onclick = function (){
    top_Ewn.style.fontWeight = '100' ;
    top_Ewn.style.color = '#1f1f1f';
    top_account.style.fontWeight ='bolder';
    top_account.style.color='#e33938'
    Ewm.style.display ='none';
    account.style.display = 'block';

}




