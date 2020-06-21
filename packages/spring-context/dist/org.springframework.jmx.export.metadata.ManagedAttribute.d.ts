declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Metadata that indicates to expose a given bean property as JMX attribute.
                     * Only valid when used on a JavaBean getter or setter.
                     * @author Rob Harrop
                     * @since 1.2
                     * @see org.springframework.jmx.export.assembler.MetadataMBeanInfoAssembler
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    class ManagedAttribute extends org.springframework.jmx.export.metadata.AbstractJmxAttribute {
                        // @ts-ignore
                        constructor()
                        /**
                         * Empty attributes.
                         */
                        // @ts-ignore
                        public static readonly EMPTY: org.springframework.jmx.export.metadata.ManagedAttribute
                        /**
                         * Set the default value of this attribute.
                         */
                        // @ts-ignore
                        public setDefaultValue(defaultValue: java.lang.Object | any): void
                        /**
                         * Return the default value of this attribute.
                         */
                        // @ts-ignore
                        public getDefaultValue(): any
                        // @ts-ignore
                        public setPersistPolicy(persistPolicy: java.lang.String | string): void
                        // @ts-ignore
                        public getPersistPolicy(): string
                        // @ts-ignore
                        public setPersistPeriod(persistPeriod: number /*int*/): void
                        // @ts-ignore
                        public getPersistPeriod(): number /*int*/
                    }
                }
            }
        }
    }
}
