//filters

document.querySelectorAll('.custom-check').forEach((elem)=> {
  elem.onclick = checkFunction
});
function checkFunction () {

  let offerCheck = document.querySelector('.custom-check[id="weekoffer"]');
  let priceCheck = document.querySelector('.custom-check[id="bestprice"]');
  let idealCheck = document.querySelector('.custom-check[id="ideal"]');

  if (this.id == 'weekoffer') {
    priceCheck.checked = false;
    idealCheck.checked = false;
  }

  if (this.id == 'bestprice') {
    offerCheck.checked = false;
    idealCheck.checked = false;
  }

  if (this.id == 'ideal') {
    priceCheck.checked = false;
    offerCheck.checked = false;
  }
}



document.getElementById('hideFiltersBtn').addEventListener('click', function() {
  document.getElementById('hideFiltersSvg').style.transform = `rotate(${this.d = (this.d | 0) + 180}deg)`;
  document.getElementById('hideFilters').classList.toggle('hideFilters');
});


// const filterChecks = document.getElementsByClassName('filter-checkbox');

// for (let i = 0; i < filterChecks.length; i++) {
//   const filterCheck = filterChecks[i];

//   filterCheck.addEventListener('click', function () {

//     const filterInputs = document.getElementsByClassName('filter-checkbox__input');
  
//     const filterInput = filterInputs[i];
    
//     for (let i = 0; i < filterInputs.length; i++) {
//       if (filterInput.checked) {
//         filterCheck.classList.add("checkboxChecked");
//       }
//       else {
//         filterCheck.classList.remove("checkboxChecked");
//       }
//     }

//   });
// }







// document.querySelectorAll('.filter-checkbox').forEach((checkFilter)=> {
//   checkFilter.onclick = checkFilterFunction
// });







// let filterInputs = document.getElementsByClassName('filter-checkbox__input');

// for (let i = 0; i < filterInputs.length; i++) {
//   const filterInput = filterInputs[i];

//   filterInput.addEventListener('click', inputClick) 
//   filterInput.addEventListener('keydown', inputClick)
//   function inputClick () {
//     let filterChecks = document.getElementsByClassName('filter-checkbox');
//     let filterSvgRights = document.getElementsByClassName('filter-checkbox__svg-right');
//     let filterTitles = document.getElementsByClassName('filter-checkbox__title');
//     let filterSvgs = document.getElementsByClassName('filter-checkbox__svg');

//     let inputBestprise = document.querySelector('.filter-checkbox__input[name="bestprice"]');

//     const filterCheck = filterChecks[i];
//     const filterSvgRight = filterSvgRights[i];
//     const filterTitle = filterTitles[i];
//     const filterSvg = filterSvgs[i];
    
//     for (let i = 0; i < filterChecks.length; i++) {
//       if (filterInput.checked) {
//         filterCheck.classList.add("checkboxChecked");
//       }
//       else {
//         filterCheck.classList.remove("checkboxChecked");
//       }
//     } 
    
//     for (let i = 0; i < filterTitles.length; i++) {
//       if (filterInput.checked) {
//         filterTitle.classList.add("checkboxChecked-title");

//       }
//       else {
//         filterTitle.classList.remove("checkboxChecked-title");
//       }
//     }

//     for (let i = 0; i < filterSvgs.length; i++) {
//       if (filterInput.checked) {
//         filterSvg.classList.add("checkboxChecked-svg");
//       }
//       else {
//         filterSvg.classList.remove("checkboxChecked-svg");
//       }
//     }

//     for (let i = 0; i < filterSvgRights.length; i++) {
//       if (filterInput.checked) {
//         filterSvgRight.classList.add("checkboxChecked-svg-right");
//       }
//       else {
//         filterSvgRight.classList.remove("checkboxChecked-svg-right");
//       }
//     }
   
//   };
// }