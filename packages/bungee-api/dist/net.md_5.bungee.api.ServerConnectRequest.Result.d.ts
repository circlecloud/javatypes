declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                namespace ServerConnectRequest {
                    /**
                     * The result from this callback after request has been executed by proxy.
                     */
                    // @ts-ignore
                    class Result extends java.lang.Enum<net.md_5.bungee.api.ServerConnectRequest.Result> {
                        /**
                         * ServerConnectEvent to the new server was canceled.
                         */
                        // @ts-ignore
                        public static readonly EVENT_CANCEL: net.md_5.bungee.api.ServerConnectRequest.Result
                        /**
                         * Already connected to target server.
                         */
                        // @ts-ignore
                        public static readonly ALREADY_CONNECTED: net.md_5.bungee.api.ServerConnectRequest.Result
                        /**
                         * Already connecting to target server.
                         */
                        // @ts-ignore
                        public static readonly ALREADY_CONNECTING: net.md_5.bungee.api.ServerConnectRequest.Result
                        /**
                         * Successfully connected to server.
                         */
                        // @ts-ignore
                        public static readonly SUCCESS: net.md_5.bungee.api.ServerConnectRequest.Result
                        /**
                         * Connection failed, error can be accessed from callback method handle.
                         */
                        // @ts-ignore
                        public static readonly FAIL: net.md_5.bungee.api.ServerConnectRequest.Result
                        // @ts-ignore
                        public static values(): net.md_5.bungee.api.ServerConnectRequest.Result[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): net.md_5.bungee.api.ServerConnectRequest.Result
                    }
                }
            }
        }
    }
}
