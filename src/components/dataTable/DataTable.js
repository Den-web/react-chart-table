import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './DataTable.css';
import Cartogram from "../Cartogram/Cartogram";

function onAfterSaveCell(row, cellName, cellValue) {
    alert(`Save cell ${cellName} with value ${cellValue}`);

    let rowStr = '';
    for (const prop in row) {
        rowStr += prop + ': ' + row[prop] + '\n';
    }

    alert('Thw whole row :\n' + rowStr);

}

function onBeforeSaveCell(row, cellName, cellValue) {
    // You can do any validation on here for editing value,
    // return false for reject the editing
    return true;
}

const cellEditProp = {
    mode: 'click',
    blurToSave: true,
    beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sortName: undefined,
            sortOrder: undefined
        };

        this.options = {
            onSortChange: this.onSortChange.bind(this),
            onSelectAll: this.onSelectAll.bind(this)
            // deleteBtn: this.createCustomDeleteButton.bind(this)
        };
    }

    onSortChange(sortName, sortOrder) {
        this.setState({
            sortName,
            sortOrder
        });
    }

    createCustomDeleteButton = (onClick) => {
        return (
            <button style={{color: 'red'}} onClick={onClick}>Delete rows</button>
        );
    };

    onSelectAll = (isSelected) => {
        if (isSelected) {
            return this.props.map(row => row.airport);
        } else {
            return [];
        }
    };

    render() {
        const { data } = this.props;
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelectAll: this.onSelectAll,
            selected: [], // default select on table
            bgColor: 'rgb(238, 193, 213)',
        };

        const fetchInfo = {
            dataTotalSize: 50
        };

        return <div>

            <Cartogram data={data} />

            <BootstrapTable hover
                            keyBoardNav
                            deleteRow
                            pagination
                            insertRow
                            data={data}
                            ref='table'
                            search={true}
                            options={this.options}
                            tableContainerClass='table-responsive'
                            selectRow={selectRowProp}
                            cellEdit={cellEditProp}
                            fetchInfo={fetchInfo}
                            expandableRow={this.isExpandableRow}>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='year' dataSort
                                   autoValue>Year</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='month'>Month</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='carrier'>Carrier</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='carrier_name'>Carrier
                    name</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='airport' dataSort
                                   isKey>Airport</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='350px' dataField='airport_name'>Airport
                    name</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='arr_flights'>Arr
                    flights</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='arr_del15'>Arr del15</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='carrier_ct'>Carrier ct</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='weather_ct'>Weather ct</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='nas_ct'>Nas ct</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='security_ct'>Security
                    ct</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='130px' dataField='late_aircraft_ct'>Late
                    aircraft</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='130px' dataField='arr_cancelled'>Arr
                    cancelled</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='130px' dataField='arr_diverted'>Arr
                    diverted</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='arr_delay'>Arr delay</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='130px' dataField='carrier_delay'>Carrier
                    delay</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='weather_delay'>Weather
                    delay</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='90px' dataField='nas_delay'>Nas delay</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='130px' dataField='security_delay'>Security
                    delay</TableHeaderColumn>
                <TableHeaderColumn dataAlign='center' width='150px' dataField='late_aircraft_delay'>Late aircraft
                    delay</TableHeaderColumn>

            </BootstrapTable>

        </div>;
    }
}

export default Table;
