import { title } from "process"
import { GameState } from "./types"
export const scenarios = [
    {
        id: "first-descision",
        day: 1,
        title: "The First Decision",
        description: "You have $2.4m in the bank. Your team is small, your product barely exists, and investors want profit.",
        choices: [
            {
                id: "hire",
                title: "Hire aggressively",
                description: "Build the team before your competitors do.",
                effects: {
                    cash: -150000,
                    employee: 5,
                    morale: 8,
                    runway: -2,
                }
            },
            {
                id: "marketing",
                title: "Spend on Marketing",
                description: "Get people talking about your startup.",
                effects: {
                    cash: -250000,
                    employee: 0,
                    morale: 2,
                    runway: -2
                }
            },
            {
                id: "product",
                title: "Keep Building",
                description: "The product isn't great focus on making it great.",
                effects: {
                    cash: -50000,
                    employee: 0,
                    morale: -2,
                    runway: -1
                }
            }
        ]
    },
    {
        id: "first-hire",
        day: 30,
        title: "The Team Is Growing",
        description: "Your team has grown quickly. Everyone is excited but your monthly expenses are climbing.",
        choices: [
            {
                id: "office",
                title: "Rent a fancy office",
                description: "A great workspace will attract even more clients.",
                effects: {
                    cash: -120000,
                    employee: 0,
                    morale: 8,
                    runway: -1
                }
            },
            {
                id: "hire-more",
                title: "Hire even more people",
                description: "More engineers means we can build faster.",
                effects: {
                    cash: -200000,
                    employee: 4,
                    morale: 4,
                    runway: -2,
                }
            },
            {
                id: "cut-costs",
                title: "Cut Some Expenses",
                description: "Keep the company lean while you figure things out.",
                effects: {
                    cash: 50000,
                    employee: -1,
                    morale: -10,
                    runway: 2
                }
            },
        ]
    },
    {
        id: "product-pressure",
        day: 60,
        title: "Everyone Wants a Roadmap",
        description: "The team is growing, but nobody knows what to build next. Your investors want profit and engineers want direction.",
        choices: [
            {
                id: "build-everything",
                title: "Build everything",
                description: "Give every team the resources they need and figure it out later.",
                effects: {
                    cash: -180000,
                    employee: 0,
                    morale: 6,
                    runway: -2,
                },
            },
            {
                id: "hire-engineers",
                title: "Hire Engineers",
                description: "Bring in someone who can turn the chaos into a roadmap.",
                effects: {
                    cash: -100000,
                    employee: 1,
                    morale: 4,
                    runway: 1,
                }
            },
            {
                id: "cut-features",
                title: "Cut Half the Roadmap",
                description: "Pick one thing and force everyone to focus on it.",
                effects: {
                    cash: -20000,
                    employee: 0,
                    morale: -8,
                    runway: 1
                }
            }
        ]
    },
    {
        id: "investor-meeting",
        title: "The Investor Meeting",
        day: 90,
        description: "Your investors want to know why you have spent millions of dollars and still don't have a product people actually want.",
        choices: [
            {
                id: "lie",
                title: "Tell them everything is fine",
                description: "Confidence is the key. Surely nobody will notice",
                effects: {
                    cash: 0,
                    employee: 0,
                    morale: 5,
                    runway: 0,
                },
            },
            {
                id: "blame",
                title: "Blame the Market",
                description: "It isn't your fault. The market doesn't simply understand you are genius.",
                effects: {
                    cash: 0,
                    employee: 0,
                    morale: -5,
                    runway: 0
                }
            },
            {
                id: "raise",
                title: "Ask for Money",
                description: "If 2.4M wasn't enough, maybe another 5M will fix everything.",
                effects: {
                    cash: 5000000,
                    employee: 2,
                    morale: 5,
                    runway: 6,
                }
            }
        ]
    },
    {
        id: "growth-at-all-costs",
        day: 120,
        title: "Growth Is Everything",
        description: "Your investors are obsessed with the growth. Nobody knows what the number means anymore, but they keep going up. So everyone is happy!",
        choices: [
            {
                id: "free-product",
                title: "Make Everything Free",
                description: "Users love free stuff. We will figure out the revenue later.",
                effects: {
                    cash: -300000,
                    employee: 0,
                    morale: 8,
                    runway: -3,
                }
            },
            {
                id: "growth-team",
                title: "Hire a Growth team",
                description: "Hire twelve people whose job is  to make the graph go up and to the right.",
                effects: {
                    cash: -400000,
                    employee: 12,
                    morale: 3,
                    runway: -4,
                }
            },
            {
                id: "fake-growth",
                title: "Pretend to be in profit",
                description: "Techinically, if you count things differently, growth is encridible.",
                effects: {
                    cash: 0,
                    employee: 0,
                    morale: -5,
                    runway: 0,
                },
            }
        ]
    },
    {
        id: "employee-revolt",
        day: 150,
        title: "People Are Leaving",
        description: "Three engineers resigned this morning. HR says morale is low. Your solution is to schedule a meeting about morale.",
        choices: [
            {
                id: "pizza",
                title: "Order more pizza",
                description: "Nothing says company culture like free pizza at 11 PM.",
                effects: {
                    cash: -25000,
                    employee: -1,
                    morale: 8,
                    runway: -1,
                }
            },
            {
                id: "retreat",
                title: "Organise a company retreat",
                description: "Take everyone somewhere expensive and pretend the problems dont exist.",
                effects: {
                    cash: -150000,
                    employee: -2,
                    morale: 12,
                    runway: -2,
                }
            },
            {
                id: "ignore",
                title: "Ignore It",
                description: "If nobody talks about the problem, technically there isn't one.",
                effects: {
                    cash: 0,
                    employee: -4,
                    morale: -20,
                    runway: 0,
                }
            },

        ]
    },
    {
        id: "the-end",
        day: 180,
        title: "The Board Meeting",
        description: "The board has called the emergency meeting. Nobody knows where the money went and CEO has stopped replying on slack.",
        choices: [
            {
                id: "fundraise",
                title: "Raise Another Round",
                description: "You confidently ask investor for another 20M dollars despite having no plan",
                effects: {
                    cash: 0,
                    employee: -2,
                    morale: -20,
                    runway: 5,
                }
            },
            {
                id: "give-up",
                title: "Accept the Reality",
                description: "Maybe the real startup was the friends you made along the way",
                effects: {
                    cash: 0,
                    employee: -10,
                    morale: -30,
                    runway: -10,
                }
            },
            {
                id: "file-bankruptcy",
                title: "File Bankcruptcy",
                description: "Atleast you will get a food, clothes, and place to live in the jail.",
                effects: {
                    cash: -400000,
                    employee: -12,
                    morale: -30,
                    runway: -10,
                }
            }
        ]
    }
]
