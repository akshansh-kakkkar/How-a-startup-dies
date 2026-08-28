import { m } from "framer-motion";
import { title } from "process";

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
    },
    {
        id : "first-hire",
        day : 30,
        title : "The Team Is Growing",
        description : "Your team has grown quickly. Everyone is excited but your monthly expenses are climbing.",
        choices : [
            {
                id : "office",
                title : "Rent a fance office",
                description : "A great workspace will attract even more clients.",
                effects : {
                    cash : -120000,
                    employee : 0,
                    morale : 8,
                    runway : -1
                }
            },
            {
                id : "hire-more",
                title : "Hire even more people",
                descripition : "More engineers means we can build faster.",
                effects : {
                    cash : -200000,
                    employee : 4,
                    morale : 4, 
                    runway : -2,
                }
            },
                {
                    id : "cut-costs",
                    title : "Cut Some Expenses",
                    description : "Keep the company lean while you figure things out.",
                    effects : {
                        cash : 50000,
                        employee : -1,
                        morale : -10,
                        runway : 2
                    }
                },
        ]
    }
]