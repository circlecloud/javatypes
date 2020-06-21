declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * The interface used by a {@link HttpUpgradeHandler} to interact with an upgraded
             * HTTP connection.
             * @since Servlet 3.1
             */
            // @ts-ignore
            interface WebConnection extends java.lang.AutoCloseable {
                /**
                 * Provides access to the {@link ServletInputStream} for reading data from
                 * the client.
                 * @return the input stream
                 * @throws IOException If an I/O occurs while obtaining the stream
                 */
                // @ts-ignore
                getInputStream(): javax.servlet.ServletInputStream
                /**
                 * Provides access to the {@link ServletOutputStream} for writing data to
                 * the client.
                 * @return the output stream
                 * @throws IOException If an I/O occurs while obtaining the stream
                 */
                // @ts-ignore
                getOutputStream(): javax.servlet.ServletOutputStream
            }
        }
    }
}
