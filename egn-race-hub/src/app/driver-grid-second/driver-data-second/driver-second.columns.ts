import { ICellRendererParams, ValueGetterParams } from "ag-grid-community";
import { ChampionshipCalculator } from "src/app/driver-grid-div-1/driver-data/champ-calc";

export const DRIVER_COL_DEF_2 = [
    {
        headerName: 'Driver Name',
        field: 'driver.name',
        cellRenderer: (params: ICellRendererParams) => {
            const teamLogo = params.data.driver.team ? params.data.driver.team : 'noTeam'
            return  `<span><img class="team-image" src="/assets/${teamLogo}.png"></span>` + params.value
        }
    },
    {
        headerName: 'Bahrain',
        children: [
            {
                headerName: 'Result',
                field: 'driver.bahrain.result',
                columnGroupShow: ['closed', 'open'],
                cellStyle: (params: any) => {
                    
                    if (params.data && params.data.driver.bahrain.fastestLap) {
                        return { backgroundColor: 'purple', opacity: '75%' }
                    }
                    return null;
                }
            },
            {
                headerName: 'Points',
                field: 'driver.bahrain.points',
                columnGroupShow: 'open'
            }
        ]
    },
    {
        headerName: 'France',
        children: [
            {
                headerName: 'Result',
                field: 'driver.france.result',
                columnGroupShow: ['closed', 'open'],
                cellStyle: (params: any) => {
                    
                    if (params.data && params.data.driver.france.fastestLap) {
                        return { backgroundColor: 'purple', opacity: '75%' }
                    }
                    return null;
                }
            },
            {
                headerName: 'Points',
                field: 'driver.france.points',
                columnGroupShow: 'open'
            }
        ]
    },
    {
        headerName: 'Belgium',
        children: [
            {
                headerName: 'Result',
                field: 'driver.belgium.result',
                columnGroupShow: ['closed', 'open'],
                cellStyle: (params: any) => {
                    
                    if (params.data && params.data.driver.belgium.fastestLap) {
                        return { backgroundColor: 'purple', opacity: '75%' }
                    }
                    return null;
                }
            },
            {
                headerName: 'Points',
                field: 'driver.belgium.points',
                columnGroupShow: 'open'
            }
        ]
    },
    // {
    //     headerName: 'Belgium',
    //     children: [
    //         {
    //             headerName: 'Position',
    //             field: 'driver.belgiumResult'
    //         }
    //     ]
    // },
    // {
    //     headerName: 'Brazil',
    //     children: [
    //         {
    //             headerName: 'Position',
    //             field: 'driver.brazilResult'
    //         }
    //     ]
    // },
    // {
    //     headerName: 'Austria',
    //     children: [
    //         {
    //             headerName: 'Position',
    //             field: 'driver.austriaResult'
    //         }
    //     ]
    // },
    // {
    //     headerName: 'Silverstone',
    //     children: [
    //         {
    //             headerName: 'Position',
    //             field: 'driver.silverstoneResult'
    //         }
    //     ]
    // },
    // {
    //     headerName: 'Portugal',
    //     children: [
    //         {
    //             headerName: 'Position',
    //             field: 'driver.portugalResult'
    //         }
    //     ]
    // },
    // {
    //     headerName: 'Azerbaijan',
    //     children: [
    //         {
    //             headerName: 'Position',
    //             field: 'driver.azerbaijanResult'
    //         }
    //     ]
    // },
    {
        headerName: 'Championship Points',
        valueGetter: (params: ValueGetterParams) => ChampionshipCalculator.calcTotalPoints(params)
    }
]