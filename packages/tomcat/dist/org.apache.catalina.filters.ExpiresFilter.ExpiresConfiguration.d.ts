declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace ExpiresFilter {
                    /**
                     * <p>
                     * Main piece of configuration of the filter.
                     * </p>
                     * <p>
                     * Can be expressed like '{@code access plus 1 month 15 days 2 hours}'.
                     * </p>
                     */
                    // @ts-ignore
                    class ExpiresConfiguration extends java.lang.Object {
                        // @ts-ignore
                        constructor(startingPoint: org.apache.catalina.filters.ExpiresFilter.StartingPoint, durations: java.util.List<org.apache.catalina.filters.ExpiresFilter.Duration> | Array<org.apache.catalina.filters.ExpiresFilter.Duration>)
                        // @ts-ignore
                        public getDurations(): Array<org.apache.catalina.filters.ExpiresFilter.Duration>
                        // @ts-ignore
                        public getStartingPoint(): org.apache.catalina.filters.ExpiresFilter.StartingPoint
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
