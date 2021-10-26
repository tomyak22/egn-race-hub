import { DriverPointsMapper } from "./driver-points-mapper";

export const DRIVER_DATA = [
    {
        driver: {
            name: 'Bambiee',
            team: 'mercedes',
            bahrain: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
                fastestLap: false,
            },
            france: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
                fastestLap: false
            },
            belgium: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false
            },
            silverstone: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Blink',
            team: 'mercedes',
            bahrain: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false
            },
            france: {
                result: 'P12',
                points: DriverPointsMapper.mapDriverPoints('P12'),
                fastestLap: true,
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Simo',
            team: 'haas',
            bahrain: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false,
            },
            france: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false,
            },
            belgium: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Hippo',
            team: 'haas',
            bahrain: {
                result: 'P16',
                points: DriverPointsMapper.mapDriverPoints('P16'),
                fastestLap: false,
            },
            france: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P12',
                points: DriverPointsMapper.mapDriverPoints('P12'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Nodsti',
            team: 'aston-martin',
            bahrain: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3'),
                fastestLap: false,
            },
            france: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false,
            },
            belgium: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Midas',
            team: 'aston-martin',
            bahrain: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false,
            },
            france: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Hawto',
            team: 'alfa-romeo',
            bahrain: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false,
            },
            france: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            silverstone: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Sidepod',
            team: 'alfa-romeo',
            bahrain: {
                result: 'P15',
                points: DriverPointsMapper.mapDriverPoints('P15'),
                fastestLap: false,
            },
            france: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            silverstone: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Danger',
            team: 'red-bull',
            bahrain: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false,
            },
            france: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false,
            },
            belgium: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Crayon',
            team: 'red-bull',
            bahrain: {
                result: 'P17',
                points: DriverPointsMapper.mapDriverPoints('P17'),
                fastestLap: false,
            },
            france: {
                result: 'P16',
                points: DriverPointsMapper.mapDriverPoints('P16'),
                fastestLap: false,
            },
            belgium: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false,
            },
            silverstone: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Polish',
            team: 'alpine',
            bahrain: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false,
            },
            france: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false,
            },
            belgium: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4') + 1,
                fastestLap: true,
            },
            silverstone: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Hawkes',
            team: 'alpine',
            bahrain: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: true,
            },
            france: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
                fastestLap: false,
            },
            belgium: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1') + 1,
                fastestLap: true
            },
        }
    },
    {
        driver: {
            name: 'Tacticz',
            team: 'mclaren',
            bahrain: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            france: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            silverstone: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Kwok',
            team: 'mclaren',
            bahrain: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            france: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false,
            },
            belgium: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P15',
                points: DriverPointsMapper.mapDriverPoints('P15'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Joggles',
            team: 'ferrari',
            bahrain: {
                result: 'P12',
                points: DriverPointsMapper.mapDriverPoints('P12'),
                fastestLap: false,
            },
            france: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false,
            },
            belgium: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Pump',
            team: 'ferrari',
            bahrain: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
                fastestLap: false,
            },
            france: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false,
            },
            belgium: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Mort',
            team: 'alpha-tauri',
            bahrain: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false,
            },
            france: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3'),
                fastestLap: false,
            },
            belgium: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Chizle',
            team: 'alpha-tauri',
            bahrain: {
                result: 'P14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
                fastestLap: false,
            },
            france: {
                result: 'P14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
                fastestLap: false,
            },
            belgium: {
                result: 'P12',
                points: DriverPointsMapper.mapDriverPoints('P12'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Damog',
            team: 'williams',
            bahrain: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false,
            },
            france: {
                result: 'P17',
                points: DriverPointsMapper.mapDriverPoints('P17'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            silverstone: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'ToysRUs',
            team: 'williams',
            bahrain: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            france: {
                result: 'P18',
                points: DriverPointsMapper.mapDriverPoints('P18'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            silverstone: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Nicman',
            team: 'mclaren',
            bahrain: {
                result:  '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            france: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false,
            },
            belgium: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false,
            },
            silverstone: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'LukeyB',
            team: 'aston-martin',
            bahrain: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            france: {
                result: 'P15',
                points: DriverPointsMapper.mapDriverPoints('P15'),
                fastestLap: false,
            },
            belgium: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            silverstone: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Buckets',
            team: 'haas',
            bahrain: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'), 
                fastestLap: false,
            },
            france: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'), 
                fastestLap: false,
            },
            belgium: {
                result: '14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
                fastestLap: false,
            },
            silverstone: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Ninja',
            bahrain: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            france: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            silverstone: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Flow',
            bahrain: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            france: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false,
            },
            belgium: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            silverstone: {
                result: '-',
                points: DriverPointsMapper.mapDriverPoints('-'),
                fastestLap: false
            },
        }
    },
]
