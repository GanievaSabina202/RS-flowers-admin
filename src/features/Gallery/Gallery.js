import React, { useEffect, useState } from 'react'
import PageDesc from '../../components/PageDesc/PageDesc'
import { Wrapper, Img, Desc, Test, Title } from './Gallery.styled'
import Drawers from './components/Drawers/Drawers'
import { db } from '../../config/firebase';
import { collection, deleteDoc, doc, getDoc, onSnapshot } from 'firebase/firestore';

function Gallery() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            setLoading(true)
            const unsub = onSnapshot(collection(db, "gallery"), (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() })
                });
                setUsers(list);
                setLoading(false)
            }, (error) => {
                console.log(error);
            });
            return () => {
                unsub();
            }
        }, []);
    return (
        <>
            <Test>
                <PageDesc title="Gallery Page" />
                <Drawers />
            </Test>

            {users && users.map((item) => (
                <Wrapper key={item.id}>
                    <Img src={item.img} />
                    <Title>{item.name}</Title>
                    <Desc>
                        {item.price}
                    </Desc>
                </Wrapper>
            ))}
        </>
    )
}

export default Gallery