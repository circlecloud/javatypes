declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Enumeration for operations on a collection. Used with {@link MongoAction} to help determine the WriteConcern to use
                     * for a given mutating operation
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     * @see MongoAction
                     */
                    // @ts-ignore
                    class MongoActionOperation extends java.lang.Enum<org.springframework.data.mongodb.core.MongoActionOperation> {
                        // @ts-ignore
                        public static readonly REMOVE: org.springframework.data.mongodb.core.MongoActionOperation
                        // @ts-ignore
                        public static readonly UPDATE: org.springframework.data.mongodb.core.MongoActionOperation
                        // @ts-ignore
                        public static readonly INSERT: org.springframework.data.mongodb.core.MongoActionOperation
                        // @ts-ignore
                        public static readonly INSERT_LIST: org.springframework.data.mongodb.core.MongoActionOperation
                        // @ts-ignore
                        public static readonly SAVE: org.springframework.data.mongodb.core.MongoActionOperation
                        // @ts-ignore
                        public static readonly BULK: org.springframework.data.mongodb.core.MongoActionOperation
                        // @ts-ignore
                        public static values(): org.springframework.data.mongodb.core.MongoActionOperation[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.MongoActionOperation
                    }
                }
            }
        }
    }
}
