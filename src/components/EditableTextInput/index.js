import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {
    editableText: '',
    isButtonClicked: '',
  }

  onChangeInput = event => {
    this.setState({editableText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {editableText, isButtonClicked} = this.state
    const saveEditButton = isButtonClicked ? 'Edit' : 'Save'
    return (
      <div className="editable-text-input-bg-container">
        <div className="editable-text-input-card">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            {isButtonClicked ? (
              <p>{editableText}</p>
            ) : (
              <input
                className="input"
                type="text"
                onChange={this.onChangeInput}
                value={editableText}
              />
            )}

            <button type="button" className="btn" onClick={this.onClickButton}>
              {saveEditButton}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
