import { useEffect, useState } from "react";

const DatePosted = ({ datePosted }) => {
    const [date, setDate] = useState(datePosted);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <span data-testid="datePosted">
            &nbsp;{`${date.toLocaleDateString()} @ ${date.toLocaleTimeString()}`}
        </span>
    );
};

DatePosted.defaultProps = {
    datePosted: new Date()
}

export default DatePosted;