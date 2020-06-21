declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * {@link AddressResolver} that resolves DNS record IPs.
             * Uses {@link InetAddress} internally.
             * The first returned address is used when automatic recovery is NOT enabled
             * at the {@link ConnectionFactory} level.
             * When automatic recovery is enabled, a random address will be picked up
             * from the returned list of {@link Address}es.
             */
            // @ts-ignore
            class DnsRecordIpAddressResolver extends java.lang.Object implements com.rabbitmq.client.AddressResolver {
                // @ts-ignore
                constructor(hostname: java.lang.String | string, port: number /*int*/, ssl: boolean)
                // @ts-ignore
                constructor(hostname: java.lang.String | string, port: number /*int*/)
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(hostname: java.lang.String | string)
                // @ts-ignore
                constructor(address: com.rabbitmq.client.Address)
                // @ts-ignore
                constructor(address: com.rabbitmq.client.Address, ssl: boolean)
                /**
                 * Get the IP addresses from a DNS query
                 * @return candidate {#link Address}es
                 * @throws IOException if DNS resolution fails
                 */
                // @ts-ignore
                public getAddresses(): Array<com.rabbitmq.client.Address>
                // @ts-ignore
                resolveIpAddresses(hostName: java.lang.String | string): java.net.InetAddress[]
            }
        }
    }
}
