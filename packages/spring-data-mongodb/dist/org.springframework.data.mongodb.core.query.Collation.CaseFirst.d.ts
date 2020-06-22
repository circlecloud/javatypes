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
                            class CaseFirst extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                /**
                                 * Sort uppercase before lowercase.
                                 * @return new {#link CaseFirst}.
                                 */
                                // @ts-ignore
                                public static upper(): org.springframework.data.mongodb.core.query.Collation.CaseFirst
                                /**
                                 * Sort lowercase before uppercase.
                                 * @return new {#link CaseFirst}.
                                 */
                                // @ts-ignore
                                public static lower(): org.springframework.data.mongodb.core.query.Collation.CaseFirst
                                /**
                                 * Use the default.
                                 * @return new {#link CaseFirst}.
                                 */
                                // @ts-ignore
                                public static off(): org.springframework.data.mongodb.core.query.Collation.CaseFirst
                            }
                        }
                    }
                }
            }
        }
    }
}
