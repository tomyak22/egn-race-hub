import { DriverPointsMapper } from "src/app/driver-grid-div-1/driver-data/driver-points-mapper";

export const DRIVER_DATA_2 = [
    {
        driver: {
            name: 'Ninja',
            team: 'mercedes',
            bahrain: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
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
            name: 'Cyborg',
            team: 'mercedes',
            bahrain: {
                result: 'P17',
                points: DriverPointsMapper.mapDriverPoints('P17'),
                fastestLap: false,
            },
            france: {
                result: 'P15',
                points: DriverPointsMapper.mapDriverPoints('P15'),
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
            name: 'Bretho',
            team: 'haas',
            bahrain: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
                fastestLap: false,
            },
            france: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
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
            name: 'Buckets',
            team: 'haas',
            bahrain: {
                result: 'P14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
                fastestLap: false,
            },
            france: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
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
            name: 'Lukey',
            team: 'aston-martin',
            bahrain: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false,
            },
            france: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false
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
            name: 'Spud',
            team: 'aston-martin',
            bahrain: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false,
            },
            france: {
                result: 'P17',
                points: DriverPointsMapper.mapDriverPoints('P17'),
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
            name: 'Spud',
            team: 'aston-martin',
            bahrain: {
                result: 'P8',
                points: DriverPointsMapper.mapDriverPoints('P8'),
                fastestLap: false,
            },
            france: {
                result: 'P17',
                points: DriverPointsMapper.mapDriverPoints('P17'),
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
            name: 'Jiv',
            team: 'alfa-romeo',
            bahrain: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            france: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
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
            name: 'Nuggzy',
            team: 'alfa-romeo',
            bahrain: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
                fastestLap: false,
            },
            france: {
                result: 'DNS',
                points: DriverPointsMapper.mapDriverPoints('DNS'),
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
            name: 'Cank',
            team: 'red-bull',
            bahrain: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9') + 1,
                fastestLap: true,
            },
            france: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
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
            name: 'Flow',
            team: 'red-bull',
            bahrain: {
                result: 'DNF',
                points: DriverPointsMapper.mapDriverPoints('DNF'),
                fastestLap: false,
            },
            france: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
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
            name: 'Toddy',
            team: 'alpine',
            bahrain: {
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false,
            },
            france: {
                result: 'P9',
                points: DriverPointsMapper.mapDriverPoints('P9'),
                fastestLap: false
            },
            belgium: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1') + 1,
                fastestLap: true
            },
        }
    },
    {
        driver: {
            name: 'Weuu',
            team: 'alpine',
            bahrain: {
                result: 'P12',
                points: DriverPointsMapper.mapDriverPoints('P12'),
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
            name: 'Zero',
            team: 'mclaren',
            bahrain: {
                result: 'P1',
                points: DriverPointsMapper.mapDriverPoints('P1'),
                fastestLap: false,
            },
            france: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false
            },
            belgium: {
                result: 'P2',
                points: DriverPointsMapper.mapDriverPoints('P2'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Nicman',
            team: 'mclaren',
            bahrain: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
                fastestLap: false,
            },
            france: {
                result: 'P5',
                points: DriverPointsMapper.mapDriverPoints('P5'),
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
            name: 'Damo',
            team: 'ferrari',
            bahrain: {
                result: 'P11',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false,
            },
            france: {
                result: 'P14',
                points: DriverPointsMapper.mapDriverPoints('P14'),
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
            name: 'Aussie',
            team: 'ferrari',
            bahrain: {
                result: 'P15',
                points: DriverPointsMapper.mapDriverPoints('P11'),
                fastestLap: false,
            },
            france: {
                result: 'P16',
                points: DriverPointsMapper.mapDriverPoints('P14'),
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
            name: 'Risqe',
            team: 'alpha-tauri',
            bahrain: {
                result: 'P6',
                points: DriverPointsMapper.mapDriverPoints('P6'),
                fastestLap: false,
            },
            france: {
                result: 'P4',
                points: DriverPointsMapper.mapDriverPoints('P4'),
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
            name: 'RisqSzn',
            team: 'alpha-tauri',
            bahrain: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false,
            },
            france: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
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
            name: 'Bill',
            team: 'williams',
            bahrain: {
                result: 'P13',
                points: DriverPointsMapper.mapDriverPoints('P13'),
                fastestLap: false,
            },
            france: {
                result: 'P7',
                points: DriverPointsMapper.mapDriverPoints('P7'),
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
            name: 'KuznJas',
            team: 'williams',
            bahrain: {
                result: 'P16',
                points: DriverPointsMapper.mapDriverPoints('P16'),
                fastestLap: false,
            },
            france: {
                result: 'P3',
                points: DriverPointsMapper.mapDriverPoints('P3') + 1,
                fastestLap: true
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
            name: 'Mon',
            team: 'alpha-tauri',
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
                result: 'P10',
                points: DriverPointsMapper.mapDriverPoints('P10'),
                fastestLap: false
            },
        }
    },
    {
        driver: {
            name: 'Brett',
            team: 'mercedes',
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
