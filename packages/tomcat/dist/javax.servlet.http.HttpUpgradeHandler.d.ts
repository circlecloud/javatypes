declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Interface between the HTTP upgrade process and the new protocol.
             * @since Servlet 3.1
             */
            // @ts-ignore
            interface HttpUpgradeHandler {
                /**
                 * This method is called once the request/response pair where
                 * {@link HttpServletRequest#upgrade(Class)} is called has completed
                 * processing and is the point where control of the connection passes from
                 * the container to the {@link HttpUpgradeHandler}.
                 * @param connection    The connection that has been upgraded
                 * @since Servlet 3.1
                 */
                // @ts-ignore
                init(connection: javax.servlet.http.WebConnection): void
                /**
                 * This method is called after the upgraded connection has been closed.
                 */
                // @ts-ignore
                destroy(): void
            }
        }
    }
}
