import { ICellRendererParams, ValueGetterParams } from "ag-grid-community";
import { ChampionshipCalculator } from "./champ-calc";

export const DRIVER_COL_DEF = [
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
    //     headerName: 'Brazil',
    //     children: [
    //         {
    //             headerName: 'Result',
    //             field: 'driver.brazil.result',
    //             columnGroupShow: ['closed', 'open'],
    //             cellStyle: (params: any) => {
                    
    //                 if (params.data && params.data.driver.brazil.fastestLap) {
    //                     return { backgroundColor: 'purple', opacity: '75%' }
    //                 }
    //                 return null;
    //             }
    //         },
    //         {
    //             headerName: 'Points',
    //             field: 'driver.brazil.points',
    //             columnGroupShow: 'open'
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
     {
        headerName: 'Silverstone',
        children: [
            {
                headerName: 'Result',
                field: 'driver.silverstone.result',
                columnGroupShow: ['closed', 'open'],
                cellStyle: (params: any) => {
                    
                    if (params.data && params.data.driver.silverstone.fastestLap) {
                        return { backgroundColor: 'purple', opacity: '75%' }
                    }
                    return null;
                }
            },
            {
                headerName: 'Points',
                field: 'driver.silverstone.points',
                columnGroupShow: 'open'
            }
        ]
    },
    {
        headerName: 'Portugal',
        children: [
            {
                headerName: 'Result',
                field: 'driver.portugal.result',
                columnGroupShow: ['closed', 'open'],
                cellStyle: (params: any) => {

                    if (params.data && params.data.driver.portugal.fastestLap) {
                        return { backgroundColor: 'purple', opacity: '75%' }
                    }
                    return null;
                }
            },
            {
                headerName: 'Points',
                field: 'driver.portugal.points',
                columnGroupShow: 'open'
            }
        ]
    },
    {
        headerName: 'Azerbaijan',
        children: [
            {
                headerName: 'Result',
                field: 'driver.baku.result',
                columnGroupShow: ['closed', 'open'],
                cellStyle: (params: any) => {

                    if (params.data && params.data.driver.baku.fastestLap) {
                        return { backgroundColor: 'purple', opacity: '75%' }
                    }
                    return null;
                }
            },
            {
                headerName: 'Points',
                field: 'driver.baku.points',
                columnGroupShow: 'open'
            }
        ]
    },
    {
        headerName: 'Championship Points',
        valueGetter: (params: ValueGetterParams) => ChampionshipCalculator.calcTotalPoints(params)
    }
]