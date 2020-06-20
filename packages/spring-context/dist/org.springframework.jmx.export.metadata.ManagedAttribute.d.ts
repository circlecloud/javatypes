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
                        readonly EMPTY: org.springframework.jmx.export.metadata.ManagedAttribute
                        /**
                         * Set the default value of this attribute.
                         */
                        // @ts-ignore
                        setDefaultValue(defaultValue: any): void
                        /**
                         * Return the default value of this attribute.
                         */
                        // @ts-ignore
                        getDefaultValue(): java.lang.Object
                        // @ts-ignore
                        setPersistPolicy(persistPolicy: string): void
                        // @ts-ignore
                        getPersistPolicy(): java.lang.String
                        // @ts-ignore
                        setPersistPeriod(persistPeriod: number /*int*/): void
                        // @ts-ignore
                        getPersistPeriod(): int
                    }
                }
            }
        }
    }
}
