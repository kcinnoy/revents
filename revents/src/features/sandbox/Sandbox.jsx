import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from './testReducer';
import { openModal } from '../../app/common/modals/modalReducer';
import TestPlaceInput from './TestPlaceInput';
import TestMap from './TestMap';

export default function Sandbox() {
    const dispatch = useDispatch(null);
    const [target,setTarget] = useState();
    const data = useSelector(state => state.test.data);
    const { loading } = useSelector(state => state.async);
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const [location, setLocation] = useState(defaultProps);

    function handleSetLocation(latLng) {
        setLocation({ ...location, center: { lat: latLng.lat, lng: latLng.lng } });
    }

    return (
        <>
            <h1>test header</h1>
            <h3>data is: {data} </h3>
            <Button
                loading={loading && target === 'increment'}
                onClick={(e) => {
                    dispatch(increment(20));
                    setTarget(e.target.name)
                }}
                content='Increment'
                color='green'
            />
            <Button
                loading={loading && target === 'decrement'}
                onClick={(e) => {
                    dispatch(decrement(10));
                    setTarget(e.target.name)
                }}
                content='Decrement'
                color='red'
            />
            <Button
                onClick={() =>
                    dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
                }
                content='Open model'
                color='teal'
            />
            <div style={{ marginTop: 15 }}>
                <TestPlaceInput setLocation={handleSetLocation} />
                <TestMap location={location} />
            </div>
        </>
    );
}
