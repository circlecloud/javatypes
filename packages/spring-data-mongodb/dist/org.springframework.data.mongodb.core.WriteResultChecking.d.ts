declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Enum to represent how strict the check of {@link com.mongodb.WriteResult} shall be. It can either be skipped entirely
                     * (use {@link #NONE}) or cause an exception to be thrown {@link #EXCEPTION}.
                     * @author Thomas Risberg
                     * @author Oliver Gierke
                     */
                    // @ts-ignore
                    class WriteResultChecking extends java.lang.Enum<org.springframework.data.mongodb.core.WriteResultChecking> {
                        // @ts-ignore
                        public static readonly NONE: org.springframework.data.mongodb.core.WriteResultChecking
                        // @ts-ignore
                        public static readonly EXCEPTION: org.springframework.data.mongodb.core.WriteResultChecking
                        // @ts-ignore
                        public static values(): org.springframework.data.mongodb.core.WriteResultChecking[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.WriteResultChecking
                    }
                }
            }
        }
    }
}
