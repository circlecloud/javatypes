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
                    public static readonly GAUGE: org.springframework.jmx.support.MetricType
                    /**
                     * The measurement values will always increase.
                     */
                    // @ts-ignore
                    public static readonly COUNTER: org.springframework.jmx.support.MetricType
                    // @ts-ignore
                    public static values(): org.springframework.jmx.support.MetricType[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.springframework.jmx.support.MetricType
                }
            }
        }
    }
}
