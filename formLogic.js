function clearForm() {
  const films = $$("films");
  const form = $$("form");

  films.unselectAll();
  form.clear();
  form.clearValidation();
}



function saveFilm() {
  const films = $$("films");
  const form = this.getFormView();
  const filmData = form.getValues();
  const rank = +films.getItem(films.getLastId()).rank + 1; // to display rank correctly



  if(form.validate()) {

    if(filmData.id) {
      films.updateItem(filmData.id, filmData);
      webix.message({type: "success", text: "Film was updated successfully"});
    } else {
      filmData.rank = rank;
      const id = films.add(filmData);
      webix.message({type: "success", text: "Film was added successfully"});
      films.showItem(id);
    }

    clearForm();
  }
};


function clearFields() {
  webix.confirm({
    title: "Clear fileds?",
    text: "All fields will be cleared! Are you sure?",
    ok: "Yes", cancel: "No"
  })
  .then(() => {
    clearForm();
  })
}


