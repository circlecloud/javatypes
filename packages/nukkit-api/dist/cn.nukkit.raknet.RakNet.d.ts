declare namespace cn {
    namespace nukkit {
        namespace raknet {
            /**
             * author: MagicDroidX
             * Nukkit Project
             * UDP network library that follows the RakNet protocol for Nukkit Project
             * This is not affiliated with Jenkins Software LLC nor RakNet.
             */
            // @ts-ignore
            abstract class RakNet extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly VERSION: java.lang.String | string
                // @ts-ignore
                public static readonly PROTOCOL: number /*byte*/
                // @ts-ignore
                public static readonly MAGIC: number /*byte*/[]
                // @ts-ignore
                public static readonly PRIORITY_NORMAL: number /*byte*/
                // @ts-ignore
                public static readonly PRIORITY_IMMEDIATE: number /*byte*/
                // @ts-ignore
                public static readonly FLAG_NEED_ACK: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_ENCAPSULATED: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_OPEN_SESSION: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_CLOSE_SESSION: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_INVALID_SESSION: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_SEND_QUEUE: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_ACK_NOTIFICATION: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_SET_OPTION: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_RAW: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_BLOCK_ADDRESS: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_UNBLOCK_ADDRESS: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_SHUTDOWN: number /*byte*/
                // @ts-ignore
                public static readonly PACKET_EMERGENCY_SHUTDOWN: number /*byte*/
            }
        }
    }
}
