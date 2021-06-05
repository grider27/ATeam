import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value} Reading Goal`;
}

// const [val, setVal]=useState([0,4])

// const updateGoal = (e, data) => {
//   setVal(data)
// }



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

// const handleChange = (event, value) => {
//   // this.setState({ value })
//   if (value === Slider.max)

// };

const Rewards = () => {
  return (
    
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <h1 className="font-weight-bold">Hello Teacher</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2 col-lg-2">Bart Simpson</div>
            <div className="col-sm-8 col-lg-8">
              <div className="slide">
              <BookSlider
                defaultValue={5}
                getAriaValueText={valuetext}
                onChange={(e, value) => {

                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={0}
                max={10}
              />
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
            <Link to="/certificate"> <button>Reward</button></Link>
            </div>
          </div>
          
  

        
        </div>
      </div>
    </div>
  );
};

export default Rewards;
