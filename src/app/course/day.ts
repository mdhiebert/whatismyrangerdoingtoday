class Day {
    dayNumber: number;
    phase: string;
    largerActivity: string;
    activities: Array<String>;
    progressValue: number;

    constructor(dayNumber: number, phase: string, largerActivity: string, activities: Array<String>) {
        this.dayNumber = dayNumber;
        this.phase = phase;
        this.largerActivity = largerActivity;
        this.activities = activities;

        this.progressValue = Math.floor((this.dayNumber / 61) * 100);
        console.log(this.dayNumber, this.progressValue)
    }

    public toString() {
        return this.activities.toString()
    }
}

export default Day;