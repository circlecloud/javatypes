declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace protocol {
                namespace PlayerListPacket {
                    // @ts-ignore
                    class Entry extends java.lang.Object {
                        // @ts-ignore
                        constructor(uuid: java.util.UUID)
                        // @ts-ignore
                        constructor(uuid: java.util.UUID, entityId: number /*long*/, name: java.lang.String | string, skin: cn.nukkit.entity.data.Skin)
                        // @ts-ignore
                        constructor(uuid: java.util.UUID, entityId: number /*long*/, name: java.lang.String | string, skin: cn.nukkit.entity.data.Skin, xboxUserId: java.lang.String | string)
                        // @ts-ignore
                        public readonly uuid: java.util.UUID
                        // @ts-ignore
                        public entityId: number /*long*/
                        // @ts-ignore
                        public name: java.lang.String | string
                        // @ts-ignore
                        public xboxUserId: java.lang.String | string
                        // @ts-ignore
                        public platformChatId: java.lang.String | string
                        // @ts-ignore
                        public buildPlatform: number /*int*/
                        // @ts-ignore
                        public skin: cn.nukkit.entity.data.Skin
                        // @ts-ignore
                        public isTeacher: boolean
                        // @ts-ignore
                        public isHost: boolean
                    }
                }
            }
        }
    }
}
