import Day from "./day";
import Activity from "./activity";

const genericActivityList = [
    new Day(0, "Darby Phase", "Day Zero", [
        new Activity("In-processing", ""),
        new Activity("Medical Screening", ""),
        new Activity("POV Storage", ""),
        new Activity("Battalion In-brief", ""),
        new Activity("Company In-processing.", ""),
        new Activity("Company Gear Layout", "")
    ],
    [
        "We all formed up outside of Camp Rogers and got called in one group at a time (i.e. Ranger Regiment, then RTAC, then IBOLC, etc.). When they called my group, we were divided into our companies--I got B Co--and were walked over to our training areas to drop our bags. We had some administrative paperwork to get through and then sat around for a few hours waiting for the rest of the Ranger class to check in. Once everyone was present, we started our gear layout. For B Co, that meant a bunch of tight time hacks to dump all of our bags and identify the items they called off. If we couldn't find it in time, we paid for it with physical activity. We moved into the barracks and had to do all sorts of other random tasks and exercise before we got to finally sleep. We had to have at least six up at any given time (two per barracks and two to watch gear at our training area), so me and one of my peers had to pull a shift in the middle of the night going into our RPA.",
        "In addition to the layout, we were required to pack two separate bags: one for the CWSA on Monday and one for Land Nav on Tuesday."
    ]),
    new Day(1, "Darby Phase", "RAP Week", [
        new Activity("Ranger Physical Assessment (RPA)", ""),
        new Activity("Combat Water Survival Assessment (CWSA)", ""),
        new Activity("S4 Gear Issue", ""),
        new Activity("HIITS 2 Issue", ""),
        new Activity("Terrain Association Class", ""),
        new Activity("Combatives Instruction", "")
    ],
    [
        "Our RPA began extremely early in the morning. We marched to the field just outside of Camp Rogers and were briefed on the standards for each event. Two minutes of pushups and situps, a five-mile run, and six pull-ups. Everyone lined up with their back to the pit and we were called one row at a time to \"enter the pit\". If you passed the event, you were sent to one formation, and if you failed, you were sent to the retest line. If you passed on your second attempt, you fell in with everyone else. If you failed, you were sent home. After pushups and situps, we all lined up on the road and went straight into the five-miler. You ran right from the finish line of the course to the formation in front of the pull-up bars. After passing everything, we formed up and fell back in to the barracks to change quickly before quickly eating breakfast at the DFAC.",
        "We then formed up again and ran out to Victory Pond to conduct the Combat Water Survival Assessment (CWSA). This was a painful run--we were tired from the RPA and it was extremely annoying to run in combat boots and carrying our wet weather bags. Anytime anyone fell out, the formation halted and did air-squats or some other exercise until the stragglers caught up. We were pretty beat by the time we arrived at the pond.",
        "We were the last company to go through the CWSA and as a result had to wait out in the cold until it was our turn to go. The first event was a confidence walk across a balance beam high up in the air. The platform itself is roughly wide enough to stand with your feet together but it can get wobbly with wind and other Rangers moving around. You'll just walk (making sure to only look forward and not down!) until you hit two steps in the center. You are called to step up to the highest step, turn and face the RIs below, and then will be instructed to proceed to the end. At the end of the beam is a rope that you commando-crawl down until you reach a dangling wooden Ranger Tab. You hit the tab, request permission to drop, and follow RI instructions (do a pull-up) before letting go and dropping into the pond. To do it in February was a bit of a shock to the system with how cold the water is. You then swam to shore and were given a zipline to run over to the Slide for Life. After running up all the flights of stairs to the top (Rangers who did not run the full way were smoked and instructed to go to the bottom and restart), you slide down the zipline while yelling whatever the RIs tell you to yell before letting go and landing in the water once again. Finally, you got out, put on a tactical vest and a dummy rifle, and jumped in one last time to demonstrate your ability to swim a short distance. When this was all complete, we changed out of our wet uniforms into dry ones, formed up again, and ran back to Camp Rogers.",
        "For the rest of the day, we cycled through various administrative tasks. We drew equipment and woweapons and listened to briefs on Land Navigation and Ranger School in general. Our last task of the night was combatives. We all ran out to the pit and received instruction on hand-to-hand combat before putting it into practice against our fellow Ranger Students."
    ]),
    new Day(2, "Darby Phase", "RAP Week", [
        new Activity("Land Navigation", ""),
        new Activity("Ranger Tactical Tasks (RTT)", ""),
        new Activity("Malvesti Obstacle Course", "")
    ],
    [
        "This was another early morning. We formed up and marched over to the Land Navigation course which is located right outside of Camp Rogers. Every company received a brief on the rules and standards for the event and then moved to its own starting point, where everyone waited in the prone for time to start. As soon as we were given the word, we went to work plotting our points on our maps and then stepping to go find them - we had 5 hours to find 4 out of 5 assigned points. The entire course was self-correcting, which meant that each point had a slip of paper with its grid coordinates printed on it. We slowly trickled back in to turn in our scoresheets, and we were allowed to relax off of our feet if we finished early. It is really important to try and pass on the first time around with land navigation: the re-test happens the following day (Day 3) and means yet another day spent on your feet before the 12 mile ruck on Day 4.",
        "After returning from Land Navigation, we were given the opportunity to change and eat before going into our next activity of the day: Ranger Tactical Task (RTT) assessment. There were seven stations: assembly/disassembly of an M240 machine gun, assembly/disassembly of an M249 Squad Automatic Weapon (SAW), operation of an M240, operation of an M249, assembly and use of an ASIP radio, assembly and use of an MBITR radio, and the employment/retrieval of a claymore. We were given two attempts to pass each event in the given time standard. Failure to do it in two tries resulted in a minor minus, and we had to pass a minimum of 4 events to advance in the course. RTTs lasted pretty much all day.",
        "We ate again and then moved over to " // TODO
    ]),
    new Day(3, "Darby Phase", "RAP Week", [
        new Activity("Land Navigation Re-Test", ""),
        new Activity("Central Issue Facility (CIF) Gear Draw", ""),
        new Activity("Weapons Draw", ""),
        new Activity("Tie Downs", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(4, "Darby Phase", "RAP Week", [
        new Activity("12 Mile Foot March", ""),
        new Activity("Demo", ""),
        new Activity("SAT/BAR Airborne Preparations", ""),
        new Activity("Camp Opens", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(5, "Darby Phase", "Techniques Training", [
        new Activity("Brigade In-Brief", ""),
        new Activity("ANZIO", ""),
        new Activity("20 Boards Part 1", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(6, "Darby Phase", "Techniques Training", [
        new Activity("Darby Queen", ""),
        new Activity("Recon Class / Practical Exercise", ""),
        new Activity("Fieldcraft Training", ""),
        new Activity("20 Boards Part 2", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(7, "Darby Phase", "Techniques Training", [
        new Activity("Ambush Practical Exercise", ""),
        new Activity("20 Boards Part 3", ""),
        new Activity("Squad Standard-Operating-Procedure (SOP) Review", ""),
        new Activity("UMT Support", ""),
        new Activity("Showers", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(8, "Darby Phase", "Techniques Training", [
        new Activity("Intelligence Update / S2 Brief", ""),
        new Activity("Troop Leading Procedures (TLPs)", ""),
        new Activity("Coordinations", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(9, "Darby Phase", "Cadre Assisted Recon / Ambush Practical Exercise", [
        new Activity("Ambush", ""),
    ],
    [
        "Coming soon!"
    ]),
    new Day(10, "Darby Phase", "Cadre Assisted Recon / Ambush Practical Exercise", [
        new Activity("Recon", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(11, "Darby Phase", "Operation Torch", [
        new Activity("Ambush/Recon", ""),
        new Activity("Bay Planning", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(12, "Darby Phase", "Operation Torch", [
        new Activity("Ambush/Recon", ""),
        new Activity("Bay Planning", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(13, "Darby Phase", "Operation Torch", [
        new Activity("Ambush/Recon", ""),
        new Activity("Bay Planning", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(14, "Darby Phase", "Retraining", [
        new Activity("Cadre Retraining", ""),
        new Activity("UMT Support", ""),
        new Activity("Bay Planning", "")
    ],
    [
        "This was our refit day in between our two Darby FTXs. We were told generally how well we were doing (for my squad, we were told that we were only 2 for 16 on getting a GO on a first patrol... that was actually pretty average across the company) and then received retraining on tasks that RIs had assessed us to be poor-performing at. For us, that meant doing practical exercises on establishing ORPs, crossing Linear Danger Areas, and conducting ambushes. We were also allowed to access our duffle bags to swap out equipment and attend religious services that evening."
    ]),
    new Day(15, "Darby Phase", "Operation Torch", [
        new Activity("Ambush/Recon", ""),
        new Activity("Bay Planning", "")
    ],
    [
        "First day of the second (and last) Darby FTX. A standard schedule to the day--we started with planning and an OPORD brief in the morning. Our mission for the day was a reconnaissance. We went out and ran the mission like normal, sustaining a casualty at the end of it and conducting a MEDEVAC before taking trucks back to Camp Darby. We were not allowed to go to sleep until very late, only getting about an hour of sleep."
    ]),
    new Day(16, "Darby Phase", "Operation Torch", [
        new Activity("Ambush/Recon", ""),
        new Activity("Bay Planning", "")
    ],
    [
        "Second day of the second FTX. We followed the same old schedule and did an ambush. Nothing too noteworthy or out of the ordinary: a standard Darby field day."
    ]),
    new Day(17, "Darby Phase", "Operation Torch", [
        new Activity("Ambush/Recon", ""),
        new Activity("Bay Planning", "")
    ],
    [
        "The last field day of Darby. This day was a whirlwind. It began like normal: with planning and a brief before stepping off to conduct our final mission (a reconnaissance). I ended up becoming the Squad Leader for our actions-on after taking contact. We completed the mission as usual, but under a highly condensed timeline. We arrived back at Camp Darby several hours earlier than the normal and went right into end-of-phase procedures. This included cleaning equipment, doing peer evaluations, and cutting tiedowns off of squad equipment. Once all the peer information was complete, the RIs determined who would be sent forward and who would go to a board to determine their fate. Boards began pretty late and went until about 0430. It was a late night for everyone."
    ]),
    new Day(18, "Darby Phase", "Camp Close", [
        new Activity("Peer Evaluations", ""),
        new Activity("Counseling", ""),
        new Activity("Academic Boards", "")
    ],
    [
        "By now, everyone pretty much knows if they're going forward or not. The entire class is exhausted from the lack of sleep of the FTX, but the energy of closing out the phase keeps everything moving. This day was spent doing last minute administrative tasks to clean up as well as the main event: DogX. The RIs grilled hot dogs for the class and had a ton of drinks and snacks for purchase. Everyone ate way too much but would do it all over again in a heartbeat if they could. Expect to feel pretty sick, but you won't regret it. The entire class moves back to Camp Rogers and then is given time to organize their belongings before pass the following day. Students are also allowed to use phones to coordinate with friends and family."
    ]),
    new Day(19, "Darby Phase", "Refit", [
        new Activity("Battalion Critiques", ""),
        new Activity("Student Refit", ""),
        new Activity("Layout", ""),
        new Activity("*** 8 HOUR PASS FOR GO's *** (if allowed)", "")
    ],
    [
        "Today is the pass day for GOs. For us, we ate a nice breakfast at the DFAC and then were released around 1000. We reported back at 1800 after purchasing replacement/new gear, eating a ton, and sleeping. All Rangers were searched upon return and we did last minute preparations for our movement to the next phase."
    ]),
    new Day(20, "Darby Phase", "Handover", [
        new Activity("Class Handover", ""),
        new Activity("*** RECYCLE PASS *** (if allowed)", "")
    ],
    [
        "The entire class wakes up decently early today. Those going forward take all of their bags and get on a bus to Dahlonega, Georgia for Mountain Phase. The recycles hang back and then go on their pass, which started at 0800 for our class with a report time of 1800.",
        "When the forwards arrive at Camp Frank Merrill in Dahlonega, they'll immediately have to do a gear layout to ensure they aren't carrying any contraband. We were also issued mountaineering equipment like ropes and harnesses, alongside some cold weather equipment from 5th RTBn's S4."
    ]),
    new Day(21, "Mountain Phase", "Lower Mountaineering", [
        new Activity("Rope Management", ""),
        new Activity("Knots", ""),
        new Activity("Belays", ""),
        new Activity("Rappel", ""),
        new Activity("SKEDCO Rigging", "")
    ],
    [
        "We spent today learning all of the knots that we would be assessed on, as well as some basic mountaineering techniques like belaying and rappeling. The primary focus of the day, however, was the knots, as the next day we were evaluated on our ability to tie them. For us, our ability to pass a diagnostic was the release criteria for us to return to the barracks to organize our gear."
    ]),
    new Day(22, "Mountain Phase", "Lower Mountaineering", [
        new Activity("Knot Test", ""),
        new Activity("Anchors", ""),
        new Activity("Fixed Rope", ""),
        new Activity("Rope Bridge", ""),
        new Activity("V-Haul", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(23, "Mountain Phase", "Mount Yonah", [
        new Activity("Foot March", ""),
        new Activity("Balance Climb (Top-Rope), Lead Climb", ""),
        new Activity("Advanced Rappels", ""),
        new Activity("Squad Mobility / Hoist", ""),
        new Activity("Night Mountaineering", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(24, "Mountain Phase", "Mount Yonah", [
        new Activity("Balance Climb (Top-Rope)", ""),
        new Activity("Lead Climb", ""),
        new Activity("Advanced Rappels", ""),
        new Activity("Squad Mobility/Hoist", ""),
        new Activity("Night Mountaineering", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(25, "Mountain Phase", "Combat Techniques Training", [
        new Activity("Mountain Terrain Association", ""),
        new Activity("Patrol Base Class / Practical Exercise", ""),
        new Activity("Range Card Practical Exercise", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(26, "Mountain Phase", "Combat Techniques Training", [
        new Activity("Ambush Class / Practical Exercise", ""),
        new Activity("Hasty Ambush Class / Practical Exercise", ""),
        new Activity("ORP / Patrol Base by Force Class", ""),
        new Activity("Linear Danger Area (LDA) Practical Exercise", ""),
        new Activity("EPW / Search Practical Exercise", ""),
        new Activity("M240B Crew Drills", ""),
        new Activity("SOPs", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(27, "Mountain Phase", "Combat Techniques Training", [
        new Activity("Raid Class / Practical Exercise", ""),
        new Activity("Fires Planning", ""),
        new Activity("SOPs", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(28, "Mountain Phase", "Combat Techniques Training", [
        new Activity("TLPs / OPORD / FRAGO / Hasty Planning Class", ""),
        new Activity("WARNO Practical Exercise", ""),
        new Activity("Enemy Analysis Practical Exercise", ""),
        new Activity("Terrain Analysis Practical Exercise", ""),
        new Activity("FRAGO Practical Exercise", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(29, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(30, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(31, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(32, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(33, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(34, "Mountain Phase", "Change of Mission", [
        new Activity("Change-of-Mission Day", ""),
        new Activity("Mid-FTX AAR", ""),
        new Activity("Hasty Planning", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(35, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(36, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(37, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(38, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(39, "Mountain Phase", "Musket FTX", [
        new Activity("Bay Planning", ""),
        new Activity("Ambush/Raid", ""),
        new Activity("Mountaineering Tasks", ""),
        new Activity("Student Led Patrols", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(40, "Mountain Phase", "Out-Process", [
        new Activity("Re-fit", ""),
        new Activity("Sustained Airborne Training", ""),
        new Activity("Commander Out-Brief", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(41, "Mountain Phase", "Operation Stiletto", [
        new Activity("Class Handover", ""),
        new Activity("Operation Stiletto", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(42, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        new Activity("Reptile Class", ""),
        new Activity("Road to War", ""),
        new Activity("Plan use of Supporting Fires", ""),
        new Activity("Rehearsal Training (RI-Led)", ""),
        new Activity("Raid Practical Exercise (Day / Night)", ""),
        new Activity("SOP Refinement", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(43, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        new Activity("Inspect Personnel and Equipment", ""),
        new Activity("Patrol Base Class", ""),
        new Activity("Movement-to-Contact Class", ""),
        new Activity("FRAGO Practical Exercise", ""),
        new Activity("Movement-to-Contact Practical Exercise (RI-Led)", ""),
        new Activity("Patrol Base Practical Exercise", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(44, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        new Activity("Covert Gap Crossing Class / Practical Exercise", ""),
        new Activity("Waterborne Insertion Class / Practical Exercise", ""),
        new Activity("Ambush Practical Exercise", ""),
        new Activity("Patrol Base Practical Exercise", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(45, "Swamp Phase", "Technical, Tactical, and Leadership Training", [
        new Activity("Student TLPs and Orders Process", ""),
        new Activity("Resupply", ""),
        new Activity("Rehearsals", ""),
        new Activity("Static Load Training", ""),
        new Activity("Religious Services", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(46, "Swamp Phase", "Operation Pegasus", [
        new Activity("Airborne Assault", ""),
        new Activity("Air Assault", ""),
        new Activity("Movement to Contact", ""),
        new Activity("Raid", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "The first day of the FTX. We ate breakfast at the DFAC and spent the morning planning a raid in the platoon bay. We air assaulted into our area of operation and then conducted the mission as planned. After we hit our objective, the RIs changed out our platoon leadership and we conducted a hasty ambush on another objective. On both missions, we took casualties and had to perform a CASEVAC. This would become a staple of every single mission in the phase. After completing the second mission of the day, we moved to our patrol base, got a resupply of ammunition, and got checked out by the medics before actually establishing the patrol base for the night. This would become the evening routine for every single day of the FTX."
    ]),
    new Day(47, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Movement to Contact", ""),
        new Activity("MEDEVAC Training", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "On this day, we conducted back to back movements-to-contact. This was coming off of our first night in the field, and subequently was the first day that our patrol base was evaluated. The RIs really laid into us about properly condu" // TODO
    ]),
    new Day(48, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Raids", ""),
        new Activity("MEDEVAC Training", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "On this day, we conducted back to back raids."
    ]),
    new Day(49, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Raids", ""),
        new Activity("MEDEVAC Training", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(50, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Waterborne Insertion", ""),
        new Activity("Movement to Contact", ""),
        new Activity("CSAR", ""),
        new Activity("MEDEVAC Training", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(51, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Waterborne Insertion", ""),
        new Activity("Covert Gap Crossing", ""),
        new Activity("Raids", ""),
        new Activity("Ambushes", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(52, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Waterborne Insertion", ""),
        new Activity("Covert Gap Crossing", ""),
        new Activity("Raids", ""),
        new Activity("Ambushes", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(53, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Waterborne Insertion", ""),
        new Activity("Covert Gap Crossing", ""),
        new Activity("Raids", ""),
        new Activity("Ambushes", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(54, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Raids", ""),
        new Activity("Ambushes", ""),
        new Activity("Patrol Base", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(55, "Swamp Phase", "Operation Pegasus", [
        new Activity("TLPs", ""),
        new Activity("Air Assault (T)", ""),
        new Activity("Waterborne Insertion", ""),
        new Activity("Raids", ""),
        new Activity("Tactical Foot March", ""),
    ],
    [
        "Coming soon!"
    ]),
    new Day(56, "Swamp Phase", "Refit", [
        new Activity("MED Checks", ""),
        new Activity("Peer Evaluations", ""),
        new Activity("End of Cycle Critiques", ""),
        new Activity("Student Equipment Maintenance", ""),
        new Activity("Student Counseling", ""),
        new Activity("Religious Services", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(57, "Swamp Phase", "Refit", [
        new Activity("Student Equipment Maintenance", ""),
        new Activity("Details", ""),
        new Activity("Company Boards", ""),
        new Activity("Battalion Boards", ""),
        new Activity("XO Grad Brief", ""),
        new Activity("Load Dufflebags", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(58, "Graduation Week", "Recovery", [
        new Activity("Graduating Rangers move to Fort Benning", ""),
        new Activity("Brigade Board Cases move to Fort Benning", ""),
        new Activity("Recycle Accountability Formation", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(59, "Graduation Week", "Recovery", [
        new Activity("Cycle Closeout", ""),
        new Activity("Equipment Inventory / Maintenance", ""),
        new Activity("*** GRAD PASS *** (if allowed)", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(60, "Graduation Week", "AAR and Awards", [
        new Activity("Awards", ""),
        new Activity("End of Cycle AAR", ""),
        new Activity("Graduation Rehearsal", ""),
        new Activity("*** GRAD PASS *** (if allowed)", "")
    ],
    [
        "Coming soon!"
    ]),
    new Day(61, "Graduation Week", "Graduation Day", [
        new Activity("Ranger Graduation", "")
    ],
    [
        "Coming soon!"
    ]),
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
        // TODO bug is here!
        if (!this.isDateInCycle(specifiedDate)) { throw RangeError("Date does not belong to this cycle.") }
        var eventStartDayNumber = this.getAbsoluteDateNumber(this.startDate);
        var specifiedDayNumber = this.getAbsoluteDateNumber(specifiedDate);
        var differenceInDays = specifiedDayNumber - eventStartDayNumber;
        return this.days[differenceInDays];
    }

    private getAbsoluteDateNumber(rawDate: Date) {
        var start = new Date(rawDate.getFullYear(), 0, 0);
        var diff = (rawDate.valueOf() - start.valueOf()) + ((start.getTimezoneOffset() - rawDate.getTimezoneOffset()) * 60 * 1000);
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);

        return day;
    }
}

export default Cycle;