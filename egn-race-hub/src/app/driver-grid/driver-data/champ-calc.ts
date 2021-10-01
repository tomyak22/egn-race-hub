

export class ChampionshipCalculator {
    public static calcTotalPoints(params: any): number {
        let totalPoints: number;
        totalPoints = params.data.driver.bahrainPoints + params.data.driver.francePoints
        return totalPoints;
    }
}