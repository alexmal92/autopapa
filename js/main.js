
//filters

let filterInputs = document.getElementsByClassName('filter-checkbox__input');
let filterChecks = document.getElementsByClassName('filter-checkbox');
let filterSvgRights = document.getElementsByClassName('filter-checkbox__svg-right');
let filterTitles = document.getElementsByClassName('filter-checkbox__title');
let filterSvgs = document.getElementsByClassName('filter-checkbox__svg');

for (let i = 0; i < filterInputs.length; i++) {
  const filterInput = filterInputs[i];
  const filterCheck = filterChecks[i];
  const filterSvgRight = filterSvgRights[i];
  const filterTitle = filterTitles[i];
  const filterSvg = filterSvgs[i];

  filterInput.addEventListener('click', function () {
    
    for (let i = 0; i < filterChecks.length; i++) {
      filterCheck.classList.toggle("checkboxChecked");
    }

    for (let i = 0; i < filterTitles.length; i++) {
      filterTitle.classList.toggle("checkboxChecked-title");
    }
    for (let i = 0; i < filterSvgs.length; i++) {
      filterSvg.classList.toggle("checkboxChecked-svg");
    }
    for (let i = 0; i < filterSvgRights.length; i++) {
      filterSvgRight.classList.toggle("checkboxChecked-svg-right");
    }

    
  });
}



//   filterInput.addEventListener('click', function () {
//     let fIndex = filterInputs.indexOf(target);
//     console.log(fIndex);
//   })
// }




// for (let i = 0; i < filterInputs.length; i++) {
//   let filterInput = filterInputs[i];
//   filterInput.addEventListener('focus', checkbox);
// }

// function checkbox () {
//   let filterCheck = document.querySelector(".filter-checkbox");
//   let filterSvgRight = document.querySelector(".filter-checkbox__svg-right");
//   let filterTitle = document.querySelector(".filter-checkbox__title");
//   let filterSvg = document.querySelector(".filter-checkbox__svg");

//   console.log(filterCheck);

//   filterCheck.classList.toggle("checkboxChecked");
//   filterSvgRight.classList.toggle("checkboxChecked-svg-right");
//   filterTitle.classList.toggle("checkboxChecked-title");
//   filterSvg.classList.toggle("checkboxChecked-svg");
// };

