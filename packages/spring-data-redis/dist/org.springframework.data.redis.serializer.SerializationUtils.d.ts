declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace serializer {
                    /**
                     * Utility class with various serialization-related methods.
                     * @author Costin Leau
                     */
                    // @ts-ignore
                    abstract class SerializationUtils extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static deserialize<T>(rawValues: java.util.Set<number /*byte*/[]> | Array<number /*byte*/[]>, redisSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>): Array<T>
                        // @ts-ignore
                        public static deserialize<T>(rawValues: java.util.List<number /*byte*/[]> | Array<number /*byte*/[]>, redisSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>): Array<T>
                        // @ts-ignore
                        public static deserialize<T>(rawValues: java.util.Collection<number /*byte*/[]> | Array<number /*byte*/[]>, redisSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>): Array<T>
                        // @ts-ignore
                        public static deserialize<T>(rawValues: java.util.Map<number /*byte*/[], number /*byte*/[]>, redisSerializer: org.springframework.data.redis.serializer.RedisSerializer<T>): java.util.Map<T, T>
                        // @ts-ignore
                        public static deserialize<HK, HV>(rawValues: java.util.Map<number /*byte*/[], number /*byte*/[]>, hashKeySerializer: org.springframework.data.redis.serializer.RedisSerializer<HK>, hashValueSerializer: org.springframework.data.redis.serializer.RedisSerializer<HV>): java.util.Map<HK, HV>
                    }
                }
            }
        }
    }
}
