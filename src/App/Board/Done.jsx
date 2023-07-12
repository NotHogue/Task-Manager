import React from 'react';
import { Col } from './Col.jsx';

export const Done = ({ list }) => {
    return (
        <Col list={list} id='done' />
    );
};