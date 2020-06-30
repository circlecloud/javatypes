declare namespace javax {
    namespace websocket {
        /**
         * Represents a WebSocket Pong message and used by message handlers to enable
         * applications to process the response to any Pings they send.
         */
        // @ts-ignore
        interface PongMessage {
            /**
             * Get the payload of the Pong message.
             * @return The payload of the Pong message.
             */
            // @ts-ignore
            getApplicationData(): java.nio.ByteBuffer
        }
    }
}
