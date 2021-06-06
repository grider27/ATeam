/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Link } from 'react-router-dom';
import API from '../../../utils/API';
import { List, ListItem } from '../../List';

function valuetext(value) {
  return `${value} Reading Goal`;
}

const BookSlider = withStyles({
  root: {
    color: 'blue',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 15,
    borderRadius: 4,
  },
  mark: {
    backgroundColor: 'darkblue',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  rail: {
    height: 15,
    borderRadius: 4,
  },
})(Slider);

const Rewards = () => {
  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  const [students, setStudents] = useState([]);

  function loadStudents() {
    API.getStudents()
      .then((res) =>
        //console.log(res.data)
        setStudents(res.data)
      )
      .catch((err) => console.log(err));
  }

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <h1 className="font-weight-bold">Hello Teacher</h1>
            </div>
          </div>

          {students.length ? (
            <List>
              {students.map((student) => (
                <ListItem key={student._id}>
                  <Link to={'/students/' + student._id}>
                    <strong>{student.name} &emsp;</strong>
                  </Link>
                  <BookSlider
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    onChange={(e, value) => {}}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                  />
                  <Link to="/certificate">
                    {' '}
                    <button>Reward</button>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
