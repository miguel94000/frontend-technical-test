export function formatDateUS(dateString: string): string {
    const date = new Date(dateString);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const formattedDate = `${date.getDate()} ${
        months[date.getMonth()]
    } ${date.getFullYear()} at ${date.getHours()}:${date
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
    return formattedDate;
}

export function formatDateDynamicFR(dateString: string): string {
    const today = new Date();
    const date = new Date(dateString);
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const diffInMs = today.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / oneDayInMs);

    if (diffInDays < 1) {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
    } else if (diffInDays <= 7) {
        return date.toLocaleDateString('fr-FR', { weekday: 'long' });
    } else {
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        });
    }
}
