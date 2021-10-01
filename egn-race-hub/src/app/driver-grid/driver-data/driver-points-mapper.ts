export class DriverPointsMapper {
    public static mapDriverPoints(result: string): number {
        switch (result) {
            case 'P1':
                return 50;
            case 'P2':
                return 42;
            case 'P3':
                return 36;
            case 'P4':
                return 32;
            case 'P5':
                return 28;
            case 'P6':
                return 25;
            case 'P7':
                return 22;
            case 'P8':
                return 19;
            case 'P9':
                return 17;
            case 'P10':
                return 15;
            case 'P11':
                return 13;
            case 'P12':
                return 11;
            case 'P13':
                return 9;
            case 'P14':
                return 7;
            case 'P15':
                return 5;
            case 'P16':
                return 4;
            case 'P17':
                return 3;
            case 'P18':
                return 2;
            case 'P19':
                return 2;
            case 'P20':
                return 1;
            default:
                return 0;
        }
    }
}