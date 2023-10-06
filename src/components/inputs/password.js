import {
    FormControl,
    Input,
    Button,
    InputRightElement,
    InputGroup,
    FormErrorMessage
  } from '@chakra-ui/react'
  import { useState } from 'react'

export const PasswordInput = ({isValid, value, onChange}) => {
    const [showPassword, setShowPassword] = useState(false)

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <FormControl isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input
                    name="password"
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha com no mínimo 6 caracteres'
                    required
                />
               
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage as="p">
                    A senha deve conter 6 caracteres.
                </FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}
