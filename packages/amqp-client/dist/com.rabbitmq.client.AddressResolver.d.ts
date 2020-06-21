declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Strategy interface to get the potential servers to connect to.
             */
            // @ts-ignore
            interface AddressResolver {
                /**
                 * Get the potential {@link Address}es to connect to.
                 * @return candidate {#link Address}es
                 * @throws IOException if it encounters a problem
                 */
                // @ts-ignore
                getAddresses(): Array<com.rabbitmq.client.Address>
            }
        }
    }
}
