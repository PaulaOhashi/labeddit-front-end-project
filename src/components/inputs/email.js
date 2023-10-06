import {
    FormControl,
    Input,
    FormErrorMessage
  } from '@chakra-ui/react'

export const EmailInput = ({isValid, value, onChange}) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name="email"
                value={value}
                onChange={onChange}
                placeholder="E-mail"
                required
            />
            {!isValid ? (
                <FormErrorMessage as="p">
                    E-mail invalido.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}
