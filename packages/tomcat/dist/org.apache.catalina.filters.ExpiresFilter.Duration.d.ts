declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace ExpiresFilter {
                    /**
                     * Duration composed of an {@link #amount} and a {@link #unit}
                     */
                    // @ts-ignore
                    class Duration extends java.lang.Object {
                        // @ts-ignore
                        constructor(amount: number /*int*/, unit: org.apache.catalina.filters.ExpiresFilter.DurationUnit)
                        // @ts-ignore
                        readonly amount: number /*int*/
                        // @ts-ignore
                        readonly unit: org.apache.catalina.filters.ExpiresFilter.DurationUnit
                        // @ts-ignore
                        public getAmount(): number /*int*/
                        // @ts-ignore
                        public getUnit(): org.apache.catalina.filters.ExpiresFilter.DurationUnit
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
