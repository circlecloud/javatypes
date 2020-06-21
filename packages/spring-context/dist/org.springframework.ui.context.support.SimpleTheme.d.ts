declare namespace org {
    namespace springframework {
        namespace ui {
            namespace context {
                namespace support {
                    /**
                     * Default {@link Theme} implementation, wrapping a name and an
                     * underlying {@link org.springframework.context.MessageSource}.
                     * @author Juergen Hoeller
                     * @since 17.06.2003
                     */
                    // @ts-ignore
                    class SimpleTheme extends java.lang.Object implements org.springframework.ui.context.Theme {
                        /**
                         * Create a SimpleTheme.
                         * @param name the name of the theme
                         * @param messageSource the MessageSource that resolves theme messages
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string, messageSource: org.springframework.context.MessageSource)
                        // @ts-ignore
                        public getName(): string
                        // @ts-ignore
                        public getMessageSource(): org.springframework.context.MessageSource
                    }
                }
            }
        }
    }
}
