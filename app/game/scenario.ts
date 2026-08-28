import { m } from "framer-motion";

export const scenarios = [
    {
        id : "first-descision",
        day : 1,
        title : "The First Decision",
        description : "You have $2.4m in the bank. Your team is small, your product barely exists, and investors want profit.",
        choices : [
            {
                id : "hire",
                title : "Hire aggressively",
                description : "Build the team before your competitors do.",
                effects : {
                    cash : -150000,
                    employee : 5,
                    morale : 8,
                    runway : -2,
                }
            },
            {
                id : "marketing",
                title : "Spend on Marketing",
                description : "Get people talking about your startup.",
                effects : {
                    cash : -250000,
                    employee : 0,
                    morale : 2,
                    runway : -2
                }
            },
            {
                id : "product",
                title : "Keep Building",
                description : "The product isn't great focus on making it great.",
                effects : {
                    cash : -50000,
                    employee : 0,
                    morale : -2,
                    runway :-1
                }
            }
        ]
    }
]