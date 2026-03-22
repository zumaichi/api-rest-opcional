import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import EditIcon from '@mui/icons-material/Edit';

import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;

}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character} = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{character.rating}</Avatar>}
        title={character.name}
        subheader={character.address}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {character.description}
          </Typography>
        </div>
      </CardContent>

    </Card>
  );
};
