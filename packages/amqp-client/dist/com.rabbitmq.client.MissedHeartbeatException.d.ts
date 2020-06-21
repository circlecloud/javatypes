declare namespace com {
    namespace rabbitmq {
        namespace client {
            /**
             * Encapsulates an exception indicating that the connection has missed too many heartbeats
             * and is being shut down.
             */
            // @ts-ignore
            class MissedHeartbeatException extends java.net.SocketTimeoutException {
                // @ts-ignore
                constructor(reason: java.lang.String | string)
            }
        }
    }
}
