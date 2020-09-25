declare namespace java {
    namespace net {
        namespace Proxy {
            /**
             * Represents the proxy type.
             * @since 1.5
             */
            // @ts-ignore
            class Type extends java.lang.Enum<java.net.Proxy.Type> {
                /**
                 * Represents a direct connection, or the absence of a proxy.
                 */
                // @ts-ignore
                public static readonly DIRECT: java.net.Proxy.Type
                /**
                 * Represents proxy for high level protocols such as HTTP or FTP.
                 */
                // @ts-ignore
                public static readonly HTTP: java.net.Proxy.Type
                /**
                 * Represents a SOCKS (V4 or V5) proxy.
                 */
                // @ts-ignore
                public static readonly SOCKS: java.net.Proxy.Type
                // @ts-ignore
                public static values(): java.net.Proxy.Type[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): java.net.Proxy.Type
            }
        }
    }
}
