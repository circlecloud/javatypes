declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Metadata indicating that instances of an annotated class
                     * are to be registered with a JMX server.
                     * Only valid when used on a {@code Class}.
                     * @author Rob Harrop
                     * @since 1.2
                     * @see org.springframework.jmx.export.assembler.MetadataMBeanInfoAssembler
                     * @see org.springframework.jmx.export.naming.MetadataNamingStrategy
                     * @see org.springframework.jmx.export.MBeanExporter
                     */
                    // @ts-ignore
                    class ManagedResource extends org.springframework.jmx.export.metadata.AbstractJmxAttribute {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the JMX ObjectName of this managed resource.
                         */
                        // @ts-ignore
                        setObjectName(objectName: string): void
                        /**
                         * Return the JMX ObjectName of this managed resource.
                         */
                        // @ts-ignore
                        getObjectName(): java.lang.String
                        // @ts-ignore
                        setLog(log: boolean): void
                        // @ts-ignore
                        isLog(): boolean
                        // @ts-ignore
                        setLogFile(logFile: string): void
                        // @ts-ignore
                        getLogFile(): java.lang.String
                        // @ts-ignore
                        setPersistPolicy(persistPolicy: string): void
                        // @ts-ignore
                        getPersistPolicy(): java.lang.String
                        // @ts-ignore
                        setPersistPeriod(persistPeriod: number /*int*/): void
                        // @ts-ignore
                        getPersistPeriod(): int
                        // @ts-ignore
                        setPersistName(persistName: string): void
                        // @ts-ignore
                        getPersistName(): java.lang.String
                        // @ts-ignore
                        setPersistLocation(persistLocation: string): void
                        // @ts-ignore
                        getPersistLocation(): java.lang.String
                    }
                }
            }
        }
    }
}
