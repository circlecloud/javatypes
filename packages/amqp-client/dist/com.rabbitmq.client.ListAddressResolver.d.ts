declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Simple implementation of {@link AddressResolver} that returns a fixed list.
             */
            // @ts-ignore
            class ListAddressResolver extends java.lang.Object implements com.rabbitmq.client.AddressResolver {
                // @ts-ignore
                constructor(addresses: java.util.List<com.rabbitmq.client.Address> | Array<com.rabbitmq.client.Address>)
                // @ts-ignore
                public getAddresses(): Array<com.rabbitmq.client.Address>
            }
        }
    }
}
