import { IHoliday } from './types';

export const HOLIDAYS: IHoliday[] = [
    {
        name: "New Year's Day",
        date: new Date('2024-01-01'),
        type: 'republic',
    },
    {
        name: 'Orthodox Christmas Day',
        date: new Date('2024-01-07'),
        type: 'other',
    },
    {
        name: 'Defender of the Fatherland Day',
        date: new Date('2024-02-23'),
        type: 'republic',
    },
    {
        name: "International Women's Day",
        date: new Date('2024-03-08'),
        type: 'republic',
    },
    {
        name: 'Constitution Day',
        date: new Date('2024-03-15'),
        type: 'state',
    },
    {
        name: 'Day of Unity of the Peoples of Belarus and Russia',
        date: new Date('2024-04-02'),
        type: 'state',
    },
    {
        name: 'International Labour Day',
        date: new Date('2024-05-01'),
        type: 'republic',
    },
    {
        name: 'Commemoration Day',
        date: new Date('2024-05-03'),
        type: 'other',
    },
    {
        name: 'Victory Day',
        date: new Date('2024-05-09'),
        type: 'other',
    },
    {
        name: 'Summer Solstice',
        date: new Date('2024-06-21'),
        type: 'other',
    },
    {
        name: 'Independence Day',
        date: new Date('2024-07-03'),
        type: 'state',
    },
    {
        name: 'National Unity Day',
        date: new Date('2024-09-17'),
        type: 'state',
    },
    {
        name: "Mother's Day",
        date: new Date('2024-10-14'),
        type: 'other',
    },
    {
        name: 'October Revolution Day',
        date: new Date('2024-11-07'),
        type: 'republic',
    },
    {
        name: 'Winter Solstice',
        date: new Date('2024-12-21'),
        type: 'other',
    },
    {
        name: 'Christmas Day',
        date: new Date('2024-12-25'),
        type: 'other',
    },
];
