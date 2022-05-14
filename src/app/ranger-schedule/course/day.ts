import Activity from "./activity";

class Day {
    dayNumber: number;
    phase: string;
    largerActivity: string;
    activities: Array<Activity>;
    progressValue: number;
    creatorExperience: Array<string>;

    constructor(dayNumber: number, phase: string, largerActivity: string, activities: Array<Activity>, creatorExperience: Array<string>) {
        this.dayNumber = dayNumber;
        this.phase = phase;
        this.largerActivity = largerActivity;
        this.activities = activities;

        this.progressValue = Math.floor((this.dayNumber / 61) * 100);

        this.creatorExperience = creatorExperience;
    }

    public toString() {
        return this.activities.toString()
    }
}

export default Day;