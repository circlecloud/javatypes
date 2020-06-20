declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Metadata about JMX operation parameters.
                     * Used in conjunction with a {@link ManagedOperation} attribute.
                     * @author Rob Harrop
                     * @since 1.2
                     */
                    // @ts-ignore
                    class ManagedOperationParameter extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the index of this parameter in the operation signature.
                         */
                        // @ts-ignore
                        setIndex(index: number /*int*/): void
                        /**
                         * Return the index of this parameter in the operation signature.
                         */
                        // @ts-ignore
                        getIndex(): int
                        /**
                         * Set the name of this parameter in the operation signature.
                         */
                        // @ts-ignore
                        setName(name: string): void
                        /**
                         * Return the name of this parameter in the operation signature.
                         */
                        // @ts-ignore
                        getName(): java.lang.String
                        /**
                         * Set a description for this parameter.
                         */
                        // @ts-ignore
                        setDescription(description: string): void
                        /**
                         * Return a description for this parameter.
                         */
                        // @ts-ignore
                        getDescription(): java.lang.String
                    }
                }
            }
        }
    }
}
