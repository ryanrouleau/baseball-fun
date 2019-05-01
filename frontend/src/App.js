import React from 'react';
import { Header, Dropdown, Grid, Statistic } from 'semantic-ui-react';

import DataSelect from './DataSelect';
import PlayerSelect from './PlayerSelect';
import SortableTable from './SortableTable';

const hitLimits = [
  { key: 0, text: 0, value: 0},
  { key: 20, text: 20, value: 20},
  { key: 40, text: 40, value: 40},
  { key: 80, text: 80, value: 80},
  { key: 120, text: 120, value: 120},
  { key: 180, text: 180, value: 180},
]

class App extends React.Component {

 state = {
    data: [],
    hitLimit: 40,
    selectedPlayer: null, 
  }

  render() {

    const filteredData = this.state.data.filter(player => player.hits > this.state.hitLimit);

    const selectedPlayer = this.state.selectedPlayer;

    return (
      <>
        <div style={{textAlign: 'center'}}>
          <Header size="huge" style={{paddingTop: '58px', paddingBottom: '36px'}}>Adjusted Slugging Percentage (ASLG) Search</Header>
          <DataSelect style={{marginBottom: '22px'}} onChange={(e, data) => this.setState({data: data.value})} />

          <br />
          <span>
            Inlcude players with more than 
            <Dropdown
              inline
              defaultValue={40}
              onChange={(e, data) => this.setState({hitLimit: data.value})}
              options={hitLimits}
              style={{paddingLeft: '8px', paddingRight: '6px'}}
            />
            hits.
          </span>
        </div>

        <Grid columns={2} divided style={{marginTop: '32px'}}>
          <Grid.Row>
            <Grid.Column>

              <div style={{width: '320px', margin: 'auto', marginTop: '22px'}}>
                <PlayerSelect players={filteredData} onChange={(e, data) => this.setState({selectedPlayer: data.value})} />
              </div>

              { this.state.selectedPlayer && 
                  <div style={{textAlign: 'center'}}>
                    <br />
                    <br />
                    <Statistic>
                      <Statistic.Value>{selectedPlayer.aslg}</Statistic.Value>
                      <br />
                      <Statistic.Label>Adjusted SLG</Statistic.Label>
                    </Statistic>
                    <br />
                    <br />
                    <Statistic>
                      <Statistic.Value>{selectedPlayer.slg}</Statistic.Value>
                      <br />
                      <Statistic.Label>Classic SLG</Statistic.Label>
                    </Statistic>
                    <br />
                    <br />
                    <Statistic>
                      <Statistic.Value>{selectedPlayer.total_bases}</Statistic.Value>
                      <br />
                      <Statistic.Label>Total Bases</Statistic.Label>
                    </Statistic>
                    <br />
                    <br />
                    <Statistic>
                      <Statistic.Value>{selectedPlayer.hits}</Statistic.Value>
                      <br />
                      <Statistic.Label>Hits</Statistic.Label>
                    </Statistic>
                    <br />
                    <br />
                    <Statistic>
                      <Statistic.Value>{selectedPlayer.at_bats}</Statistic.Value>
                      <br />
                      <Statistic.Label>At Bats</Statistic.Label>
                    </Statistic>
                  </div>
              }
            
            </Grid.Column>
            <Grid.Column>
              <div style={{marginRight: '14px'}}>
                { filteredData.length > 0 && 
                  <>
                    Click the column headers to sort
                    <br />
                    { filteredData && <SortableTable players={filteredData} />}
                  </>
                }
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </>
    );
  }
}

export default App;
