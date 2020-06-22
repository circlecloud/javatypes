declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Custom {@link Query} implementation to setup a basic query from some arbitrary JSON query string.
                         * @author Thomas Risberg
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author John Willemin
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class BasicQuery extends org.springframework.data.mongodb.core.query.Query {
                            /**
                             * Create a new {@link BasicQuery} given a JSON {@code query}.
                             * @param query may be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(query: java.lang.String | string)
                            /**
                             * Create a new {@link BasicQuery} given a query {@link Document}.
                             * @param queryObject must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(queryObject: Document)
                            /**
                             * Create a new {@link BasicQuery} given a JSON {@code query} and {@code fields}.
                             * @param query may be {#literal null}.
                             * @param fields may be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(query: java.lang.String | string, fields: java.lang.String | string)
                            /**
                             * Create a new {@link BasicQuery} given a query {@link Document} and field specification {@link Document}.
                             * @param queryObject must not be {#literal null}.
                             * @param fieldsObject must not be {#literal null}.
                             * @throws IllegalArgumentException when {#code sortObject} or {@code fieldsObject} is {@literal null}.
                             */
                            // @ts-ignore
                            constructor(queryObject: Document, fieldsObject: Document)
                            // @ts-ignore
                            public addCriteria(criteria: org.springframework.data.mongodb.core.query.CriteriaDefinition): org.springframework.data.mongodb.core.query.Query
                            // @ts-ignore
                            public getQueryObject(): Document
                            // @ts-ignore
                            public getFieldsObject(): Document
                            // @ts-ignore
                            public getSortObject(): Document
                            /**
                             * Set the sort {@link Document}.
                             * @param sortObject must not be {#literal null}.
                             * @throws IllegalArgumentException when {#code sortObject} is {@literal null}.
                             */
                            // @ts-ignore
                            public setSortObject(sortObject: Document): void
                            // @ts-ignore
                            public isSorted(): boolean
                            /**
                             * Set the fields (projection) {@link Document}.
                             * @param fieldsObject must not be {#literal null}.
                             * @throws IllegalArgumentException when {#code fieldsObject} is {@literal null}.
                             * @since 1.6
                             */
                            // @ts-ignore
                            setFieldsObject(fieldsObject: Document): void
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
