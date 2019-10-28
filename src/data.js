export const statuses = ['new', 'open', 'resolved', 'closed'];

export const priorities = ['veryHigh', 'high', 'medium', 'low'];

export const seriousness = ['critical', 'major', 'minor', 'request'];

export const statusesLife = [
    ['new', ['open']],
    ['open', ['resolved']],
    ['resolved', ['open', 'closed']],
    ['closed', []]
];

export const historyActions = {
    new: 'Input',
    open: 'Opened',
    resolved: 'Resolved',
    closed: 'Closed'
};
