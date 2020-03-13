function passValuesToForm(id) {
  const values = this.getItem(id)

  $$("form").setValues(values);
}




function deleteItem(e, id) {
  webix.confirm({
    title: "Delete this item?",
    text: "Item will be deleted",
    ok: "Yes", cancel: "No"
  })
  .then(() => {
    this.remove(id);
    $$("form").clear();
  })

  return false;
}