import React from 'react';

// @TODO: implement multi select filter type
const filterHoc = Component =>
  class extends React.Component {
    state = {
      choices: this.props.choices.map(choice => ({
        ...choice,
        selected: choice.selected || false
      }))
    };

    onChoiceClick = id => {
      const clickedChoice = this.state.choices.find(ch => ch.id === id);
      if (clickedChoice !== undefined && clickedChoice.selected === false) {
        this.setState({
          choices: this.state.choices.map(choice => {
            if (choice.id === id) {
              return { ...choice, selected: true };
            }
            return { ...choice, selected: false };
          })
        });
      }
    };

    filterData = () => {
      const { data } = this.props;
      const selectedChoices = this.state.choices.filter(
        choice => choice.selected
      );

      return selectedChoices.length === 0
        ? data
        : data.filter(item =>
          selectedChoices.every(choice => choice.match(item))
        );
    };

    render() {
      const { data, choices, ...props } = this.props;
      return (
        <Component
          choices={this.state.choices}
          data={this.filterData(data)}
          onChoiceClick={this.onChoiceClick}
          {...props}
        />
      );
    }
  };
export default filterHoc;