import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

import { TextField, Button } from '@material-ui/core';

import { setWorkDay, setFreeDay } from '@/store/actions/setting';
import { ISetting } from '@/store/models/setting';

import './setting.scss';

export interface IProps extends RouteComponentProps {
  setting: ISetting;
  setWorkDay: (value: number) => void;
  setFreeDay: (value: number) => void;
}

const Page: React.FunctionComponent<IProps> = (props) => {
  const { setting, setWorkDay, setFreeDay, history } = props;
  const { workDay, freeDay } = setting;

  const [currentWorkDay, setCurrentWorkDay] = useState(workDay + '');
  const [currentFreeDay, setCurrentFreeDay] = useState(freeDay + '');

  const handleSubmit = useCallback(() => {
    setWorkDay(parseInt(currentWorkDay) || 0);
    setFreeDay(parseInt(currentFreeDay) || 0);
    history.goBack();
  }, [currentWorkDay, currentFreeDay]);

  return (
    <div className="setting">
      <div className="title">Sweet Calendar</div>
      <div className="form">
        <div className="field">
          <TextField
            required
            id="work-day"
            label="Work Day"
            value={currentWorkDay}
            onChange={(e) => setCurrentWorkDay(e.target.value)}
            type="number"
          />
        </div>
        <div className="field">
          <TextField
            required
            id="free-day"
            label="Free Day"
            value={currentFreeDay}
            onChange={(e) => setCurrentFreeDay(e.target.value)}
            type="number"
          />
        </div>
      </div>
      <div className="bottom">
        <Button variant="outlined" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  setting: state.setting,
});

const mapDispatchToProps = (dispatch) => ({
  setWorkDay: (value: number) => dispatch(setWorkDay(value)),
  setFreeDay: (value: number) => dispatch(setFreeDay(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Page));
