import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class InportClassses extends React.Component {
    constructor(props) {
        super(props);
        this.eventsData = []
        this.event = {
            startDate: '',
            endDate: '',
            title: '',
            group: '',
            description: ""
        }
    }
    render() {
        return (
            <div>
                <IconButton onClick={handleClickOpen} edge="end" color="inherit"><SaveAltIcon /></IconButton>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Import events from other sources</DialogTitle>
                    <DialogContent>
                        <DialogContentText>You can import all your courses, tasks, and events from McMaster's websites</DialogContentText>
                        <List>
                            <ListItem >
                                <ListItemText primary="You are signed in as" />
                                <ListItemIcon> <AccountCircleIcon /> </ListItemIcon>
                                <ListItemText primary="caoh8@mcmaster.ca" />
                            </ListItem>
                            <Divider />
                        </List>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Mosaic" {...a11yProps(0)} />
                            <Tab label="Avenue" {...a11yProps(1)} />
                            <Tab label="OscarPlus" {...a11yProps(2)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography className={classes.heading}>Select Terms</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="2020 Fall" color="primary" />} label="2020 Fall" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="2021 Winter" color="primary" />} label="2021 Winter" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                                    <Typography className={classes.heading}>Select Courses</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="4HC3" color="primary" />} label="4HC3" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="4A03" color="primary" />} label="4A03" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="4G06" color="primary" />} label="4G06" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography className={classes.heading}>Select Courses</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="4HC3" color="primary" />} label="4HC3" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="4A03" color="primary" />} label="4A03" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="4G06" color="primary" />} label="4G06" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                                    <Typography className={classes.heading}>Select Tasks</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Assignment 3" color="primary" />} label="Assignment 3" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Quizz 5" color="primary" />} label="Quizz 5" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Final Exam" color="primary" />} label="Final Exam" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography className={classes.heading}>Select Categories</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Careers" color="primary" />} label="Careers" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="International Student Services" color="primary" />} label="International Student Services" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Academic Skills" color="primary" />} label="Academic Skills" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                                    <Typography className={classes.heading}>Select Events</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup row>
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Career Planning Group" color="primary" />} label="Career Planning Group" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Experience Building" color="primary" />} label="Experience Building" />
                                        <FormControlLabel control={<Checkbox checked={False} onChange={handleChange} name="Resume and Cover Letter Writing" color="primary" />} label="Resume Cover Letter Writing" />
                                    </FormGroup>
                                </AccordionDetails>
                            </Accordion>
                        </TabPanel>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Import
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default InportClassses;