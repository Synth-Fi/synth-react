import { FaClock, FaRandom, FaRegMoneyBillAlt } from "react-icons/fa";

const icon_class = "text-white text-3xl md:text-4xl";

export const home_page_text = {
    outlined_boxes: [
        {main: '“Literally cant go tits-up”',
        secondary: 'No risk of liquidation, fixed interest rate, 100x traditional savings account interest rate',
        emoji: '📈',
        color: 'pink'},
        {main: '“Leveraged Yield farming”',
        secondary: 'Utilizing the lowest stable coin swaps to provide you the highest constant APY',
        emoji: '👀',
        color: 'yellow'},
        
    ],
    stack_section: {
        main: " Start capitalizing on your defi assets",
        secondary: "Earn Astonishing APY on ETH,USDT,SOL and countless other assets",
        filled_box : {
            color: 'purple',
            text: 'Synth savings has no minimum deposits, account freezes, or signup requirements - it can be used by anyone in the world with access to the internet.'
        },
    },

    filled_boxes: [
        {main: 'unstake at any time',
        emoji: '📈',
        color: 'purple'},
        {main: '“Cross chain deposit support”',
        secondary: 'Utilizing the lowest stable coin swaps to provide you the highest constant APY',
        emoji: '🔀',
        color: 'blue'    },
        {main: 'Capitalizing on the power of compound interest',
        emoji: '💸',
        color: 'yellow'    },
    ],

    hero_section1 : {
        "main": "Your gateway to simple compound interest on your Defi Assets",
        "button_text": "Join Waitlist"
    },

    hero_section2: {
        main: "Reimagine Yield Farming",
        secondary:" Simply deposit your Defi Assets and begin earning between",
        gradient_text:"10% - 20% APR",
        button_text: "Launch App",
        boxes :[
            {
                text: "Unstake  at any time",
                icon: (<FaClock  className={icon_class}/>),
            },
            {
                text: "Cross chain deposit support",
                icon: (<FaRandom  className={icon_class}/>),
            },
            {
                text: "Capitalizing on the power of compound interest",
                icon: (<FaRegMoneyBillAlt  className={icon_class}/>),

            },

        ]
    },

    

    team : [
        {
            emoji: '👲🏽',
            name: "J. Kell",
            roles : [
                "UI/ux designer",
                "blkchain dev",
                "python🐍 Insertion"
            ]

        },
        {
            emoji: '👲🏽',
            name: "J. Kell",
            roles : [
                "UI/ux designer",
                "blkchain dev",
                "python🐍 Insertion"
            ]

        },
        {
            emoji: '👲🏽',
            name: "J. Kell",
            roles : [
                "UI/ux designer",
                "blkchain dev",
                "python🐍 Insertion"
            ]

        },
        {
            emoji: '👲🏽',
            name: "J. Kell",
            roles : [
                "UI/ux designer",
                "blkchain dev",
                "python🐍 Insertion"
            ]

        }
    ],

    // LABELED AS q and a respec.
    faq: [
        {
            q: 'Why should I use Synth to manage my ?',
            a: "",
        },
    ],
    
}