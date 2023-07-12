import React from 'react';
import { Col } from './Col.jsx';

export const ToDo = ({ list }) => {
    return (
        <Col list={list} id='toDo' />
    );
};