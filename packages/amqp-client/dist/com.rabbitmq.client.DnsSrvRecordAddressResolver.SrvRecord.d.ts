declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace DnsSrvRecordAddressResolver {
                // @ts-ignore
                class SrvRecord extends java.lang.Object implements java.lang.Comparable<com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord> {
                    // @ts-ignore
                    constructor(priority: number /*int*/, weight: number /*int*/, port: number /*int*/, host: java.lang.String | string)
                    // @ts-ignore
                    public getPriority(): number /*int*/
                    // @ts-ignore
                    public getWeight(): number /*int*/
                    // @ts-ignore
                    public getPort(): number /*int*/
                    // @ts-ignore
                    public getHost(): string
                    // @ts-ignore
                    public static fromSrvQueryResult(srvResult: java.lang.String | string): com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord
                    // @ts-ignore
                    public compareTo(o: com.rabbitmq.client.DnsSrvRecordAddressResolver.SrvRecord): number /*int*/
                }
            }
        }
    }
}
