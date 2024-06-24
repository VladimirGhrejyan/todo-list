import { FC, SyntheticEvent, useState } from 'react';
// mui
import { Container, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material';
//
import { Todos } from './todos';
import { RemovedTasks } from './removed-tasks';

enum TabState {
    TODOS,
    TRASH,
}

export const TodoList: FC = () => {
    const [currentTab, setCurrentTab] = useState<TabState>(TabState.TODOS);

    const muiTheme = useTheme();

    const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

    const handleChange = (_: SyntheticEvent, newValue: TabState) => {
        setCurrentTab(newValue);
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}>
            <Paper elevation={3} sx={{ padding: isSmallScreen ? 1 : 2 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Todo List
                </Typography>
                <Tabs value={currentTab} onChange={handleChange} centered>
                    <Tab label="Todos" />
                    <Tab label="Trash" />
                </Tabs>
                {currentTab === TabState.TODOS && <Todos />}
                {currentTab === TabState.TRASH && <RemovedTasks />}
            </Paper>
        </Container>
    );
};
