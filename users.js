const usersInfo = new webix.DataCollection({
    url: "data/users.js"
  });
  
  const chart = {
    view: "chart",
    id: "usersChart",
    type: "bar",
    value: "#age#",
    barWidth: 40,
    xAxis: {
      title: "Age",
      template: "#age#"
    },
  }
  
  const list = {
    rows: [
      {
        view: "toolbar",
        elements: [
          {
            view: "text", id: "listInput",
            gravity: 5,
            on: {
              "onTimedKeyPress": function() {
                const input = this.getValue().toLowerCase();
  
                $$("usersList").filter(function(obj) {
                  return obj.name.toLowerCase().includes(input);
                });
              }
            }
          }, 
          { view: "button", value: "Sort asc", gravity: 1, css: "webix_primary", click: function() {
            $$("usersList").sort("#name#", "asc", "string");
          }},
          { view: "button", value: "Sort desc", gravity: 1, css: "webix_primary", click: function() {
            $$("usersList").sort("#name#", "desc", "string");
          }}
        ]
      },
  
      {
        view: "list",
        id: "usersList",
        css: "flex",
        template: function(user) {
          return `${user.name} from ${user.country} <span class=\"user-remove wxi-close webix_icon\"></span>`
        },
  
        onClick: {
          "user-remove": deleteItem
        }
      }
    ]
  }
  
  
  const Users = {
    id: "Users",
    rows: [
      list,
      chart
    ]
  }
  
  