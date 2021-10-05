import { DriverPointsMapper } from "src/app/driver-grid-div-1/driver-data/driver-points-mapper";


export const DRIVER_DATA_3 = [
    {
        driver: {
            name: 'Brett',
            team: 'mercedes',
            bahrain: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false,
            },
            france: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false
            },
            belgium: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Aidon',
            team: 'mercedes',
            bahrain: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            france: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
            belgium: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Bmac',
            team: 'haas',
            bahrain: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3'),
                fastestLap: false,
            },
            france: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
                fastestLap: false
            },
            belgium: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Pazzo',
            team: 'haas',
            bahrain: {
                result: 'P12',
                points: DriverPointsMapper.mapDriverPoints('P12'),
                fastestLap: true,
            },
            france: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
                fastestLap: false
            },
            belgium: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2') + 1,
                fastestLap: true
            },
        }
    },
    {
        driver: {
            name: 'Chaisy',
            team: 'aston-martin',
            bahrain: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false,
            },
            france: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false
            },
            belgium: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'DJ',
            team: 'aston-martin',
            bahrain: {
                result: 'P16',
                points: DriverPointsMapper.mapDriverPoints('P16'),
                fastestLap: false,
            },
            france: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
            belgium: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Adsy',
            team: 'alfa-romeo',
            bahrain: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
                fastestLap: false,
            },
            france: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'BigM',
            team: 'alfa-romeo',
            bahrain: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false,
            },
            france: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false
            },
            belgium: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Dave',
            team: 'red-bull',
            bahrain: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false,
            },
            france: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Dolphin',
            team: 'red-bull',
            bahrain: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false,
            },
            france: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false
            },
            belgium: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Ryze',
            team: 'alpine',
            bahrain: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false,
            },
            france: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false
            },
            belgium: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Jack',
            team: 'alpine',
            bahrain: {
                result: 'P17',
                points: DriverPointsMapper.mapDriverPoints('P17'),
                fastestLap: false,
            },
            france: {
                result: 'P16',
                points: DriverPointsMapper.mapDriverPoints('P16'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Vin',
            team: 'mclaren',
            bahrain: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            france: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Spenzeman',
            team: 'mclaren',
            bahrain: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            france: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false
            },
            belgium: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Rbate',
            team: 'ferrari',
            bahrain: {
                result: 'P14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
                fastestLap: false,
            },
            france: {
                result: 'P14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
                fastestLap: false
            },
            belgium: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Kizza',
            team: 'ferrari',
            bahrain: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false,
            },
            france: {
                result: 'P12',
                points: DriverPointsMapper.mapDriverPoints('P12'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Mon',
            team: 'alpha-tauri',
            bahrain: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false,
            },
            france: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
            belgium: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Squid',
            team: 'alpha-tauri',
            bahrain: {
                result: 'P15',
                points: DriverPointsMapper.mapDriverPoints('P15'),
                fastestLap: false,
            },
            france: {
                result: 'P15',
                points: DriverPointsMapper.mapDriverPoints('P15'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Charlesy',
            team: 'williams',
            bahrain: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false,
            },
            france: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'vDBT',
            team: 'williams',
            bahrain: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
                fastestLap: false,
            },
            france: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3') + 1,
                fastestLap: true
            },
            belgium: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Jiv',
            bahrain: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            france: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
]
