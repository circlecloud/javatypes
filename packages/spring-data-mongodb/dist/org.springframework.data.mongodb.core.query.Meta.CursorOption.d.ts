declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Meta {
                            /**
                             * {@link CursorOption} represents {@code OP_QUERY} wire protocol flags to change the behavior of queries.
                             * @author Christoph Strobl
                             * @since 1.10
                             */
                            // @ts-ignore
                            class CursorOption extends java.lang.Enum<org.springframework.data.mongodb.core.query.Meta.CursorOption> {
                                /**
                                 * Prevents the server from timing out idle cursors.
                                 */
                                // @ts-ignore
                                readonly NO_TIMEOUT: org.springframework.data.mongodb.core.query.Meta.CursorOption
                                /**
                                 * Sets the cursor to return all data returned by the query at once rather than splitting the results into batches.
                                 */
                                // @ts-ignore
                                readonly EXHAUST: org.springframework.data.mongodb.core.query.Meta.CursorOption
                                /**
                                 * Allows querying of a replica slave.
                                 */
                                // @ts-ignore
                                readonly SLAVE_OK: org.springframework.data.mongodb.core.query.Meta.CursorOption
                                /**
                                 * Sets the cursor to return partial data from a query against a sharded cluster in which some shards do not respond
                                 * rather than throwing an error.
                                 */
                                // @ts-ignore
                                readonly PARTIAL: org.springframework.data.mongodb.core.query.Meta.CursorOption
                                // @ts-ignore
                                values(): org.springframework.data.mongodb.core.query.Meta.CursorOption[]
                                // @ts-ignore
                                valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.query.Meta.CursorOption
                            }
                        }
                    }
                }
            }
        }
    }
}
