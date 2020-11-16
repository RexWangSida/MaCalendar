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
            empty: false, open: false, alert: false, lec4E03: false, lec4G06A: false, lec4X03: false, ass2: false, ms1: false, ms2: false, coop: false, resume: false, help: false
        };
    }

    Lec4E03Checked = (event) => {
        this.setState({ lec4E03: !this.state.Lec4E03 });
    }

    Lec4G06Checked = (event) => {
        this.setState({ lec4G06A: !this.state.Lec4G06A });
    }

    Lec4X03Checked = (event) => {
        this.setState({ lec4X03: !this.state.Lec4X03 });
    }

    Ass1Checked = (event) => {
        this.setState({ ass1: !this.state.ass1 });
    }

    Ass2Checked = (event) => {
        this.setState({ ass2: !this.state.ass2 });
    }

    Ms1Checked = (event) => {
        this.setState({ ms1: !this.state.ms1 });
    }

    Ms2Checked = (event) => {
        this.setState({ ms2: !this.state.ms2 });
    }

    CoopChecked = (event) => {
        this.setState({ coop: !this.state.coop });
    }

    ResumeChecked = (event) => {
        this.setState({ resume: !this.state.resume });
    }

    HelpChecked = (event) => {
        this.setState({ help: !this.state.help });
    }

    render() {
        const schedule4E03L1 = {
            title: '4E03 Lecture',
            startDate: new Date(2020, 8, 8, 16, 30),//month is zero-indexed
            endDate: new Date(2020, 8, 8, 17, 20),
            location: 'Virtual',
            group: "4e03",
            notes: "About Computer",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4E03L2 = {
            title: '4E03 Lecture',
            startDate: new Date(2020, 8, 10, 16, 30),//month is zero-indexed
            endDate: new Date(2020, 8, 10, 17, 20),
            location: 'Virtual',
            group: "4e03",
            notes: "About Computer",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4E03L3 = {
            title: '4E03 Lecture',
            startDate: new Date(2020, 8, 11, 16, 30),//month is zero-indexed
            endDate: new Date(2020, 8, 11, 17, 20),
            location: 'Virtual',
            group: "4e03",
            notes: "About Computer",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4G06L1 = {
            title: '4G06A Lecture',
            startDate: new Date(2020, 8, 8, 17, 30),//month is zero-indexed
            endDate: new Date(2020, 8, 8, 18, 20),
            location: 'Virtual',
            group: "4g06",
            notes: "Capstone",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4G06L2 = {
            title: '4G06A Lecture',
            startDate: new Date(2020, 8, 10, 17, 30),//month is zero-indexed
            endDate: new Date(2020, 8, 10, 18, 20),
            location: 'Virtual',
            group: "4g06",
            notes: "Capstone",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4G06L3 = {
            title: '4G06A Lecture',
            startDate: new Date(2020, 8, 11, 17, 30),//month is zero-indexed
            endDate: new Date(2020, 8, 11, 18, 20),
            location: 'Virtual',
            group: "4g06",
            notes: "Capstone",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4X03L1 = {
            title: '4X03 Lecture',
            startDate: new Date(2021, 0, 5, 11, 30),//month is zero-indexed
            endDate: new Date(2021, 0, 5, 12, 20),
            location: 'Virtual',
            group: "4x03",
            notes: "About Computer",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4X03L2 = {
            title: '4X03 Lecture',
            startDate: new Date(2021, 0, 7, 11, 30),//month is zero-indexed
            endDate: new Date(2021, 0, 7, 12, 20),
            location: 'Virtual',
            group: "4x03",
            notes: "About Computer",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const schedule4X03L3 = {
            title: '4X03 Lecture',
            startDate: new Date(2021, 0, 8, 11, 30),//month is zero-indexed
            endDate: new Date(2021, 0, 8, 12, 20),
            location: 'Virtual',
            group: "4x03",
            notes: "About Computer",
            rRule: "RRULE:FREQ=WEEKLY;INTERVAL=1;COUNT=12"
        };

        const ass2 = {
            title: 'Assignment 2',
            startDate: new Date(2020, 10, 13, 17, 58),//month is zero-indexed
            endDate: new Date(2020, 10, 13, 17, 59),
            location: 'Anywhere',
            group: "assignment",
            notes: "DOM Implementation"
        }

        const ms1 = {
            title: 'Milestone 1',
            startDate: new Date(2020, 10, 7, 17, 58),//month is zero-indexed
            endDate: new Date(2020, 10, 7, 17, 59),
            location: 'Anywhere',
            group: "milestone",
            notes: "Proposal"
        }

        const ms2 = {
            title: 'Milestone 3',
            startDate: new Date(2020, 10, 21, 17, 58),//month is zero-indexed
            endDate: new Date(2020, 10, 21, 17, 59),
            location: 'Anywhere',
            group: "milestone",
            notes: "Contract"
        }

        const coop = {
            title: 'Co-op Interview',
            startDate: new Date(2020, 11, 9, 10, 30),//month is zero-indexed
            endDate: new Date(2020, 11, 9, 11, 0),
            location: 'Home',
            group: "work",
            notes: "Interview with Bell"
        }

        const resume = {
            title: 'Resume and Cover Letter Writing',
            startDate: new Date(2020, 11, 2, 13, 30),//month is zero-indexed
            endDate: new Date(2020, 11, 2, 14, 0),
            location: 'Home',
            group: "work",
            notes: "Resume help"
        }

        const help = {
            title: 'COVID-19 Help',
            startDate: new Date(2020, 11, 13, 15, 30),//month is zero-indexed
            endDate: new Date(2020, 11, 13, 16, 0),
            location: 'Home',
            group: "service",
            notes: "Mental health care"
        }

        const handleClickOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };

        const snackClose = () => {
            this.setState({ alert: false, empty: false });

        }

        const handleImport = (event) => {
            if (!this.state.lec4E03 && !this.state.lec4G06A && !this.state.lec4X03 && !this.state.ass2 && !this.state.ms1 && !this.state.ms2 && !this.state.coop && !this.state.resume && !this.state.help) {
                this.setState({ empty: true });
            }

            if (this.state.lec4E03 && !this.state.lec4G06A && !this.state.lec4X03) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: schedule4E03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L3, changed: null, deleted: null });
                this.setState({ lec4E03: false });
                this.setState({ open: false });
            }
            if (!this.state.lec4E03 && this.state.lec4G06A && !this.state.lec4X03) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: schedule4G06L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L3, changed: null, deleted: null });
                this.setState({ lec4G06A: false });
                this.setState({ open: false });
            }
            if (!this.state.lec4E03 && !this.state.lec4G06A && this.state.lec4X03) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: schedule4X03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L3, changed: null, deleted: null });
                this.setState({ lec4X03: false });
                this.setState({ open: false });
            }
            if (this.state.lec4E03 && this.state.lec4G06A && !this.state.lec4X03) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: schedule4E03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L3, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L3, changed: null, deleted: null });
                this.setState({ lec4E03: false });
                this.setState({ lec4G06A: false });
                this.setState({ open: false });
            }
            if (this.state.lec4E03 && !this.state.lec4G06A && this.state.lec4X03) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: schedule4E03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L3, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L3, changed: null, deleted: null });
                this.setState({ lec4E03: false });
                this.setState({ lec4X03: false });
                this.setState({ open: false });
            }
            if (!this.state.lec4E03 && this.state.lec4G06A && this.state.lec4X03) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: schedule4G06L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L3, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L3, changed: null, deleted: null });
                this.setState({ lec4G06A: false });
                this.setState({ lec4X03: false });
                this.setState({ open: false });
            }
            if (this.state.lec4E03 && this.state.lec4G06A && this.state.lec4X03) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: schedule4E03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4E03L3, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4G06L3, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L1, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L2, changed: null, deleted: null });
                this.props.commitChanges({ added: schedule4X03L3, changed: null, deleted: null });
                this.setState({ lec4E03: false });
                this.setState({ lec4G06A: false });
                this.setState({ lec4X03: false });
                this.setState({ open: false });
            }



            if (this.state.ass2 && !this.state.ms1 && !this.state.ms2) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: ass2, changed: null, deleted: null });
                this.setState({ ass2: false });
                this.setState({ open: false });
            }
            if (!this.state.ass2 && this.state.ms1 && !this.state.ms2) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: ms1, changed: null, deleted: null });
                this.setState({ ms1: false });
                this.setState({ open: false });
            }
            if (!this.state.ass2 && !this.state.ms1 && this.state.ms2) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: ms2, changed: null, deleted: null });
                this.setState({ ms2: false });
                this.setState({ open: false });
            }
            if (this.state.ass2 && this.state.ms1 && !this.state.ms2) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: ass2, changed: null, deleted: null });
                this.props.commitChanges({ added: ms1, changed: null, deleted: null });
                this.setState({ ass2: false });
                this.setState({ ms1: false });
                this.setState({ open: false });
            }
            if (this.state.ass2 && !this.state.ms1 && this.state.ms2) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: ass2, changed: null, deleted: null });
                this.props.commitChanges({ added: ms2, changed: null, deleted: null });
                this.setState({ ass2: false });
                this.setState({ ms2: false });
                this.setState({ open: false });
            }
            if (!this.state.ass2 && this.state.ms1 && this.state.ms2) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: ms1, changed: null, deleted: null });
                this.props.commitChanges({ added: ms2, changed: null, deleted: null });
                this.setState({ ms1: false });
                this.setState({ ms2: false });
                this.setState({ open: false });
            }
            if (this.state.ass2 && this.state.ms1 && this.state.ms2) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: ass2, changed: null, deleted: null });
                this.props.commitChanges({ added: ms1, changed: null, deleted: null });
                this.props.commitChanges({ added: ms2, changed: null, deleted: null });
                this.setState({ ass2: false });
                this.setState({ ms1: false });
                this.setState({ ms2: false });
                this.setState({ open: false });
            }



            if (this.state.coop && !this.state.resume && !this.state.help) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: coop, changed: null, deleted: null });
                this.setState({ coop: false });
                this.setState({ open: false });
            }
            if (!this.state.coop && this.state.resume && !this.state.help) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: resume, changed: null, deleted: null });
                this.setState({ resume: false });
                this.setState({ open: false });

            }
            if (!this.state.coop && !this.state.resume && this.state.help) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: help, changed: null, deleted: null });
                this.setState({ help: false });
                this.setState({ open: false });
            }
            if (this.state.coop && this.state.resume && !this.state.help) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: coop, changed: null, deleted: null });
                this.props.commitChanges({ added: resume, changed: null, deleted: null });
                this.setState({ coop: false });
                this.setState({ resume: false });
                this.setState({ open: false });
            }
            if (this.state.coop && !this.state.resume && this.state.help) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: coop, changed: null, deleted: null });
                this.props.commitChanges({ added: help, changed: null, deleted: null });
                this.setState({ coop: false });
                this.setState({ help: false });
                this.setState({ open: false });
            }
            if (!this.state.coop && this.state.resume && this.state.help) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: resume, changed: null, deleted: null });
                this.props.commitChanges({ added: help, changed: null, deleted: null });
                this.setState({ resume: false });
                this.setState({ help: false });
                this.setState({ open: false });
            }
            if (this.state.coop && this.state.resume && this.state.help) {
                this.setState({ empty: false });
                this.setState({ alert: true });
                this.props.commitChanges({ added: coop, changed: null, deleted: null });
                this.props.commitChanges({ added: resume, changed: null, deleted: null });
                this.props.commitChanges({ added: help, changed: null, deleted: null });
                this.setState({ coop: false });
                this.setState({ resume: false });
                this.setState({ help: false });
                this.setState({ open: false });
            }
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
                        <TabPanel Lec4E03Checked={this.Lec4E03Checked} Lec4G06Checked={this.Lec4G06Checked} Lec4X03Checked={this.Lec4X03Checked} Ass1Checked={this.Ass1Checked} Ass2Checked={this.Ass2Checked} Ms1Checked={this.Ms1Checked} Ms2Checked={this.Ms2Checked} CoopChecked={this.CoopChecked} ResumeChecked={this.ResumeChecked} HelpChecked={this.HelpChecked} />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={handleImport}>Import</Button>
                    </DialogActions>
                    <Snackbar open={this.state.empty} autoHideDuration={2000} onClose={snackClose}>
                        <MuiAlert elevation={6} variant="filled" onClose={snackClose} severity="warning">Please select something to import!</MuiAlert>
                    </Snackbar>
                </Dialog>
                <Snackbar open={this.state.alert} autoHideDuration={2000} onClose={snackClose}>
                    <MuiAlert elevation={6} variant="filled" onClose={snackClose} severity="success">Import successed!</MuiAlert>
                </Snackbar>
            </div>
        );
    }
}
export default ImportClassses;
