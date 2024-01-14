import {Card, CardBody, Checkbox, HStack, Text} from '@chakra-ui/react'

type todo = {
    name: string
    notes: string | null
    status: string
}

export default function Reminder ({name, notes, status}: todo) {
    const done = {
        bg: 'red.200',
        textDecoration: 'line-through'
    }

    return (
        <Card my={4} maxWidth="500px" sx={(status === "done") ? done : {}}>
            <CardBody >
                <HStack  spacing='50px' >
                    <Checkbox></Checkbox> <Text >{name}</Text>
                </HStack>

            </CardBody>
        </Card>
    )
}
