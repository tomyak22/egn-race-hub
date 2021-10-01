import { ValueGetterParams } from "ag-grid-community";
import { ChampionshipCalculator } from "./champ-calc";

export const DRIVER_COL_DEF = [
    {
        headerName: 'Driver Name',
        field: 'driver.name'
    },
    {
        headerName: 'Bahrain',
        children: [
            {
                headerName: 'Result',
                field: 'driver.bahrainResult',
                columnGroupShow: ['closed', 'open']
            },
            {
                headerName: 'Points',
                field: 'driver.bahrainPoints',
                columnGroupShow: 'open'
            }
        ]
    },
    {
        headerName: 'France',
        children: [
            {
                headerName: 'Result',
                field: 'driver.franceResult',
                columnGroupShow: ['closed', 'open']
            },
            {
                headerName: 'Points',
                field: 'driver.francePoints',
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