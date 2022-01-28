import Day from "./day";

const genericActivityList = [
    new Day(0, "Darby Phase", "", [
        "In-processing",
        "Medical Screening",
        "POV Storage",
        "Battalion In-brief",
        "Company In-processing.",
        "Company Gear Layout"
    ]),
    new Day(1, "Darby Phase", "RAP Week", [
        "Ranger Physical Assessment (RPA)",
        "Combat Water Survival Assessment (CWSA)",
        "S4 Gear Issue",
        "HIITS 2 Issue",
        "Terrain Association Class",
        "Combatives Instruction"
    ]),
    new Day(2, "Darby Phase", "RAP Week", [
        "Land Navigation",
        "Ranger Tactical Tasks (RTT)",
        "Malvesti Obstacle Course"
    ]),
    new Day(3, "Darby Phase", "RAP Week", [
        "Land Navigation Re-Test",
        "Central Issue Facility (CIF) Gear Draw",
        "Weapons Draw",
        "Tie Downs"
    ]),
    new Day(4, "Darby Phase", "RAP Week", [
        "12 Mile Foot March",
        "Demo (?)",
        "SAT/BAR Airborne Preparations",
        "Camp Opens"
    ]),
    new Day(5, "Darby Phase", "Techniques Training", [
        "Brigade In-Brief",
        "ANZIO",
        "20 Boards Part 1"
    ]),
    new Day(6, "Darby Phase", "Techniques Training", [
        "Darby Queen",
        "Recon Class / Practical Exercise",
        "Fieldcraft Training",
        "20 Boards Part 2"
    ]),
    new Day(7, "Darby Phase", "Techniques Training", [
        "Ambush Practical Exercise",
        "20 Boards Part 3",
        "Squad Standard-Operating-Procedure (SOP) Review",
        "UMT Support",
        "Showers"
    ]),
    new Day(8, "Darby Phase", "Techniques Training", [
        "Intelligence Update / S2 Brief",
        "Troop Leading Procedures (TLPs)",
        "Coordinations"
    ]),
    new Day(9, "Darby Phase", "Cadre Assisted Recon / Ambush Practical Exercise", [
        "Ambush",
    ]),
    new Day(10, "Darby Phase", "Cadre Assisted Recon / Ambush Practical Exercise", [
        "Recon"
    ]),
    new Day(11, "Darby Phase", "Operation Torch", [
        "Ambush/Recon",
        "Bay Planning"
    ]),
    new Day(12, "Darby Phase", "Operation Torch", [
        "Ambush/Recon",
        "Bay Planning"
    ]),
    new Day(13, "Darby Phase", "Operation Torch", [
        "Ambush/Recon",
        "Bay Planning"
    ]),
    new Day(14, "Darby Phase", "", [
        "Cadre Retraining",
        "UMT Support",
        "Bay Planning"
    ]),
    new Day(15, "Darby Phase", "Operation Torch", [
        "Ambush/Recon",
        "Bay Planning"
    ]),
    new Day(16, "Darby Phase", "Operation Torch", [
        "Ambush/Recon",
        "Bay Planning"
    ]),
    new Day(17, "Darby Phase", "Operation Torch", [
        "Ambush/Recon",
        "Bay Planning"
    ]),
    new Day(18, "Darby Phase", "Camp Close", [
        "Peer Evaluations",
        "Counseling",
        "Academic Boards"
    ]),
    new Day(19, "Darby Phase", "", [
        "Battalion Critiques",
        "Student Refit",
        "Layout"
    ]),
    new Day(20, "Darby Phase", "", [
        "Class Handover"
    ]),
    new Day(21, "Mountain Phase", "Lower Mountaineering", [
        "Rope Management",
        "Knots",
        "Belays",
        "Rappel",
        "SKEDCO Rigging"
    ]),
    new Day(22, "Mountain Phase", "Lower Mountaineering", [
        "Knot Test",
        "Anchors",
        "Fixed Rope",
        "Rope Bridge",
        "V-Haul"
    ]),
    new Day(23, "Mountain Phase", "Mount Yonah", [
        "Foot March",
        "Balance Climb (Top-Rope), Lead Climb",
        "Advanced Rappels",
        "Squad Mobility / Hoist",
        "Night Mountaineering"
    ]),
    new Day(24, "Mountain Phase", "Mount Yonah", [
        "Balance Climb (Top-Rope)",
        "Lead Climb",
        "Advanced Rappels",
        "Squad Mobility/Hoist",
        "Night Mountaineering"
    ]),
    new Day(25, "Mountain Phase", "Combat Techniques Training", [
        "Mountain Terrain Association",
        "Patrol Base Class / Practical Exercise",
        "Range Card Practical Exercise"
    ]),
    new Day(26, "Mountain Phase", "Combat Techniques Training", [
        "Ambush Class / Practical Exercise",
        "Hasty Ambush Class / Practical Exercise",
        "ORP / Patrol Base by Force Class",
        "Linear Danger Area (LDA) Practical Exercise",
        "EPW / Search Practical Exercise",
        "M240B Crew Drills",
        "SOPs"
    ]),
    new Day(27, "Mountain Phase", "Combat Techniques Training", [
        "Raid Class / Practical Exercise",
        "Fires Planning",
        "SOPs"
    ]),
    new Day(28, "Mountain Phase", "Combat Techniques Training", [
        "TLPs / OPORD / FRAGO / Hasty Planning Class",
        "WARNO Practical Exercise",
        "Enemy Analysis Practical Exercise",
        "Terrain Analysis Practical Exercise",
        "FRAGO Practical Exercise"
    ]),
    new Day(29, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(30, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(31, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(32, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(33, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(34, "Mountain Phase", "Change of Mission", [
        "Change-of-Mission Day",
        "Mid-FTX AAR",
        "Hasty Planning"
    ]),
    new Day(35, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(36, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(37, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(38, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(39, "Mountain Phase", "Musket FTX", [
        "Bay Planning",
        "Ambush/Raid",
        "Mountaineering Tasks",
        "Student Led Patrols"
    ]),
    new Day(40, "Mountain Phase", "Out-Process", [
        "Re-fit",
        "Sustained Airborne Training",
        "Commander Out-Brief"
    ]),
    new Day(41, "Mountain Phase", "Operation Stiletto", [
        "Class Handover",
        "Operation Stiletto"
    ]),
    new Day(42, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        "Reptile Class",
        "Road to War",
        "Plan use of Supporting Fires",
        "Rehearsal Training (RI-Led)",
        "Raid Practical Exercise (Day / Night)",
        "SOP Refinement"
    ]),
    new Day(43, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        "Inspect Personnel and Equipment",
        "Patrol Base Class",
        "Movement-to-Contact Class",
        "FRAGO Practical Exercise",
        "Movement-to-Contact Practical Exercise (RI-Led)",
        "Patrol Base Practical Exercise"
    ]),
    new Day(44, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        "Covert Gap Crossing Class / Practical Exercise",
        "Waterborne Insertion Class / Practical Exercise",
        "Ambush Practical Exercise",
        "Patrol Base Practical Exercise"
    ]),
    new Day(45, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        "Student TLPs and Orders Process",
        "Resupply",
        "Rehearsals",
        "Static Load Training",
        "Religious Services"
    ]),
    new Day(46, "Swamp Phase", "Operation Pegasus", [
        "Airborne Assault",
        "Air Assault",
        "Movement to Contact",
        "Raid",
        "Patrol Base"
    ]),
    new Day(47, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Movement to Contact",
        "MEDEVAC Training",
        "Patrol Base"
    ]),
    new Day(48, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Raids",
        "MEDEVAC Training",
        "Patrol Base"
    ]),
    new Day(49, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Raids",
        "MEDEVAC Training",
        "Patrol Base"
    ]),
    new Day(50, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Waterborne Insertion",
        "Movement to Contact",
        "CSAR",
        "MEDEVAC Training",
        "Patrol Base"
    ]),
    new Day(51, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Waterborne Insertion",
        "Covert Gap Crossing",
        "Raids",
        "Ambushes",
        "Patrol Base"
    ]),
    new Day(52, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Waterborne Insertion",
        "Covert Gap Crossing",
        "Raids",
        "Ambushes",
        "Patrol Base"
    ]),
    new Day(53, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Waterborne Insertion",
        "Covert Gap Crossing",
        "Raids",
        "Ambushes",
        "Patrol Base"
    ]),
    new Day(54, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Raids",
        "Ambushes",
        "Patrol Base"
    ]),
    new Day(55, "Swamp Phase", "Operation Pegasus", [
        "TLPs",
        "Air Assault (T)",
        "Waterborne Insertion",
        "Raids",
        "Tactical Foot March",
    ]),
    new Day(56, "Swamp Phase", "Refit", [
        "MED Checks",
        "Peer Evaluations",
        "End of Cycle Critiques",
        "Student Equipment Maintenance",
        "Student Counseling",
        "Religious Services"
    ]),
    new Day(57, "Swamp Phase", "Refit", [
        "Student Equipment Maintenance",
        "Details",
        "Company Boards",
        "Battalion Boards",
        "XO Grad Brief",
        "Load Dufflebags"
    ]),
    new Day(58, "Graduation Week", "", [
        "Graduating Rangers move to Fort Benning",
        "Brigade Board Cases move to Fort Benning",
        "Recycle Accountability Formation"
    ]),
    new Day(59, "Graduation Week", "", [
        "Cycle Closeout",
        "Equipment Inventory / Maintenance"
    ]),
    new Day(60, "Graduation Week", "", [
        "Awards",
        "End of Cycle AAR"
    ]),
    new Day(61, "Graduation Week", "", [
        "Ranger Graduation"
    ])
]

class Cycle {
    title: string;
    startDate: Date;
    endDate: Date;
    days: Array<Day>;

    constructor(title: string, startDate: Date, endDate: Date) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.days = genericActivityList;
    }

    isDateInCycle(specifiedDate: Date) {
        return specifiedDate >= this.startDate && specifiedDate <= this.endDate
    }

    getDayForDate(specifiedDate: Date) {
        if (!this.isDateInCycle(specifiedDate)) { throw RangeError("Date does not belong to this cycle.") }
        var eventStartTime = this.startDate.valueOf();
        var eventEndTime = specifiedDate.valueOf();
        var differenceInMilliseconds = eventEndTime - eventStartTime;
        var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

        return this.days[differenceInDays];
    }
}

export default Cycle;