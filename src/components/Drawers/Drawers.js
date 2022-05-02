import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

function Drawers() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                title="Register"
                padding="xl"
                size="xl"
                position="right" 
            >
                sss
                {/* Drawer content */}
            </Drawer>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Drawer</Button>
            </Group>
        </>
    );
}

export default Drawers;
