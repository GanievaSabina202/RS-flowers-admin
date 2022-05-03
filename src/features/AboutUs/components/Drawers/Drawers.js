import React, { useState, useEffect } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import { storage, db } from '../../../../config/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp, doc, getDoc, updateDoc } from 'firebase/firestore';

import { CustomForm, CustomTextInput, CustomTextareaInput, CustomFileInput, CustomButton } from './Drawers.styled';

const initialState = {
    name: "",
    textarea: ""
}
function Drawers() {
    const [opened, setOpened] = useState(false);

    const [data, setData] = useState(initialState);
    const { name, textarea } = data;
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);

    const handlerChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        await addDoc(collection(db, "aboutUs"), {
            ...data,
            timestamp: serverTimestamp()
        })
    }

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on('state_change', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
            }, (error) => {
                console.log(error);
            },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, img: downloadURL }))
                    })
                }
            )
        };
        file && uploadFile();
    }, [file])

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Add About Us Page"
                padding="xl"
                size="xl"
                position="right"
            >


                <CustomForm onSubmit={handleSubmit}>

                    <CustomTextInput
                        placeholder="Title"
                        radius="xs"
                        size="md"

                        value={name}
                        name='name'
                        onChange={handlerChange}
                    />
                    <CustomTextareaInput
                        placeholder="Your comment"
                        size="md"

                        value={textarea}
                        name='textarea'
                        onChange={handlerChange}
                    />

                    <CustomFileInput
                        placeholder="Description"
                        radius="xs"
                        size="md"

                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <CustomButton
                        disabled={progress !== null && progress < 100}
                    >
                        Submit
                    </CustomButton>
                </CustomForm>

            </Drawer>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>ADD</Button>
            </Group>
        </>
    );
}

export default Drawers;
