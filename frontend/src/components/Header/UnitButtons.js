import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { setUnit } from 'actions';
import { IMPERIAL, METRIC } from 'constant';
import styled from 'styled-components';

const ButtonGroup = styled(Button.Group)`
  white-space: nowrap !important;
  margin: 0 40px;
`;

const SButton = styled(Button)`
  color: white !important;
`;

const UNITS = {
  [METRIC]: '°C',
  [IMPERIAL]: '°F',
};

class UnitButtons extends Component {
  isActive = target => {
    const { unit } = this.props;
    return unit === target;
  };

  renderButton = target => {
    const { setUnit } = this.props;
    return this.isActive(target) ? (
      <Button onClick={() => setUnit(target)}>{UNITS[target]}</Button>
    ) : (
      <SButton type="ghost" onClick={() => setUnit(target)}>
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
  const { unit } = state;
  return { unit };
};

export default connect(
  mapStateToProps,
  { setUnit }
)(UnitButtons);
