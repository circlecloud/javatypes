declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace repository {
                    namespace support {
                        /**
                         * {@code QuerydslAbstractMongodbQuery} provides a base class for general Querydsl query implementation.
                         * <p>
                         * Original implementation source {@link com.querydsl.mongodb.AbstractMongodbQuery} by {@literal The Querydsl Team}
                         * (<a href="https://www.querydsl.com/team">https://www.querydsl.com/team</a>) licensed under the Apache License, Version
                         * 2.0.
                         * </p>
                         * Modified for usage with {@link MongodbDocumentSerializer}.
                         * @param <Q> concrete subtype
                         * @author laimw
                         * @author Mark Paluch
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        abstract class QuerydslAbstractMongodbQuery<K, Q extends org.springframework.data.mongodb.repository.support.QuerydslAbstractMongodbQuery<K, Q>> extends java.lang.Object {
                            // @ts-ignore
                            public distinct(): Q
                            // @ts-ignore
                            public where(...e: Predicate[]): Q
                            // @ts-ignore
                            public limit(limit: number /*long*/): Q
                            // @ts-ignore
                            public offset(offset: number /*long*/): Q
                            // @ts-ignore
                            public restrict(modifiers: QueryModifiers): Q
                            // @ts-ignore
                            public orderBy(...o: object[]): Q
                            // @ts-ignore
                            public set<T>(param: object, value: T): Q
                            /**
                             * Compute the actual projection {@link Document} from a given projectionExpression by serializing the contained
                             * {@link Expression expressions} individually.
                             * @param projectionExpression the computed projection {#link Document}.
                             * @return never {#literal null}. An empty {@link Document} by default.
                             * @see MongodbDocumentSerializer#handle(Expression)
                             */
                            // @ts-ignore
                            createProjection(projectionExpression: object): Document
                            /**
                             * Compute the filer {@link Document} from the given {@link Predicate}.
                             * @param predicate can be {#literal null}.
                             * @return an empty {#link Document} if predicate is {@literal null}.
                             * @see MongodbDocumentSerializer#toQuery(Predicate)
                             */
                            // @ts-ignore
                            createQuery(predicate: Predicate): Document
                            /**
                             * Compute the sort {@link Document} from the given list of {@link OrderSpecifier order specifiers}.
                             * @param orderSpecifiers can be {#literal null}.
                             * @return an empty {#link Document} if predicate is {@literal null}.
                             * @see MongodbDocumentSerializer#toSort(List)
                             */
                            // @ts-ignore
                            createSort(orderSpecifiers: java.util.List<object> | Array<object>): Document
                            // @ts-ignore
                            public toString(): string
                        }
                    }
                }
            }
        }
    }
}
