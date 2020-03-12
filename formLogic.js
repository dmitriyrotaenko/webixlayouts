function saveFilm() {
  const films = $$("films");
  const form = this.getFormView();
  const filmData = form.getValues();

  if(filmData.id) {
    films.updateItem(filmData.id, filmData);
  } else {
    if(form.validate()) {
      films.add(filmData);
      webix.message({type: "success", text: "Film was added successfully"});
      films.showItem(filmData.id)

      form.clear();
      form.clearValidation();
      films.unselectAll();
    } 
  }
};


function clearFields() {

  const form = this.getFormView();

  webix.confirm({
    title: "Clear fileds?",
    text: "All fields will be cleared! Are you sure?",
    ok: "Yes", cancel: "No"
  })
  .then(() => {
    form.clear();
    form.clearValidation();

    $$("films").unselectAll();
  })
}


