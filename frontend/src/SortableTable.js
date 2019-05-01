import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

export default class TableExampleSortable extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.players !== this.props.players) {
      this.setState({
        data: this.props.players,
        column: null,
        direction: null,
      });
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.players,
      column: null,
      direction: null,
    });
  }

  state = {
    column: null,
    data: [],
    direction: null,
  }

  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  render() {
    const { column, data, direction } = this.state

    return (
      <Table sortable celled fixed style={this.props.style}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={column === 'full_name' ? direction : null}
              onClick={this.handleSort('full_name')}
            >
              Name
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'aslg' ? direction : null}
              onClick={this.handleSort('aslg')}
            >
              ASLG
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'slg' ? direction : null}
              onClick={this.handleSort('slg')}
            >
              SLG
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'total_bases' ? direction : null}
              onClick={this.handleSort('total_bases')}
            >
              Total Bases
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'hits' ? direction : null}
              onClick={this.handleSort('hits')}
            >
              Hits
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={column === 'at_bats' ? direction : null}
              onClick={this.handleSort('at_bats')}
            >
              At Bats 
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.map(data, ({ full_name, aslg, slg, total_bases, hits, at_bats }) => (
            <Table.Row key={full_name}>
              <Table.Cell>{full_name}</Table.Cell>
              <Table.Cell>{aslg}</Table.Cell>
              <Table.Cell>{slg}</Table.Cell>
              <Table.Cell>{total_bases}</Table.Cell>
              <Table.Cell>{hits}</Table.Cell>
              <Table.Cell>{at_bats}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}