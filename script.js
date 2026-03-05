//1 categories of tress

const levelCategories = () => {
    fetch('https://openapi.programming-hero.com/api/categories#')
        .then((res) => res.json())
        .then((data) => showCategories(data))
}

//2 

const showCategories = (l) => {
    

    const categoriesContainer = document.getElementById('categoriesContainer');
    categoriesContainer.innerHTML = '';

    let levels = l.categories;

    for (let level of levels) {
        const levBtn = document.createElement('div');
        // levBtn.innerHTML = level.category_name;
        levBtn.innerHTML = `
        <div id="categoriesContainer" class=" btn w-full space-y-2">${level.category_name}</div>`
        // levBtn.className="btn btn-outline w-full space-y-2";
        categoriesContainer.appendChild(levBtn);
    }


}



// loading
levelCategories();
