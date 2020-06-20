declare namespace java {
    namespace net {
        /**
         * A simple interface which provides a mechanism to map
         * between a file name and a MIME type string.
         * @author Steven B. Byrne
         * @since JDK1.1
         */
        // @ts-ignore
        interface FileNameMap {
            /**
             * Gets the MIME type for the specified file name.
             * @param fileName the specified file name
             * @return a {#code String} indicating the MIME
             *  type for the specified file name.
             */
            // @ts-ignore
            getContentTypeFor(fileName: string): java.lang.String
        }
    }
}
