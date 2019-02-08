import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setUnit, updateWeather } from 'actions';
import { IMPERIAL, METRIC } from 'constant';
import styled from 'styled-components';

class UnitButtons extends Component {
  isActive = target => {
    const { unit } = this.props;
    return unit === target;
  };

  handleClick = target => {
    const { updateWeather, setUnit, unit } = this.props;
    if (target !== unit) {
      setUnit(target);
      updateWeather(target);
    }
  };

  renderButton = target => {
    return this.isActive(target) ? (
      <Button value={target} onClick={() => this.handleClick(target)}>
        {UNITS[target]}
      </Button>
    ) : (
      <SButton type="ghost" onClick={() => this.handleClick(target)}>
        {UNITS[target]}
      </SButton>
    );
  };

  render() {
    return (
      <ButtonGroup>
        {this.renderButton(IMPERIAL)}
        {this.renderButton(METRIC)}
      </ButtonGroup>
    );
  }
}

const mapStateToProps = state => {
  const unit = state.unit && state.unit.unit;
  return { unit };
};

export default connect(
  mapStateToProps,
  { setUnit, updateWeather }
)(UnitButtons);

const ButtonGroup = styled(Button.Group)`
  white-space: nowrap !important;
  margin-right: 10px;
`;

const SButton = styled(Button)`
  color: white !important;
`;

const UNITS = {
  [METRIC]: '°C',
  [IMPERIAL]: '°F',
};
