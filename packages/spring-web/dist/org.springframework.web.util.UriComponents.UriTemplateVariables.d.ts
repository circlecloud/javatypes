declare namespace org {
    namespace springframework {
        namespace web {
            namespace util {
                namespace UriComponents {
                    /**
                     * Defines the contract for URI Template variables.
                     * @see HierarchicalUriComponents#expand
                     */
                    // @ts-ignore
                    interface UriTemplateVariables {
                        /**
                         * Constant for a value that indicates a URI variable name should be
                         * ignored and left as is. This is useful for partial expanding of some
                         * but not all URI variables.
                         */
                        // @ts-ignore
                        readonly SKIP_VALUE: java.lang.Object | any
                        /**
                         * Get the value for the given URI variable name.
                         * If the value is {@code null}, an empty String is expanded.
                         * If the value is {@link #SKIP_VALUE}, the URI variable is not expanded.
                         * @param name the variable name
                         * @return the variable value, possibly {#code null} or {@link #SKIP_VALUE}
                         */
                        // @ts-ignore
                        getValue(name: java.lang.String | string): any
                    }
                }
            }
        }
    }
}
