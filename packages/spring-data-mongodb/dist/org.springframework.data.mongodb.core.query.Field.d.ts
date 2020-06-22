declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * @author Thomas Risberg
                         * @author Oliver Gierke
                         * @author Patryk Wasik
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class Field extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public include(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Field
                            // @ts-ignore
                            public exclude(key: java.lang.String | string): org.springframework.data.mongodb.core.query.Field
                            // @ts-ignore
                            public slice(key: java.lang.String | string, size: number /*int*/): org.springframework.data.mongodb.core.query.Field
                            // @ts-ignore
                            public slice(key: java.lang.String | string, offset: number /*int*/, size: number /*int*/): org.springframework.data.mongodb.core.query.Field
                            // @ts-ignore
                            public elemMatch(key: java.lang.String | string, elemMatchCriteria: org.springframework.data.mongodb.core.query.Criteria): org.springframework.data.mongodb.core.query.Field
                            /**
                             * The array field must appear in the query. Only one positional {@code $} operator can appear in the projection and
                             * only one array field can appear in the query.
                             * @param field query array field, must not be {#literal null} or empty.
                             * @param value
                             * @return 
                             */
                            // @ts-ignore
                            public position(field: java.lang.String | string, value: number /*int*/): org.springframework.data.mongodb.core.query.Field
                            // @ts-ignore
                            public getFieldsObject(): Document
                        }
                    }
                }
            }
        }
    }
}
