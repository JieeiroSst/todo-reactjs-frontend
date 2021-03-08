import React, { Component } from "react";

class Update extends Component {
  render() {
    return (
      <div>
        <h2>Update todo</h2>

        <form>
          <div class="form-group">
            <label for="exampleInputPassword1">Id</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Content</label>
            <input type="text" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Update;
