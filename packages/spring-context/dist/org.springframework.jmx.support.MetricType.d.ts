declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * Represents how the measurement values of a {@code ManagedMetric} will change over time.
                 * @author Jennifer Hickey
                 * @since 3.0
                 */
                // @ts-ignore
                class MetricType extends java.lang.Enum<org.springframework.jmx.support.MetricType> {
                    /**
                     * The measurement values may go up or down over time.
                     */
                    // @ts-ignore
                    readonly GAUGE: org.springframework.jmx.support.MetricType
                    /**
                     * The measurement values will always increase.
                     */
                    // @ts-ignore
                    readonly COUNTER: org.springframework.jmx.support.MetricType
                    // @ts-ignore
                    values(): org.springframework.jmx.support.MetricType[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.springframework.jmx.support.MetricType
                }
            }
        }
    }
}
