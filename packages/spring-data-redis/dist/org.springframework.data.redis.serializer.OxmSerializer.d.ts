declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Serializer adapter on top of Spring's O/X Mapping. Delegates serialization/deserialization to OXM {@link Marshaller}
                     * and {@link Unmarshaller}. <b>Note:</b> {@literal null} objects are serialized as empty arrays and vice versa.
                     * @author Costin Leau
                     * @author Mark Paluch
                     */
                    // @ts-ignore
                    class OxmSerializer extends java.lang.Object implements org.springframework.data.redis.serializer.RedisSerializer<java.lang.Object | any> {
                        /**
                         * Creates a new, uninitialized {@link OxmSerializer}. Requires {@link #setMarshaller(Marshaller)} and
                         * {@link #setUnmarshaller(Unmarshaller)} to be set before this serializer can be used.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new {@link OxmSerializer} given {@link Marshaller} and {@link Unmarshaller}.
                         * @param marshaller must not be {#literal null}.
                         * @param unmarshaller must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(marshaller: Marshaller, unmarshaller: Unmarshaller)
                        /**
                         * @param marshaller The marshaller to set.
                         */
                        // @ts-ignore
                        public setMarshaller(marshaller: Marshaller): void
                        /**
                         * @param unmarshaller The unmarshaller to set.
                         */
                        // @ts-ignore
                        public setUnmarshaller(unmarshaller: Unmarshaller): void
                        // @ts-ignore
                        public afterPropertiesSet(): void
                        // @ts-ignore
                        public deserialize(bytes: number /*byte*/[]): any
                        // @ts-ignore
                        public serialize(t: java.lang.Object | any): number /*byte*/[]
                    }
                }
            }
        }
    }
}
