import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

export default function Sandbox() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data);

    return (
        <>
            <h1>test header</h1>
            <h3>data is: {data} </h3>
            <Button onClick={() => dispatch(increment(20))} content='Increment' color='green' />
            <Button onClick={() => dispatch(decrement(10))} content='Decrement' color='red' />
            <Button
                onClick={() => dispatch(openModal({ modalType: 'TestModal', modalProps: {data} }))}
                content='Open model'
                color='teal'
            />
            <div style={{margnTop: 15}}>
                <TestPlaceInput/>
                <TestMap />

            </div>
        </>
    );
}
