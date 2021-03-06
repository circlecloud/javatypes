declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace ExpiresFilter {
                    /**
                     * Expiration configuration starting point. Either the time the
                     * html-page/servlet-response was served ({@link StartingPoint#ACCESS_TIME})
                     * or the last time the html-page/servlet-response was modified (
                     * {@link StartingPoint#LAST_MODIFICATION_TIME}).
                     */
                    // @ts-ignore
                    class StartingPoint extends java.lang.Enum<org.apache.catalina.filters.ExpiresFilter.StartingPoint> {
                        // @ts-ignore
                        public static readonly ACCESS_TIME: org.apache.catalina.filters.ExpiresFilter.StartingPoint
                        // @ts-ignore
                        public static readonly LAST_MODIFICATION_TIME: org.apache.catalina.filters.ExpiresFilter.StartingPoint
                        // @ts-ignore
                        public static values(): org.apache.catalina.filters.ExpiresFilter.StartingPoint[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.apache.catalina.filters.ExpiresFilter.StartingPoint
                    }
                }
            }
        }
    }
}
