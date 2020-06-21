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
                        public setIndex(index: number /*int*/): void
                        /**
                         * Return the index of this parameter in the operation signature.
                         */
                        // @ts-ignore
                        public getIndex(): number /*int*/
                        /**
                         * Set the name of this parameter in the operation signature.
                         */
                        // @ts-ignore
                        public setName(name: java.lang.String | string): void
                        /**
                         * Return the name of this parameter in the operation signature.
                         */
                        // @ts-ignore
                        public getName(): string
                        /**
                         * Set a description for this parameter.
                         */
                        // @ts-ignore
                        public setDescription(description: java.lang.String | string): void
                        /**
                         * Return a description for this parameter.
                         */
                        // @ts-ignore
                        public getDescription(): string
                    }
                }
            }
        }
    }
}
