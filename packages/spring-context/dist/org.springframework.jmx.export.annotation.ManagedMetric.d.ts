declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace export$ {
                namespace annotation {
                    /**
                     * Method-level annotation that indicates to expose a given bean property as a
                     * JMX attribute, with added descriptor properties to indicate that it is a metric.
                     * Only valid when used on a JavaBean getter.
                     * @author Jennifer Hickey
                     * @since 3.0
                     * @see org.springframework.jmx.export.metadata.ManagedMetric
                     */
                    // @ts-ignore
                    abstract class ManagedMetric implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
