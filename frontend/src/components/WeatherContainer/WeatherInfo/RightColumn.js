import React from 'react';
import { connect } from 'react-redux';
import { titleCase } from 'helpers';
import { UNITS } from 'constant';
import styled from 'styled-components';

const RightColumn = ({ min, max, cur, condition, unit }) => {
  const tempUnit = UNITS[unit][TEMP];
  return (
    <Div>
      <Condition>{titleCase(condition)}</Condition>
      <Temperature>
        <CurrentTemp>{`${cur}${tempUnit}`}</CurrentTemp>
        <div>
          <p>Low: {`${min}${tempUnit}`}</p>
          <p>High: {`${max}${tempUnit}`}</p>
        </div>
      </Temperature>
    </Div>
  );
};

const mapStateToProps = state => {
  const { weather } = state;
  const { unit } = state.unit;
  const { temp, condition } = weather;
  return { ...temp, condition, unit };
};

export default connect(mapStateToProps)(RightColumn);

const TEMP = 'TEMP';

const Div = styled.div`
  flex-grow: 1;
`;

const Temperature = styled.div``;

const CurrentTemp = styled.p`
  font-size: 1.6em;
`;

const Condition = styled.p`
  font-size: 1.4em;
`;
