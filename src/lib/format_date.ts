import moment from "moment";

export function formatDate(input: Date) {
    const now: moment.Moment = moment(input.toISOString());
    const datetime = now.format('DD-MM-YYYY HH:mm');
    return datetime;
}