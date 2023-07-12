import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../actions/actions';
import { Extended } from './Extended.jsx';

export const SideNav = () => {

    const nav = [];
    const name = 'Jeremiah';
    const navBool = useSelector((state) => state.tasks.navBool);
    if (navBool === true) {
        nav.push(
            <Extended workspace={name} />
        )
    }
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(actions.changeNavBar());
    }
    return (
        <><button className='navButton' onClick={handleClick}></button>
            <div className='sideNav'>
                {nav}
            </div></>
    );
};