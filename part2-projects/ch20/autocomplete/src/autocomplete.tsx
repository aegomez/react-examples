import React from 'react';
import axios from 'axios';

type Props = {
  options: Room[];
  url: string;
};

type State = {
  options: Room[];
  filteredOptions: Room[];
  currentOption: string;
}

interface FilterEventProps {
  target: {
    value: string;
  }
}

class Autocomplete extends React.Component<Props, State> {
  readonly state: State = {
    options: this.props.options,
    filteredOptions: this.props.options,
    currentOption: ''
  }

  componentDidMount() {
    if (this.props.url === 'test') return true;

    axios.get(this.props.url)
      .then(response => response.data)
      .then(body => {
        if (!body) {
          return console.error('Failed to load');
        }
        this.setState({
          options: body
        });
      })
      .catch(console.error);
  }

  filter = (event: FilterEventProps) => {
    let { value } = event.target;
    this.setState({
      currentOption: value,
      filteredOptions: (this.state.options.filter(option => (
        value === option.name.substr(0, value.length)
      )))
    });
  }

  addOption = () => {
    let { currentOption } = this.state;
    axios.post(this.props.url, { name: currentOption })
      .then(response => response.data)
      .then(body => {
        if (!body) {
          return console.error('Failed to save');
        }
        this.setState({
          options: [body].concat(this.state.options)
        }, () => {
          this.filter({
            target: { value: currentOption }
          });
        });
      })
      .catch(console.error);
  }

  removeOption = () => {
    
  }

  handleKeyUp = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13) {
      this.addOption();
    }
  }
  
  render() {
    return (
      <div className="form-group">
        <input type="text"
          value={this.state.currentOption}
          className="form-control option-name"
          placeholder="React.js"
          onChange={this.filter}
          onKeyUp={this.handleKeyUp} />
        {this.state.filteredOptions.map(option => (
          <div key={option._id}>
            <a href={'/#/'+option.name}
              className="btn btn-default option-list-item"
              target="_blank" >
              {'#' + option.name}
            </a>
            <a className="btn btn-danger option-remove"
              onClick={this.removeOption}>
              {'[X]'}
            </a>
          </div>
        ))}
        {(() => {
          if (this.state.filteredOptions.length === 0
            && this.state.currentOption !== '') {
            return <a onClick={this.addOption}
              className="btn btn-info option-add">
              {'Add #' + this.state.currentOption}
            </a>
          }
        })()}       
      </div>
    );
  }
}

export default Autocomplete;