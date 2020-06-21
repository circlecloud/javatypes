declare namespace org {
    namespace springframework {
        namespace format {
            namespace datetime {
                namespace joda {
                    /**
                     * {@link FactoryBean} that creates a Joda-Time {@link DateTimeFormatter}.
                     * See the {@link DateTimeFormatterFactory base class} for configuration details.
                     * @author Phillip Webb
                     * @author Sam Brannen
                     * @since 3.2
                     * @see #setPattern
                     * @see #setIso
                     * @see #setStyle
                     * @see DateTimeFormatterFactory
                     */
                    // @ts-ignore
                    class DateTimeFormatterFactoryBean extends org.springframework.format.datetime.joda.DateTimeFormatterFactory {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public getObject(): DateTimeFormatter
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
