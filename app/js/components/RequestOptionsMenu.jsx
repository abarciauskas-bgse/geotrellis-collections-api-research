import React, { PropTypes } from 'react';
import { Radio, RadioGroup } from '@blueprintjs/core';
import R from 'ramda';

import {
    changeApiEndpoint,
} from './actions';

import {
    apiEndpoints,
} from '../constants';

export default function RequestOptionsMenu({
    dispatch,
    selectedApiEndpoint,
}) {
    const radioButtons = R.map(name => (
        <Radio
            className="pt-align-right api-endpoint-list-item"
            label={name}
            value={name}
            key={name}
        />), apiEndpoints);

    return (
        <RadioGroup
            onChange={({ target: { value } }) => dispatch(changeApiEndpoint(value))}
            selectedValue={selectedApiEndpoint}
        >
            {radioButtons}
        </RadioGroup>
    );
}

RequestOptionsMenu.propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedApiEndpoint: PropTypes.string.isRequired,
};

