declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Simple callback interface to allow customization of a {@link FindIterable}.
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    interface CursorPreparer {
                        /**
                         * Prepare the given cursor (apply limits, skips and so on). Returns the prepared cursor.
                         * @param cursor
                         */
                        // @ts-ignore
                        prepare(cursor: object): object
                    }
                }
            }
        }
    }
}
