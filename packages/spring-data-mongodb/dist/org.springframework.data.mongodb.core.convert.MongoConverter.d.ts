declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace convert {
                        /**
                         * Central Mongo specific converter interface which combines {@link MongoWriter} and {@link EntityReader}.
                         * @author Oliver Gierke
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         */
                        // @ts-ignore
                        interface MongoConverter extends org.springframework.data.mongodb.core.convert.MongoWriter<java.lang.Object | any> {
                            /**
                             * Returns thw {@link TypeMapper} being used to write type information into {@link Document}s created with that
                             * converter.
                             * @return will never be {#literal null}.
                             */
                            // @ts-ignore
                            getTypeMapper(): org.springframework.data.mongodb.core.convert.MongoTypeMapper
                            /**
                             * Mapping function capable of converting values into a desired target type by eg. extracting the actual java type
                             * from a given {@link BsonValue}.
                             * @param targetType must not be {#literal null}.
                             * @param dbRefResolver must not be {#literal null}.
                             * @param <S>
                             * @param <T>
                             * @return new typed {#link java.util.function.Function}.
                             * @throws IllegalArgumentException if {#literal targetType} is {@literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            mapValueToTargetType<S, T>(source: S, targetType: java.lang.Class<T>, dbRefResolver: org.springframework.data.mongodb.core.convert.DbRefResolver): T
                        }
                    }
                }
            }
        }
    }
}
