import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Selects from './Selects.jsx'
import TextField from '@material-ui/core/TextField';
import { pascalCase, duplicateTitle } from '../utils/helperFunctions.util.js'

const styles = theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#eee',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#eee',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
    color: '#eee',
  },
  details: {
    alignItems: 'center',
    color: '#eee',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: '#eee',
  },
  panel: {
    background: 'linear-gradient(45deg, #37474F 30%, #455A64 90%)',
  },
  input: {
    color: "#eee",
  }
});


//need to grab name of selected tree component and render to options panel
class DetailedExpansionPanel extends Component {
  render () {
    const { treeData, classes, selectedComponent, typeSelected, parentSelected, availableParents, selectType, selectParent, updateNameAndType,
      changeNameInput, setNameToChange, selectComponent } = this.props;
    return (
      !!treeData.length && <div className={classes.root}>
        <ExpansionPanel 
          defaultExpanded
          className={classes.panel}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
            <div className={classes.column}>
              <Typography className={classes.heading}>
                {selectedComponent && selectedComponent.title ? selectedComponent.title : 'Select a component'}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>Options Panel</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column}>
              <Selects typeSelected={typeSelected} selectedComponent={selectedComponent} parentSelected={parentSelected} availableParents={availableParents} selectType={selectType} selectParent={selectParent} updateNameAndType={updateNameAndType}/>
            </div>
            
            <div className={classNames(classes.column, classes.helper)}>
              <TextField
                required
                id="standard-with-placeholder"
                label="Change Component Name"
                placeholder="Change Name"
                className={classes.textField}
                margin="normal"
                onChange={(e) => {
                  setNameToChange(e.target.value)}}
                value={changeNameInput}
                InputProps={{
                  className: classes.input
                }}
              />  
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button variant="contained" color="primary" 
              onClick={() => {
                const title = pascalCase(changeNameInput);
                updateNameAndType(title || "Untitled" + selectedComponent.id, typeSelected || "Simple Screen", selectedComponent)

              }}
            >
              Save
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
    );
  }
}

DetailedExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);