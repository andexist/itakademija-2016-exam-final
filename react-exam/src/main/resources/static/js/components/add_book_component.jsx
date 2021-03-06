var AddBookComponent = React.createClass( {
    render: function() {
        return (
            <div className="container">
              <h3>Add new book</h3>
                <form>
                  <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" value={this.props.book.title} onChange={this.props.onFieldChange('title')} />
                  </div>
                  <div className="form-group">
                    <label>Author</label>
                    <input className="form-control" value={this.props.book.author} onChange={this.props.onFieldChange('author')} />
                  </div>
                  <div className="form-group">
                    <label>ISBN</label>
                    <input
                      className="form-control"
                      value={this.props.book.isbn}
                      onChange={this.props.onFieldChange('isbn')}
                    />
                  </div>
                  <div className="form-group">
                    <label>Quantity</label>
                    <input className="form-control" value={this.props.book.quantity} onChange={this.props.onFieldChange('quantity')} />
                  </div>
                  <button className="btn btn-primary" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}>Add</button>
                  <button className="btn btn-danger" style={{ marginRight: '20px' }} onClick={this.props.onCancelClick}>Cancel</button>
            </form>
        </div>
        )
    }
});

AddBookComponent.propTypes = {
    book: React.PropTypes.object.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onSaveClick: React.PropTypes.func.isRequired,
    onCancelClick: React.PropTypes.func.isRequired
};

window.AddBookComponent = AddBookComponent;