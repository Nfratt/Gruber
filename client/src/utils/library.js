import API from "../api";

export default {

  loadFoods: function() {
    API.getFoods()
      .then(res =>
     console.log(res)
      )
      .catch(err => console.log(err));
    // return axios.get("/api/")
  },

  deleteFood: function(id) {
    API.deleteFood(id)
      .then(res => this.loadFoods())
      .catch(err => console.log(err));
  },

  handleInputChange: function(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  },

  handleFormSubmit: function(event) {
    event.preventDefault();
    if (this.state.itemName && this.state.price) {
      API.saveBook({
        title: this.state.itemName,
        author: this.state.price
      })
        .then(res => this.loadFoods())
        .catch(err => console.log(err));
    }
  }

}



// export default {
//   // Gets books from the Google API
//   getBooks: function(q) {
//     return axios.get("/api/google", { params: { q: "title:" + q } });
//   },
//   // Gets all saved books
//   getSavedBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Deletes the saved book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves an book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };


