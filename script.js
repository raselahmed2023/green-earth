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
        <div id="categoriesContainer" class=" btn w-full space-y-2"><button onclick="categoriesTress(${level.category_name})">${level.category_name}</button></div>`
        // levBtn.className="btn btn-outline w-full space-y-2";
        categoriesContainer.appendChild(levBtn);
    }


}


//3

const categoriesTress = () => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then((res) => res.json())
        .then((data)=> console.log(data))
}


// loading
levelCategories();
