import React from 'react'
import { Dropdown } from 'semantic-ui-react';

const PlayerSelect = props => {

  const mappedPlayers = props.players.map(player => ({
    key: player.full_name,
    value: player,
    text: player.full_name,
  }));

  return (
    <Dropdown
      placeholder='Select Player'
      disabled={mappedPlayers.length < 1 ? true : false}
      fluid
      options={mappedPlayers}
      search
      selection
      {...props}
    />
  );
}

export default PlayerSelect;

