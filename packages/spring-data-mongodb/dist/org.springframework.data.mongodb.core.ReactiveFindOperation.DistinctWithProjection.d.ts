declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace ReactiveFindOperation {
                        /**
                         * Result type override. Optional.
                         * @author Christoph Strobl
                         * @since 2.1
                         */
                        // @ts-ignore
                        interface DistinctWithProjection {
                            /**
                             * Define the target type the result should be mapped to. <br />
                             * Skip this step if you are anyway fine with the default conversion.
                             * <dl>
                             * <dt>{@link Object} (the default)</dt>
                             * <dd>Result is mapped according to the {@link org.bson.BsonType} converting eg. {@link org.bson.BsonString} into
                             * plain {@link String}, {@link org.bson.BsonInt64} to {@link Long}, etc. always picking the most concrete type with
                             * respect to the domain types property.<br />
                             * Any {@link org.bson.BsonType#DOCUMENT} is run through the {@link org.springframework.data.convert.EntityReader}
                             * to obtain the domain type. <br />
                             * Using {@link Object} also works for non strictly typed fields. Eg. a mixture different types like fields using
                             * {@link String} in one {@link org.bson.Document} while {@link Long} in another.</dd>
                             * <dt>Any Simple type like {@link String}, {@link Long}, ...</dt>
                             * <dd>The result is mapped directly by the MongoDB Java driver and the {@link org.bson.codecs.CodeCodec Codecs} in
                             * place. This works only for results where all documents considered for the operation use the very same type for
                             * the field.</dd>
                             * <dt>Any Domain type</dt>
                             * <dd>Domain types can only be mapped if the if the result of the actual {@code distinct()} operation returns
                             * {@link org.bson.BsonType#DOCUMENT}.</dd>
                             * <dt>{@link org.bson.BsonValue}</dt>
                             * <dd>Using {@link org.bson.BsonValue} allows retrieval of the raw driver specific format, which returns eg.
                             * {@link org.bson.BsonString}.</dd>
                             * </dl>
                             * @param resultType must not be {#literal null}.
                             * @param <R> result type.
                             * @return new instance of {#link TerminatingDistinct}.
                             * @throws IllegalArgumentException if resultType is {#literal null}.
                             */
                            // @ts-ignore
                            as<R>(resultType: java.lang.Class<R>): org.springframework.data.mongodb.core.ReactiveFindOperation.TerminatingDistinct<R>
                        }
                    }
                }
            }
        }
    }
}
