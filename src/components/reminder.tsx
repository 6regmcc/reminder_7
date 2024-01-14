import {Card, CardBody, Checkbox, HStack, Text} from '@chakra-ui/react'
import React from "react";

type todo = {
    name: string
    notes: string | null
    status: string
    id: number
}

export default function Reminder ({name, notes, status, id}: todo) {
    const done = {
        bg: 'red.200',
        textDecoration: 'line-through'
    }
    const [statusState, setChecked] = React.useState(status)
    const [nameState, setName] = React.useState(name)
    const [notesState, setNotes] = React.useState(notes)

    const PutReminder = async () => {
        const response = await fetch("https://example.com/profile", {
            method: "Put", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }



    const handleCheck = () => {

        //setChecked(!checked)
    }

    return (
        <Card my={4} maxWidth="500px" sx={(statusState === 'done') ? done : {}}>
            <CardBody >
                <HStack  spacing='50px' >
                    <Checkbox  isChecked={statusState === 'done'} onChange={handleCheck}></Checkbox> <Text >{name}</Text>
                </HStack>

            </CardBody>
        </Card>
    )
}
