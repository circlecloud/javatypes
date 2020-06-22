declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace core {
                    namespace convert {
                        namespace KeyspaceConfiguration {
                            /**
                             * @author Christoph Strobl
                             * @since 1.7
                             */
                            // @ts-ignore
                            class KeyspaceSettings extends java.lang.Object {
                                // @ts-ignore
                                constructor(type: java.lang.Class<any>, keyspace: java.lang.String | string)
                                // @ts-ignore
                                constructor(type: java.lang.Class<any>, keyspace: java.lang.String | string, inherit: boolean)
                                // @ts-ignore
                                public getKeyspace(): string
                                // @ts-ignore
                                public getType(): java.lang.Class<any>
                                // @ts-ignore
                                public setTimeToLive(timeToLive: java.lang.Long | number): void
                                // @ts-ignore
                                public getTimeToLive(): number
                                // @ts-ignore
                                public setTimeToLivePropertyName(propertyName: java.lang.String | string): void
                                // @ts-ignore
                                public getTimeToLivePropertyName(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
