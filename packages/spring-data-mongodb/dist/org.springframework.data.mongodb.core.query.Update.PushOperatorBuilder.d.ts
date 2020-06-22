declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        namespace Update {
                            /**
                             * Builder for creating {@code $push} modifiers
                             * @author Christoph Strobl
                             * @author Thomas Darimont
                             */
                            // @ts-ignore
                            class PushOperatorBuilder extends java.lang.Object {
                                /**
                                 * Propagates {@code $each} to {@code $push}
                                 * @param values
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public each(...values: java.lang.Object[] | any[]): org.springframework.data.mongodb.core.query.Update
                                /**
                                 * Propagates {@code $slice} to {@code $push}. {@code $slice} requires the {@code $each operator}. <br />
                                 * If {@literal count} is zero, {@code $slice} updates the array to an empty array. <br />
                                 * If {@literal count} is negative, {@code $slice} updates the array to contain only the last {@code count}
                                 * elements. <br />
                                 * If {@literal count} is positive, {@code $slice} updates the array to contain only the first {@code count}
                                 * elements. <br />
                                 * @param count
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public slice(count: number /*int*/): org.springframework.data.mongodb.core.query.Update.PushOperatorBuilder
                                /**
                                 * Propagates {@code $sort} to {@code $push}. {@code $sort} requires the {@code $each} operator. Forces elements to
                                 * be sorted by values in given {@literal direction}.
                                 * @param direction must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public sort(direction: Direction): org.springframework.data.mongodb.core.query.Update.PushOperatorBuilder
                                /**
                                 * Propagates {@code $sort} to {@code $push}. {@code $sort} requires the {@code $each} operator. Forces document
                                 * elements to be sorted in given {@literal order}.
                                 * @param sort must not be {#literal null}.
                                 * @return never {#literal null}.
                                 * @since 1.10
                                 */
                                // @ts-ignore
                                public sort(sort: Sort): org.springframework.data.mongodb.core.query.Update.PushOperatorBuilder
                                /**
                                 * Forces values to be added at the given {@literal position}.
                                 * @param position the position offset. As of MongoDB 3.6 use a negative value to indicate starting from the end,
                                 *           counting (but not including) the last element of the array.
                                 * @return never {#literal null}.
                                 * @since 1.7
                                 */
                                // @ts-ignore
                                public atPosition(position: number /*int*/): org.springframework.data.mongodb.core.query.Update.PushOperatorBuilder
                                /**
                                 * Forces values to be added at given {@literal position}.
                                 * @param position can be {#literal null} which will be appended at the last position.
                                 * @return never {#literal null}.
                                 * @since 1.7
                                 */
                                // @ts-ignore
                                public atPosition(position: org.springframework.data.mongodb.core.query.Update.Position): org.springframework.data.mongodb.core.query.Update.PushOperatorBuilder
                                /**
                                 * Propagates {@link #value(Object)} to {@code $push}
                                 * @param value
                                 * @return never {#literal null}.
                                 */
                                // @ts-ignore
                                public value(value: java.lang.Object | any): org.springframework.data.mongodb.core.query.Update
                                // @ts-ignore
                                public hashCode(): number /*int*/
                                // @ts-ignore
                                public equals(obj: java.lang.Object | any): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
