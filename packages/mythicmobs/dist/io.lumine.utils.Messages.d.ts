declare namespace io {
    namespace lumine {
        namespace utils {
            // @ts-ignore
            class Messages extends java.lang.Object {
                // @ts-ignore
                public static getMessenger(): io.lumine.utils.network.messaging.Messenger
                // @ts-ignore
                public static getChannel<T>(packet: java.lang.Class<T>): io.lumine.utils.network.messaging.Channel<T>
                // @ts-ignore
                public static getChannel<T>(name: java.lang.String | string, clazz: java.lang.Class<T>): io.lumine.utils.network.messaging.Channel<T>
                // @ts-ignore
                public static getChannel<T>(name: java.lang.String | string, type: object): io.lumine.utils.network.messaging.Channel<T>
                // @ts-ignore
                public static subscribe<T>(clazz: java.lang.Class<T>, listener: io.lumine.utils.network.messaging.ChannelListener<T>): io.lumine.utils.network.messaging.ChannelAgent<T>
                // @ts-ignore
                public static subscribe<T>(name: java.lang.String | string, clazz: java.lang.Class<T>, listener: io.lumine.utils.network.messaging.ChannelListener<T>): io.lumine.utils.network.messaging.ChannelAgent<T>
                // @ts-ignore
                public static subscribe<T>(name: java.lang.String | string, type: object, listener: io.lumine.utils.network.messaging.ChannelListener<T>): io.lumine.utils.network.messaging.ChannelAgent<T>
            }
        }
    }
}
