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
                        setCategory(category: string): void
                        /**
                         * The category of this metric (ex. throughput, performance, utilization).
                         */
                        // @ts-ignore
                        getCategory(): java.lang.String
                        /**
                         * A display name for this metric.
                         */
                        // @ts-ignore
                        setDisplayName(displayName: string): void
                        /**
                         * A display name for this metric.
                         */
                        // @ts-ignore
                        getDisplayName(): java.lang.String
                        /**
                         * A description of how this metric's values change over time.
                         */
                        // @ts-ignore
                        setMetricType(metricType: org.springframework.jmx.support.MetricType): void
                        /**
                         * A description of how this metric's values change over time.
                         */
                        // @ts-ignore
                        getMetricType(): org.springframework.jmx.support.MetricType
                        /**
                         * The persist period for this metric.
                         */
                        // @ts-ignore
                        setPersistPeriod(persistPeriod: number /*int*/): void
                        /**
                         * The persist period for this metric.
                         */
                        // @ts-ignore
                        getPersistPeriod(): int
                        /**
                         * The persist policy for this metric.
                         */
                        // @ts-ignore
                        setPersistPolicy(persistPolicy: string): void
                        /**
                         * The persist policy for this metric.
                         */
                        // @ts-ignore
                        getPersistPolicy(): java.lang.String
                        /**
                         * The expected unit of measurement values.
                         */
                        // @ts-ignore
                        setUnit(unit: string): void
                        /**
                         * The expected unit of measurement values.
                         */
                        // @ts-ignore
                        getUnit(): java.lang.String
                    }
                }
            }
        }
    }
}
