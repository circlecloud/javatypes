declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace metadata {
                    /**
                     * Metadata that indicates to expose a given bean property as a JMX attribute,
                     * with additional descriptor properties that indicate that the attribute is a
                     * metric. Only valid when used on a JavaBean getter.
                     * @author Jennifer Hickey
                     * @since 3.0
                     * @see org.springframework.jmx.export.assembler.MetadataMBeanInfoAssembler
                     */
                    // @ts-ignore
                    class ManagedMetric extends org.springframework.jmx.export.metadata.AbstractJmxAttribute {
                        // @ts-ignore
                        constructor()
                        /**
                         * The category of this metric (ex. throughput, performance, utilization).
                         */
                        // @ts-ignore
                        public setCategory(category: java.lang.String | string): void
                        /**
                         * The category of this metric (ex. throughput, performance, utilization).
                         */
                        // @ts-ignore
                        public getCategory(): string
                        /**
                         * A display name for this metric.
                         */
                        // @ts-ignore
                        public setDisplayName(displayName: java.lang.String | string): void
                        /**
                         * A display name for this metric.
                         */
                        // @ts-ignore
                        public getDisplayName(): string
                        /**
                         * A description of how this metric's values change over time.
                         */
                        // @ts-ignore
                        public setMetricType(metricType: org.springframework.jmx.support.MetricType): void
                        /**
                         * A description of how this metric's values change over time.
                         */
                        // @ts-ignore
                        public getMetricType(): org.springframework.jmx.support.MetricType
                        /**
                         * The persist period for this metric.
                         */
                        // @ts-ignore
                        public setPersistPeriod(persistPeriod: number /*int*/): void
                        /**
                         * The persist period for this metric.
                         */
                        // @ts-ignore
                        public getPersistPeriod(): number /*int*/
                        /**
                         * The persist policy for this metric.
                         */
                        // @ts-ignore
                        public setPersistPolicy(persistPolicy: java.lang.String | string): void
                        /**
                         * The persist policy for this metric.
                         */
                        // @ts-ignore
                        public getPersistPolicy(): string
                        /**
                         * The expected unit of measurement values.
                         */
                        // @ts-ignore
                        public setUnit(unit: java.lang.String | string): void
                        /**
                         * The expected unit of measurement values.
                         */
                        // @ts-ignore
                        public getUnit(): string
                    }
                }
            }
        }
    }
}
