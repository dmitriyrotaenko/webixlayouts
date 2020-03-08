function passValuesToForm(id) {
  const values = this.getItem(id)

  $$("form").setValues(values);
}




function deleteFilm(e, id) {

  webix.confirm({
    title: "Delete this film?",
    text: "Film will be deleted",
    ok: "Yes", cancel: "No"
  })
  .then(() => {
    this.remove(id);
    $$("form").clear();
  })
}