import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import { Button } from '@material-ui/core';

import { setDate } from '@/store/actions/setting';
import { ISetting } from '@/store/models/setting';

import dayjs from 'dayjs';

import './calendar.less';
import './calendar.scss';

export interface IProps extends RouteComponentProps {
  setting: ISetting;
  setDate(date: number): void;
}

const Page: React.FunctionComponent<IProps> = (props) => {
  const { setting, setDate } = props;

  const { date, workDay, freeDay } = setting;

  const cycle = useMemo(() => workDay + freeDay, [workDay, freeDay]);

  const [now, setNow] = useState(new Date());
  const [key, setKey] = useState(0);
  const [current, setCurrent] = useState(new Date());
  const [selected, setSelected] = useState<Date>();

  const handleChange = useCallback((v: Date) => {
    setSelected(v);
    setCurrent(v);
  }, []);

  const handleCancel = useCallback(() => {
    setKey(key + 1);
    setCurrent(new Date());
    setSelected(undefined);
  }, [date, key]);

  const getTileClassName = useCallback(
    (_props) => {
      const { date: _date, view } = _props;

      if (!date || view !== 'month') {
        return '';
      }

      const t1 = dayjs(new Date(date));
      const t2 = dayjs(_date);
      const diff = Math.abs(t2.diff(t1, 'd'));

      return diff % cycle === 0 ? 'sweet' : '';
    },
    [date]
  );

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  });

  const handleCalc = useCallback(() => {
    setDate(selected.getTime());
    setCurrent(new Date());
    setSelected(undefined);
  }, [selected, key]);

  return (
    <div className="calendar">
      <div className="main">
        <Calendar
          key={key}
          value={current}
          onChange={handleChange}
          tileClassName={getTileClassName}
        />
      </div>
      <div className="info">
        <div className="row">
          <div className="label">Now</div>
          <div className="value">
            {dayjs(now).format('YYYY-MM-DD HH:mm:ss')}
          </div>
        </div>
        <div className="row">
          <div className="label">Work Day</div>
          <div className="value">{workDay}</div>
        </div>
        <div className="row">
          <div className="label">Free Day</div>
          <div className="value">{freeDay}</div>
        </div>
      </div>
      <div className="bottom">
        {!!selected && (
          <>
            <Button variant="outlined" color="secondary" onClick={handleCalc}>
              This is the first working day
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        )}

        <Link to="/setting">
          <Button
            style={{ marginTop: '16px' }}
            variant="outlined"
            color="primary"
          >
            Setting
          </Button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  setting: state.setting,
});

const mapDispatchToProps = (dispatch) => ({
  setDate: (date: number) => dispatch(setDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Page));
