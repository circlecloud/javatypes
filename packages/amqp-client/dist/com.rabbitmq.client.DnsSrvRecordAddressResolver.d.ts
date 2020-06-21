declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * {@link AddressResolver} that resolves addresses against a DNS SRV request.
             * SRV records contain the hostname and the port for a given service.
             * They also support priorities, to give precedence to a given host
             * over other hosts.
             * Note the hosts returned by the SRV query must be resolvable by
             * the DNS servers of the underlying platform (or the default ones
             * specified for this Java process). This class does not issue a
             * query for A records after the SRV query.
             * This implementation returns the highest-priority records first.
             * This behavior can be changed by overriding the {@code sort} method.
             * This implementation uses internally the {@code com.sun.jndi.dns.DnsContextFactory}
             * class for the DNS query.
             * The first returned address is used when automatic recovery is NOT enabled
             * at the {@link ConnectionFactory} level.
             * When automatic recovery is enabled, a random address will be picked up
             * from the returned list of {@link Address}es.
             */
            // @ts-ignore
            class DnsSrvRecordAddressResolver extends java.lang.Object implements com.rabbitmq.client.AddressResolver {
                // @ts-ignore
                constructor(service: java.lang.String | string)
                // @ts-ignore
                constructor(service: java.lang.String | string, dnsUrls: java.lang.String | string)
                // @ts-ignore
                public getAddresses(): Array<com.rabbitmq.client.Address>
                // @ts-ignore
                lookupSrvRecords(service: java.lang.String | string, dnsUrls: java.lang.String | string): Array<com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord>
                // @ts-ignore
                mapSrvRecord(srvResult: java.lang.String | string): com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord
                // @ts-ignore
                sort(records: java.util.List<com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord> | Array<com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord>): Array<com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord>
            }
        }
    }
}
