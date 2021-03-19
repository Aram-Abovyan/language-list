import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(3),
  },
  textField: {
    height: '6.5ch',
    marginRight: '3ch',
  },
  button: {
    padding: 15,
  },
}));

export default function Input({setLanguageList, listData}) {
  const classes = useStyles();

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
  }

  const handleClick = () => {
    setLanguageList(listData.add(value));
    setValue('');
  }

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        id="outlined-basic"
        label="Language"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        Add
      </Button>
    </div>
  );
}