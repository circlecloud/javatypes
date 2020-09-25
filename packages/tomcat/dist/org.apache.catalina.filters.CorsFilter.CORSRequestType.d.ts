declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                namespace CorsFilter {
                    /**
                     * Enumerates varies types of CORS requests. Also, provides utility methods
                     * to determine the request type.
                     */
                    // @ts-ignore
                    class CORSRequestType extends java.lang.Enum<org.apache.catalina.filters.CorsFilter.CORSRequestType> {
                        /**
                         * A simple HTTP request, i.e. it shouldn't be pre-flighted.
                         */
                        // @ts-ignore
                        public static readonly SIMPLE: org.apache.catalina.filters.CorsFilter.CORSRequestType
                        /**
                         * A HTTP request that needs to be pre-flighted.
                         */
                        // @ts-ignore
                        public static readonly ACTUAL: org.apache.catalina.filters.CorsFilter.CORSRequestType
                        /**
                         * A pre-flight CORS request, to get meta information, before a
                         * non-simple HTTP request is sent.
                         */
                        // @ts-ignore
                        public static readonly PRE_FLIGHT: org.apache.catalina.filters.CorsFilter.CORSRequestType
                        /**
                         * Not a CORS request, but a normal request.
                         */
                        // @ts-ignore
                        public static readonly NOT_CORS: org.apache.catalina.filters.CorsFilter.CORSRequestType
                        /**
                         * An invalid CORS request, i.e. it qualifies to be a CORS request, but
                         * fails to be a valid one.
                         */
                        // @ts-ignore
                        public static readonly INVALID_CORS: org.apache.catalina.filters.CorsFilter.CORSRequestType
                        // @ts-ignore
                        public static values(): org.apache.catalina.filters.CorsFilter.CORSRequestType[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.apache.catalina.filters.CorsFilter.CORSRequestType
                    }
                }
            }
        }
    }
}
