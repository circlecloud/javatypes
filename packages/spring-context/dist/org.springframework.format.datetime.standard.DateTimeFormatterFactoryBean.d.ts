declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace standard {
                    /**
                     * {@link FactoryBean} that creates a JSR-310 {@link java.time.format.DateTimeFormatter}.
                     * See the {@link DateTimeFormatterFactory base class} for configuration details.
                     * @author Juergen Hoeller
                     * @since 4.0
                     * @see #setPattern
                     * @see #setIso
                     * @see #setDateStyle
                     * @see #setTimeStyle
                     * @see DateTimeFormatterFactory
                     */
                    // @ts-ignore
                    class DateTimeFormatterFactoryBean extends org.springframework.format.datetime.standard.DateTimeFormatterFactory {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObject(): java.time.format.DateTimeFormatter
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
