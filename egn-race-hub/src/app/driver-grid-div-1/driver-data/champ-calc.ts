

export class ChampionshipCalculator {

    public static calcTotalPoints(params: any): number {
        let totalPoints: number;
        totalPoints = params.data.driver.bahrain.points + params.data.driver.france.points + params.data.driver.belgium.points
        return totalPoints;
    }
}

export const FinishPosition = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9',
    'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16', 'P17', 'P17', 'P18', 'P19', 'P20',
    'DNF', 'DNS', '-']