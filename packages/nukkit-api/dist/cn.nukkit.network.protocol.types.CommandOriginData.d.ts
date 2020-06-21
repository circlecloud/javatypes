declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace types {
                    /**
                     * @author SupremeMortal
                     *  Nukkit project
                     */
                    // @ts-ignore
                    class CommandOriginData extends java.lang.Object {
                        // @ts-ignore
                        constructor(type: cn.nukkit.network.protocol.types.CommandOriginData.Origin, uuid: java.util.UUID, requestId: java.lang.String | string, varlong: java.lang.Long | number)
                        // @ts-ignore
                        public readonly type: cn.nukkit.network.protocol.types.CommandOriginData.Origin
                        // @ts-ignore
                        public readonly uuid: java.util.UUID
                        // @ts-ignore
                        public readonly requestId: java.lang.String | string
                        // @ts-ignore
                        public getVarLong(): java.util.OptionalLong
                    }
                }
            }
        }
    }
}
