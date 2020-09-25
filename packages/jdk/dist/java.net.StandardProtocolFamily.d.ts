declare namespace java {
    namespace net {
        /**
         * Defines the standard families of communication protocols.
         * @since 1.7
         */
        // @ts-ignore
        class StandardProtocolFamily extends java.lang.Enum<java.net.StandardProtocolFamily> implements java.net.ProtocolFamily {
            /**
             * Internet Protocol Version 4 (IPv4)
             */
            // @ts-ignore
            public static readonly INET: java.net.StandardProtocolFamily
            /**
             * Internet Protocol Version 6 (IPv6)
             */
            // @ts-ignore
            public static readonly INET6: java.net.StandardProtocolFamily
            // @ts-ignore
            public static values(): java.net.StandardProtocolFamily[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): java.net.StandardProtocolFamily
        }
    }
}
