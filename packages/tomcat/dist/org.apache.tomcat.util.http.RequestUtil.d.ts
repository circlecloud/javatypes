declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace http {
                    // @ts-ignore
                    class RequestUtil extends java.lang.Object {
                        /**
                         * Normalize a relative URI path that may have relative values ("/./",
                         * "/../", and so on ) it it.  <strong>WARNING</strong> - This method is
                         * useful only for normalizing application-generated paths.  It does not
                         * try to perform security checks for malicious input.
                         * @param path Relative path to be normalized
                         * @return The normalized path or <code>null</code> if the path cannot be
                         *          normalized
                         */
                        // @ts-ignore
                        public static normalize(path: java.lang.String | string): string
                        /**
                         * Normalize a relative URI path that may have relative values ("/./",
                         * "/../", and so on ) it it.  <strong>WARNING</strong> - This method is
                         * useful only for normalizing application-generated paths.  It does not
                         * try to perform security checks for malicious input.
                         * @param path Relative path to be normalized
                         * @param replaceBackSlash Should '\\' be replaced with '/'
                         * @return The normalized path or <code>null</code> if the path cannot be
                         *          normalized
                         */
                        // @ts-ignore
                        public static normalize(path: java.lang.String | string, replaceBackSlash: boolean): string
                    }
                }
            }
        }
    }
}
