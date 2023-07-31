import { FiCreditCard } from 'react-icons/fi';
import { TbMoneybag } from 'react-icons/tb';
import { PiCardholderBold, PiCarProfileBold } from 'react-icons/pi';
import { LuHome,LuPlane,LuMap } from 'react-icons/lu';
import { AiOutlineCalendar } from 'react-icons/ai';
import Banking from '../assets/image/banking.png';
import Insurance from '../assets/image/insurance.png';
import Travel from '../assets/image/travel.png';





// header data
export const headerData = [
    {
        id: 1,
        title: 'BANKING',
        img: Banking,
        time: 1500,
        item: [
            {
                id: 1,
                title: 'Add Account',
                subtitle: 'Your multiple bank account',
                tag: <FiCreditCard />
            },
            {
                id: 2,
                title: 'Savings',
                subtitle: 'Explore saving plans',
                tag: <TbMoneybag />
            },
            {
                id: 3,
                title: 'Add Cards',
                subtitle: 'Personalize your cards',
                tag: <PiCardholderBold />
            },

        ]
    },
    {
        id: 2,
        title: 'INSURANCE',
        img: Insurance,
        time: 2000,
        item: [
            {
                id: 1,
                title: 'Home',
                subtitle: '1 year - 25 years',
                tag: <LuHome />
            },
            {
                id: 2,
                title: 'Mobility',
                subtitle: '3 months - 10 years',
                tag: <PiCarProfileBold />
            },
            {
                id: 3,
                title: 'Traveling',
                subtitle: 'Day long - 6 months',
                tag: <LuPlane />
            },

        ]
    },
    {
        id: 3,
        title: 'TRAVEL',
        img: Travel,
        time: 2500,
        item: [
            {
                id: 1,
                title: 'New Booking',
                subtitle: 'Book a new schedule',
                tag: <AiOutlineCalendar />
            },
            {
                id: 2,
                title: 'Plan & Roots',
                subtitle: 'Explore all packages',
                tag: <LuMap />
            },
            

        ]
    },
]


// dashboard data
export const total = [
    {
        id: 1,
        title: 'Total Accounts',
        number: '05', 
    },
    {
        id: 2,
        title: 'Total Savings Accounts',
        number: '02', 
    },
    {
        id: 3,
        title: 'Total Cards',
        number: '03', 
    },
    {
        id: 4,
        title: 'Total Insurances',
        number: '07', 
    },
]

export const myData =[
    {
        id:1,
        name: 'Jhon',
        cardId: '90876545123',
        balance: '23,45,000'
    },
    {
        id:2,
        name: 'Martha',
        cardId: '90876545123',
        balance: '13,45,000'
    },
    {
        id:3,
        name: 'Leo',
        cardId: '90876545123',
        balance: '56,45,000'
    },
]

export const chartData = [
    {
      "name": "Jan",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Api",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Aug",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Sep",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Oct",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
    {
      "name": "Nov",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Dec",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    },
  ]


export const insuranceData = [
    {
      "name": "Home",
      
      "pv": 2400
    },
    {
      "name": "Mobility",
      
      "pv": 1398
    },
    {
      "name": "Travel",
      
      "pv": 9800
    },]

export const costs =[
    {
        id: 1,
        title: 'Total Insurances cost',
        amount: '23,45,000',
    },
    {
        id: 2,
        title: 'Total Insurances cost',
        amount: '75,000',
    },
]