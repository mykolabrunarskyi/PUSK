// Функція для переходу на нову сторінку
function goToPage(page) {
    window.location.href = page;
}
//Активна панель для вибору спеціальності
{
var AppearingIcon1 = document.getElementById('toggleIcon1');  
var AppearingIcon2 = document.getElementById('toggleIcon2'); 
var AppearingIcon3 = document.getElementById('toggleIcon3'); 
var HidenContainer = document.getElementById('container');
var HidenContainer1 = document.getElementById('container1');
var ShowUseText1 = document.querySelector('.margin-top-specialty-OI')
var ShowUseText2 = document.querySelector('.margin-top-specialty-PP')
var ShowUseText3 = document.querySelector('.margin-top-specialty-SHI')}

document.getElementById('toggleButton').addEventListener('click', function() {
    var element = document.querySelector('.appearing-div');
    if (element.style.display === 'none' || element.style.display === '') {
      element.style.display = 'block';
      HidenContainer1.style.display = 'block';
    } else {
      element.style.display = 'none';
      AppearingIcon3.style.display = 'none';
      AppearingIcon2.style.display = 'none';
      AppearingIcon1.style.display = 'none';
    }
  });
  
  var numberBool = 0;
  ShowUseText1.addEventListener('mouseenter', function(){
    AppearingIcon1.style.display = 'block';
    AppearingIcon2.style.display = 'none';
    AppearingIcon3.style.display = 'none';
    ShowUseText1.style.color = '#6C777E';
    ShowUseText2.style.color = '#9B9D9F';
    ShowUseText3.style.color = '#9B9D9F';
    numberBool = 1;
  })
  ShowUseText2.addEventListener('mouseenter', function(){
    AppearingIcon2.style.display = 'block';
    AppearingIcon1.style.display = 'none';
    AppearingIcon3.style.display = 'none';
    ShowUseText1.style.color = '#9B9D9F';
    ShowUseText2.style.color = '#6C777E';
    ShowUseText3.style.color = '#9B9D9F';
    numberBool = 2;
  })
  ShowUseText3.addEventListener('mouseenter', function(){
    AppearingIcon3.style.display = 'block';
    AppearingIcon2.style.display = 'none';
    AppearingIcon1.style.display = 'none';
    ShowUseText1.style.color = '#9B9D9F';
    ShowUseText2.style.color = '#9B9D9F';
    ShowUseText3.style.color = '#6C777E';
    numberBool = 3;
  })
HidenContainer.addEventListener('mouseleave', function(){
  AppearingIcon1.style.display = 'none';
  AppearingIcon2.style.display = 'none';
  AppearingIcon3.style.display = 'none';
})
HidenContainer1.addEventListener('mouseenter', function(){
  if (numberBool == 1){
    AppearingIcon1.style.display = 'block'
    AppearingIcon2.style.display = 'none';
    AppearingIcon3.style.display = 'none';
  } 
  if (numberBool == 2){
    AppearingIcon2.style.display = 'block'
    AppearingIcon1.style.display = 'none';
    AppearingIcon3.style.display = 'none';
  } 
  if (numberBool == 3){
    AppearingIcon3.style.display = 'block';
    AppearingIcon2.style.display = 'none';
    AppearingIcon1.style.display = 'none';
  }
})
AppearingIcon1.addEventListener('mouseenter', function(){
  if (numberBool == 1){
    AppearingIcon1.style.display = 'block'
    AppearingIcon2.style.display = 'none';
    AppearingIcon3.style.display = 'none';
  } })
  AppearingIcon2.addEventListener('mouseenter', function(){
  if (numberBool == 2){
    AppearingIcon2.style.display = 'block'
    AppearingIcon1.style.display = 'none';
    AppearingIcon3.style.display = 'none';
  } })
  AppearingIcon3.addEventListener('mouseenter', function(){
  if (numberBool == 3){
    AppearingIcon3.style.display = 'block'
    AppearingIcon2.style.display = 'none';
    AppearingIcon1.style.display = 'none';
  }})
HidenContainer1.addEventListener('mouseleave', function(){
  AppearingIcon1.style.display = 'none';
  AppearingIcon2.style.display = 'none';
  AppearingIcon3.style.display = 'none';
})
AppearingIcon1.addEventListener('mouseleave', function() {
  AppearingIcon1.style.display = 'none';
})
AppearingIcon2.addEventListener('mouseleave', function() {
  AppearingIcon2.style.display = 'none';
})
AppearingIcon3.addEventListener('mouseleave', function() {
  AppearingIcon3.style.display = 'none';
})
//Динамічний Швидкий Пошук
{var searchBackground = document.getElementById('Body');
var searchInputText = document.getElementById('searchInput');
var searchBar = document.getElementById('searchBar');
var PanelButton = document.getElementById('PanelButtonId');
var overlay = document.getElementById('overlay');}

searchInputText.addEventListener('input', function(event){
  var inputValue = event.target.value;
  if (inputValue.length > 0) {

    searchBackground.style.position = 'fixed';
    PanelButton.style.display = 'none';
    searchBar.style.display = 'block';
    overlay.style.display = 'block'
  } else {
    PanelButton.style.display = 'block';
    searchBar.style.display = 'none';
    overlay.style.display = 'none'
  }
})
//Доробити ...............................................................................................................................................................................


