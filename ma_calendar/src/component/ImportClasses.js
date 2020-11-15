import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import SaveAltIcon from '@material-ui/icons/SaveAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TabPanel from './TabPanel'
class ImportClassses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false, alert: false, HC3: false, quizz5: false, final: false, ass2: false, coop: false
        };
    }

    CourseChecked = (event) => {
        this.setState({ HC3: true });
    }

    TaskChecked = (event) => {
        this.setState({ ass2: false, quizz5: true, final: true });
    }

    EventChecked = (event) => {
        this.setState({ Coop: true });
    }

    render() {

        const handleClickOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };

        const snackClose = () => {
            this.setState({alert: false})
        }
        const handleImport = (event) => {
            if (this.state.HC3) {
                this.props.commitChanges({
                    added: {
                        title: '4HC3 Lecture',
                        startDate: new Date(2020, 8, 8, 11, 30),//month is zero-indexed
                        endDate: new Date(2020, 8, 8, 12, 20),
                        id: 0,
                        location: 'Virtual',
                        group: "4hc3",
                        notes: "About UI",
                        rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
                    }, changed: null, deleted: null
                });
                this.props.commitChanges({
                    added: {
                        title: '4HC3 Lecture',
                        startDate: new Date(2020, 8, 10, 11, 30),//month is zero-indexed
                        endDate: new Date(2020, 8, 10, 12, 20),
                        id: 1,
                        location: 'Virtual',
                        group: "4hc3",
                        notes: "About UI",
                        rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
                    }, changed: null, deleted: null
                });
                this.props.commitChanges({
                    added: {
                        title: '4TE3 Lecture',
                        startDate: new Date(2020, 8, 11, 8, 30),//month is zero-indexed
                        endDate: new Date(2020, 8, 11, 11, 30),
                        id: 3,
                        location: 'Virtual',
                        group: "4te3",
                        notes: "About Optimization",
                        rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
                    }, changed: null, deleted: null
                });
                this.setState({ alert: true});
            }

            if (this.state.quizz5 && this.state.final && !this.state.ass2) {
                this.props.commitChanges({
                    added: {
                        title: '4HC3 Quizz5',
                        startDate: new Date(2020, 11, 8, 23, 58),//month is zero-indexed
                        endDate: new Date(2020, 11, 8, 23, 59),
                        id: 5,
                        location: 'Virtual',
                        group: "4hc3",
                        notes: "Quizzes about Map API",
                    }, changed: null, deleted: null
                });

                this.props.commitChanges({
                    added: {
                        title: '4HC3 Final',
                        startDate: new Date(2020, 11, 18, 9, 30),//month is zero-indexed
                        endDate: new Date(2020, 11, 18, 12, 0),
                        id: 5,
                        location: 'Virtual',
                        group: "4hc3",
                        notes: "4HC3 Final Exam",
                    }, changed: null, deleted: null
                });
                this.setState({ alert: true });
            }

            if (this.state.Coop) {
                this.props.commitChanges({
                    added: {
                        title: 'Co-op Interview',
                        startDate: new Date(2020, 11, 12, 15, 30),//month is zero-indexed
                        endDate: new Date(2020, 11, 12, 16, 0),
                        id: 5,
                        location: 'Virtual',
                        group: "work",
                        notes: "Interview with Apple.Inc",
                    }, changed: null, deleted: null
                });
                this.setState({ alert: true });
            };
        }

        return (
            <div>
                <IconButton onClick={handleClickOpen} edge="end" color="inherit"><SaveAltIcon /></IconButton>
                <Dialog open={this.state.open} onClose={handleClose}>
                    <DialogTitle><SaveAltIcon /> Import events from other sources</DialogTitle>
                    <DialogContent>
                        <DialogContentText>You can import all your courses, tasks, and/or events from McMaster's websites</DialogContentText>
                        <List>
                            <ListItem >
                                <ListItemText primary="You are signed in as:" />
                                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                                <ListItemText primary="caoh8@mcmaster.ca" />
                            </ListItem>
                        </List>
                        <TabPanel CourseChecked={this.CourseChecked} TaskChecked={this.TaskChecked} EventChecked={this.EventChecked} />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={handleImport}>Import</Button>
                    </DialogActions>
                    <Snackbar open={this.state.alert} autoHideDuration={2000} onClose={snackClose}>
                        <MuiAlert elevation={6} variant="filled" onClose={snackClose} severity="success">Import successed!</MuiAlert>
                    </Snackbar>
                </Dialog>

            </div>
        );
    }
}
export default ImportClassses;