declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Collation {
                            /**
                             * @since 2.0
                             */
                            // @ts-ignore
                            class AlternateWithMaxVariable extends org.springframework.data.mongodb.core.query.Collation.Alternate {
                                /**
                                 * Consider both whitespaces and punctuation as ignorable.
                                 * @return new {#link AlternateWithMaxVariable}.
                                 */
                                // @ts-ignore
                                public punct(): org.springframework.data.mongodb.core.query.Collation.Alternate
                                /**
                                 * Only consider whitespaces as ignorable.
                                 * @return new {#link AlternateWithMaxVariable}.
                                 */
                                // @ts-ignore
                                public space(): org.springframework.data.mongodb.core.query.Collation.Alternate
                            }
                        }
                    }
                }
            }
        }
    }
}
