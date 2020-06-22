declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace util {
                    /**
                     * {@link MongoDbErrorCodes} holds MongoDB specific error codes outlined in {@literal mongo/base/error_codes.err}.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 1.8
                     */
                    // @ts-ignore
                    class MongoDbErrorCodes extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static isDataIntegrityViolationCode(errorCode: java.lang.Integer | number): boolean
                        // @ts-ignore
                        public static isDataAccessResourceFailureCode(errorCode: java.lang.Integer | number): boolean
                        // @ts-ignore
                        public static isDuplicateKeyCode(errorCode: java.lang.Integer | number): boolean
                        // @ts-ignore
                        public static isPermissionDeniedCode(errorCode: java.lang.Integer | number): boolean
                        // @ts-ignore
                        public static isInvalidDataAccessApiUsageCode(errorCode: java.lang.Integer | number): boolean
                        // @ts-ignore
                        public static getErrorDescription(errorCode: java.lang.Integer | number): string
                        /**
                         * Check if the given error code matches a know session related error.
                         * @param errorCode the error code to check.
                         * @return {#literal true} if error matches.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static isClientSessionFailureCode(errorCode: java.lang.Integer | number): boolean
                        /**
                         * Check if the given error code matches a know transaction related error.
                         * @param errorCode the error code to check.
                         * @return {#literal true} if error matches.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public static isTransactionFailureCode(errorCode: java.lang.Integer | number): boolean
                    }
                }
            }
        }
    }
}
