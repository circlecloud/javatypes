declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace support {
                namespace converter {
                    namespace Jackson2JavaTypeMapper {
                        /**
                         * The precedence for type conversion - inferred from the method parameter or message
                         * headers. Only applies if both exist.
                         * @since 1.6
                         */
                        // @ts-ignore
                        class TypePrecedence extends java.lang.Enum<org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence> {
                            // @ts-ignore
                            public static readonly INFERRED: org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence
                            // @ts-ignore
                            public static readonly TYPE_ID: org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence
                            // @ts-ignore
                            public static values(): org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.amqp.support.converter.Jackson2JavaTypeMapper.TypePrecedence
                        }
                    }
                }
            }
        }
    }
}
