const addFilm = () => {
  const values = $$("form").getValues();
  const id = webix.uid();


  const { title, year, rating, votes } = values;

  $$("films").add({
    id,
    title,
    year,
    rating,
    votes
  });
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
  })
}



