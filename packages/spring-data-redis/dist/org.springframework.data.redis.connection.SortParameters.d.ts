declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * Entity containing the parameters for the SORT operation.
                     * @author Costin Leau
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface SortParameters {
                        /**
                         * Returns the sorting order. Can be null if nothing is specified.
                         * @return sorting order. {#literal null} if not set.
                         */
                        // @ts-ignore
                        getOrder(): org.springframework.data.redis.connection.SortParameters.Order
                        /**
                         * Indicates if the sorting is numeric (default) or alphabetical (lexicographical). Can be null if nothing is
                         * specified.
                         * @return the type of sorting. {#literal null} if not set.
                         */
                        // @ts-ignore
                        isAlphabetic(): java.lang.Boolean
                        /**
                         * Returns the pattern (if set) for sorting by external keys (<tt>BY</tt>). Can be null if nothing is specified.
                         * @return <tt>BY</tt> pattern. {#literal null} if not set.
                         */
                        // @ts-ignore
                        getByPattern(): number /*byte*/[]
                        /**
                         * Returns the pattern (if set) for retrieving external keys (<tt>GET</tt>). Can be null if nothing is specified.
                         * @return <tt>GET</tt> pattern. {#literal null} if not set.
                         */
                        // @ts-ignore
                        getGetPattern(): number /*byte*/[][]
                        /**
                         * Returns the sorting limit (range or pagination). Can be null if nothing is specified.
                         * @return sorting limit/range. {#literal null} if not set.
                         */
                        // @ts-ignore
                        getLimit(): org.springframework.data.redis.connection.SortParameters.Range
                    }
                }
            }
        }
    }
}
