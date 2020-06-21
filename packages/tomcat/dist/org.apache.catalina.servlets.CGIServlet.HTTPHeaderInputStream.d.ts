declare namespace org {
    namespace apache {
        namespace catalina {
            namespace servlets {
                namespace CGIServlet {
                    /**
                     * This is an input stream specifically for reading HTTP headers. It reads
                     * upto and including the two blank lines terminating the headers. It
                     * allows the content to be read using bytes or characters as appropriate.
                     */
                    // @ts-ignore
                    class HTTPHeaderInputStream extends java.io.InputStream {
                        /**
                         * @see java.io.InputStream#read()
                         */
                        // @ts-ignore
                        public read(): number /*int*/
                    }
                }
            }
        }
    }
}
