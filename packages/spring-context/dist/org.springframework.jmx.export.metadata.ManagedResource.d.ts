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
                        public setObjectName(objectName: java.lang.String | string): void
                        /**
                         * Return the JMX ObjectName of this managed resource.
                         */
                        // @ts-ignore
                        public getObjectName(): string
                        // @ts-ignore
                        public setLog(log: boolean): void
                        // @ts-ignore
                        public isLog(): boolean
                        // @ts-ignore
                        public setLogFile(logFile: java.lang.String | string): void
                        // @ts-ignore
                        public getLogFile(): string
                        // @ts-ignore
                        public setPersistPolicy(persistPolicy: java.lang.String | string): void
                        // @ts-ignore
                        public getPersistPolicy(): string
                        // @ts-ignore
                        public setPersistPeriod(persistPeriod: number /*int*/): void
                        // @ts-ignore
                        public getPersistPeriod(): number /*int*/
                        // @ts-ignore
                        public setPersistName(persistName: java.lang.String | string): void
                        // @ts-ignore
                        public getPersistName(): string
                        // @ts-ignore
                        public setPersistLocation(persistLocation: java.lang.String | string): void
                        // @ts-ignore
                        public getPersistLocation(): string
                    }
                }
            }
        }
    }
}
