declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace query {
                        /**
                         * Custom {@link ParameterAccessor} that uses a {@link MongoWriter} to serialize parameters into Mongo format.
                         * @author Oliver Gierke
                         * @author Christoph Strobl
                         * @author Thomas Darimont
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        class ConvertingParameterAccessor extends java.lang.Object implements org.springframework.data.mongodb.repository.query.MongoParameterAccessor {
                            /**
                             * Creates a new {@link ConvertingParameterAccessor} with the given {@link MongoWriter} and delegate.
                             * @param writer must not be {#literal null}.
                             * @param delegate must not be {#literal null}.
                             */
                            // @ts-ignore
                            constructor(writer: org.springframework.data.mongodb.core.convert.MongoWriter<any>, delegate: org.springframework.data.mongodb.repository.query.MongoParameterAccessor)
                            // @ts-ignore
                            public iterator(): org.springframework.data.mongodb.repository.query.ConvertingParameterAccessor.PotentiallyConvertingIterator
                            // @ts-ignore
                            public getPageable(): Pageable
                            // @ts-ignore
                            public getSort(): Sort
                            // @ts-ignore
                            public getDynamicProjection(): java.util.Optional<java.lang.Class<any>>
                            // @ts-ignore
                            public getBindableValue(index: number /*int*/): any
                            // @ts-ignore
                            public getDistanceRange(): object
                            // @ts-ignore
                            public getGeoNearLocation(): Point
                            // @ts-ignore
                            public getFullText(): org.springframework.data.mongodb.core.query.TextCriteria
                            // @ts-ignore
                            public hasBindableNullValue(): boolean
                            // @ts-ignore
                            public getValues(): any[]
                        }
                    }
                }
            }
        }
    }
}
