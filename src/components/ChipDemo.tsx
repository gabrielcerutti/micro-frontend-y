import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    marginTop: 10,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ChipDemo = () => {
  const classes = useStyles();

  const [chipData, setChipData] = useState([
    { key: 0, label: 'The Beach Boys' },
    { key: 1, label: 'The Doors' },
    { key: 2, label: 'The Rolling Stones' },
    { key: 3, label: 'The Beatles' },
    { key: 4, label: 'The Who' },
  ]);

  const handleDelete = (chipToDelete: any) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'The Beatles') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'The Beatles' ? undefined : handleDelete(data)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
};

export default ChipDemo;
