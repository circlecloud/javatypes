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
                        afterPropertiesSet(): void
                        // @ts-ignore
                        getObject(): DateTimeFormatter
                        // @ts-ignore
                        getObjectType(): java.lang.Class<?>
                        // @ts-ignore
                        isSingleton(): boolean
                    }
                }
            }
        }
    }
}
