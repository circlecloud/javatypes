declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace script {
                        /**
                         * Utilties for working with {@link MessageDigest}
                         * @author Jennifer Hickey
                         */
                        // @ts-ignore
                        abstract class DigestUtils extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Returns the SHA1 of the provided data
                             * @param data The data to calculate, such as the contents of a file
                             * @return The human-readable SHA1
                             */
                            // @ts-ignore
                            public static sha1DigestAsHex(data: java.lang.String | string): string
                        }
                    }
                }
            }
        }
    }
}
