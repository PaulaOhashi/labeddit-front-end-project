import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
   components: {
        Button: {
            variants: {
                header: {
                    bg: "cinza.500"
                },
                form: {
                    width:"100%",
                    borderRadius:"27px",
                    bgGradient:"linear(to-l, #F9B24E, #FF6489)",
                    color:"branco.500",
                    _hover: {
                        textDecoration:"underline"
                    }
                },
                formSecundary: {
                    width:"100%",
                    bg: "branco.500",
                    borderRadius:"27px",
                    color:"laranja.500",
                    border:"1px solid #FE7E02",
                    _hover: {
                        textDecoration:"underline"
                    }
                }

            }
        },
        Text: {
            text: {
                color:"azul.500"
                }
            }
    },

   colors: {
        cinza: {
            500: "#EDEDED"
        },
        laranja: {
            500: "#FE7E02"
        },
        branco: {
            500: "#FFFFFF"
        },
        azul: {
            500: "#00BFFF"
        }
   }
})