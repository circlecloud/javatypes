declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Mongo-specific {@link ParametersParameterAccessor} to allow access to the {@link Distance} parameter.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoParametersParameterAccessor extends ParametersParameterAccessor implements org.springframework.data.mongodb.repository.query.MongoParameterAccessor {
                            /**
                             * Creates a new {@link MongoParametersParameterAccessor}.
                             * @param method must not be {#literal null}.
                             * @param values must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: org.springframework.data.mongodb.repository.query.MongoQueryMethod, values: java.lang.Object[] | any[])
                            // @ts-ignore
                            public getDistanceRange(): object
                            // @ts-ignore
                            public getGeoNearLocation(): Point
                            // @ts-ignore
                            public getFullText(): org.springframework.data.mongodb.core.query.TextCriteria
                            // @ts-ignore
                            potentiallyConvertFullText(fullText: java.lang.Object | any): org.springframework.data.mongodb.core.query.TextCriteria
                            // @ts-ignore
                            public getValues(): any[]
                        }
                    }
                }
            }
        }
    }
}
