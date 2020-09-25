declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace DataTransactionResult {
                    /**
                     * The type of transaction result.
                     */
                    // @ts-ignore
                    class Type extends java.lang.Enum<org.spongepowered.api.data.DataTransactionResult.Type> {
                        /**
                         * The actual result of the operation is undefined, this probably
                         * indicates that something went wrong with the operation that the
                         * {@link DataManipulator} couldn't handle or didn't expect. The
                         * state of the {@link DataManipulator} is undefined.
                         */
                        // @ts-ignore
                        public static readonly UNDEFINED: org.spongepowered.api.data.DataTransactionResult.Type
                        /**
                         * The item data operation succeeded.
                         */
                        // @ts-ignore
                        public static readonly SUCCESS: org.spongepowered.api.data.DataTransactionResult.Type
                        /**
                         * The {@link DataManipulator} operation failed for an
                         * <em>expected</em> reason (such as the {@link DataManipulator} being
                         * incompatible with the {@link DataHolder}. The condition of the
                         * {@link DataManipulator} is unchanged.
                         */
                        // @ts-ignore
                        public static readonly FAILURE: org.spongepowered.api.data.DataTransactionResult.Type
                        /**
                         * The {@link DataManipulator} operation failed because an
                         * <em>unexpected</em> condition occurred. The state of the
                         * {@link DataManipulator} is undefined.
                         */
                        // @ts-ignore
                        public static readonly ERROR: org.spongepowered.api.data.DataTransactionResult.Type
                        /**
                         * An operation was cancelled by a third party (eg. a
                         * {@link DataManipulator} event was cancelled). The condition of the
                         * {@link DataManipulator} is unchanged.
                         */
                        // @ts-ignore
                        public static readonly CANCELLED: org.spongepowered.api.data.DataTransactionResult.Type
                        // @ts-ignore
                        public static values(): org.spongepowered.api.data.DataTransactionResult.Type[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.spongepowered.api.data.DataTransactionResult.Type
                    }
                }
            }
        }
    }
}
