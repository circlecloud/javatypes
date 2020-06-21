declare namespace org {
    namespace apache {
        namespace coyote {
            /**
             * Provides a mechanism for the Coyote connectors to communicate with the
             * {@link javax.servlet.AsyncContext}. It is implemented in this manner so that
             * the org.apache.coyote package does not have a dependency on the
             * org.apache.catalina package.
             */
            // @ts-ignore
            interface AsyncContextCallback {
                // @ts-ignore
                fireOnComplete(): void
                /**
                 * Reports if the web application associated with this async request is
                 * available.
                 * @return {#code true} if the associated web application is available,
                 *          otherwise {@code false}
                 */
                // @ts-ignore
                isAvailable(): boolean
            }
        }
    }
}
