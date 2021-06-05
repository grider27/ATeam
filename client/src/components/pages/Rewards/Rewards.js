import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
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
  rail: {
    height: 15,
    borderRadius: 4,
  },
})(Slider);


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
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
              />
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <button>Reward</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-lg-2">Nelson Muntz</div>
            <div className="col-sm-8 col-lg-8">
              <div className="slide">
              <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
              />
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <button>Reward</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-lg-2">Lisa Simpson</div>
            <div className="col-sm-8 col-lg-8">
              <div className="slide">
              <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
              />
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <button>Reward</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-lg-2">Martin Prince</div>
            <div className="col-sm-8 col-lg-8">
              <div className="slide">
              <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
              />
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <button>Reward</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-lg-2">Ralph Wiggum</div>
            <div className="col-sm-8 col-lg-8">
              <div className="slide">
              <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
              />
              </div>
            </div>
            <div className="col-sm-2 col-lg-2">
              <button>Reward</button>
            </div>
          </div>
  

        
        </div>
      </div>
    </div>
  );
};

export default Rewards;
