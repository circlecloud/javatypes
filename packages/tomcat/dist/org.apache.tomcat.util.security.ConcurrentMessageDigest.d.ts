declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace security {
                    /**
                     * A thread safe wrapper around {@link MessageDigest} that does not make use
                     * of ThreadLocal and - broadly - only creates enough MessageDigest objects
                     * to satisfy the concurrency requirements.
                     */
                    // @ts-ignore
                    class ConcurrentMessageDigest extends java.lang.Object {
                        // @ts-ignore
                        public static digestMD5(...input: number /*byte*/[][]): number /*byte*/[]
                        // @ts-ignore
                        public static digestSHA1(...input: number /*byte*/[][]): number /*byte*/[]
                        // @ts-ignore
                        public static digest(algorithm: java.lang.String | string, ...input: number /*byte*/[][]): number /*byte*/[]
                        // @ts-ignore
                        public static digest(algorithm: java.lang.String | string, rounds: number /*int*/, ...input: number /*byte*/[][]): number /*byte*/[]
                        /**
                         * Ensures that {@link #digest(String, byte[][])} will support the specified
                         * algorithm. This method <b>must</b> be called and return successfully
                         * before using {@link #digest(String, byte[][])}.
                         * @param algorithm The message digest algorithm to be supported
                         * @throws NoSuchAlgorithmException If the algorithm is not supported by the
                         *                                   JVM
                         */
                        // @ts-ignore
                        public static init(algorithm: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
