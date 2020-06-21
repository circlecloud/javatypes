declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    namespace parser {
                        // @ts-ignore
                        class Host extends java.lang.Object {
                            /**
                             * Parse the given input as a HTTP Host header value.
                             * @param mb The host header value
                             * @return The position of ':' that separates the host from the port or -1
                             *          if it is not present
                             * @throws IllegalArgumentException If the host header value is not
                             *          specification compliant
                             */
                            // @ts-ignore
                            public static parse(mb: org.apache.tomcat.util.buf.MessageBytes): number /*int*/
                            /**
                             * Parse the given input as a HTTP Host header value.
                             * @param string The host header value
                             * @return The position of ':' that separates the host from the port or -1
                             *          if it is not present
                             * @throws IllegalArgumentException If the host header value is not
                             *          specification compliant
                             */
                            // @ts-ignore
                            public static parse(string: java.lang.String | string): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
