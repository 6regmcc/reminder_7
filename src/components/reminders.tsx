import Reminder from "./reminder";
import {Container} from "@chakra-ui/react";
type reminder = {
    name: string
    notes: string | null
    status: strin
    id: number
}

type reminders = Array<reminder>

export default function Reminders ({reminders}:reminders) {

    return (
        <Container>
            {reminders.map((reminder, index) => {
                return <Reminder key={index} name={reminder.name} notes={reminder.notes} status={reminder.status} />
            })}
        </Container>
    )
}