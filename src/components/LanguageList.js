import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
// import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: 30,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LanguageList({ setLanguageList, listData }) {
  const classes = useStyles();

  const handlePlusOne = (key) => (event) => {
    setLanguageList(listData.incrementCount(key));
  };

  const handleDelete = (key) => (event) => {
    setLanguageList(listData.remove(key));
  };

  return (
    <List className={classes.root}>
      {listData.map(({ label, key, count }) => {

        return (
          <ListItem key={key} role={undefined} dense button /* onClick={handleToggle(key) }*/>
            <ListItemAvatar>
              <Avatar>
                {count}
              </Avatar>
            </ListItemAvatar>
            <ListItemText id={key} primary={label} />
            <IconButton aria-label="plus one" onClick={handlePlusOne(key)}>
              <Avatar>
                +1
              </Avatar>
            </IconButton>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={handleDelete(key)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
