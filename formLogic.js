const addFilm = table => {
  const values = $$("form").getValues();
  const id = table.getLastId() + 1;

  const { title, year, rating, votes } = values;

  table.add({
    id,
    title,
    year,
    rating,
    votes,
    rank: id
  });
};


const clearFields = form => {

  webix.confirm({
    title: 'Clear fileds?',
    text: 'All fields will be cleared! Are you sure?',
    ok: 'Yes', cancel: 'No'
  })
  .then(() => {
    form.clear();
  })
}



