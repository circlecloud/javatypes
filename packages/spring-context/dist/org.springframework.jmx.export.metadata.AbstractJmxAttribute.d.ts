declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Base class for all JMX metadata classes.
                     * @author Rob Harrop
                     * @since 1.2
                     */
                    // @ts-ignore
                    class AbstractJmxAttribute extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set a description for this attribute.
                         */
                        // @ts-ignore
                        setDescription(description: string): void
                        /**
                         * Return a description for this attribute.
                         */
                        // @ts-ignore
                        getDescription(): java.lang.String
                        /**
                         * Set a currency time limit for this attribute.
                         */
                        // @ts-ignore
                        setCurrencyTimeLimit(currencyTimeLimit: number /*int*/): void
                        /**
                         * Return a currency time limit for this attribute.
                         */
                        // @ts-ignore
                        getCurrencyTimeLimit(): int
                    }
                }
            }
        }
    }
}
