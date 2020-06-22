declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Custom extension of {@link Parameters} discovering additional
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class MongoParameters extends java.lang.Object {
                            /**
                             * Creates a new {@link MongoParameters} instance from the given {@link Method} and {@link MongoQueryMethod}.
                             * @param method must not be {#literal null}.
                             * @param queryMethod must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(method: java.lang.reflect.Method, isGeoNearMethod: boolean)
                            // @ts-ignore
                            createParameter(parameter: MethodParameter): org.springframework.data.mongodb.repository.query.MongoParameters.MongoParameter
                            // @ts-ignore
                            public getDistanceRangeIndex(): number /*int*/
                            /**
                             * Returns the index of the {@link Distance} parameter to be used for max distance in geo queries.
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public getMaxDistanceIndex(): number /*int*/
                            /**
                             * Returns the index of the parameter to be used to start a geo-near query from.
                             * @return 
                             */
                            // @ts-ignore
                            public getNearIndex(): number /*int*/
                            /**
                             * Returns ths inde of the parameter to be used as a textquery param
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public getFullTextParameterIndex(): number /*int*/
                            /**
                             * @return 
                             * @since 1.6
                             */
                            // @ts-ignore
                            public hasFullTextParameter(): boolean
                            /**
                             * @return 
                             * @since 1.7
                             */
                            // @ts-ignore
                            public getRangeIndex(): number /*int*/
                            // @ts-ignore
                            createFrom(parameters: java.util.List<org.springframework.data.mongodb.repository.query.MongoParameters.MongoParameter> | Array<org.springframework.data.mongodb.repository.query.MongoParameters.MongoParameter>): org.springframework.data.mongodb.repository.query.MongoParameters
                        }
                    }
                }
            }
        }
    }
}
