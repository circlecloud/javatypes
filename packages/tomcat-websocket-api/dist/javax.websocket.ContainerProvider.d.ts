declare namespace javax {
    namespace websocket {
        /**
         * Use the {@link ServiceLoader} mechanism to provide instances of the WebSocket
         * client container.
         */
        // @ts-ignore
        abstract class ContainerProvider extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Create a new container used to create outgoing WebSocket connections.
             * @return A newly created container.
             */
            // @ts-ignore
            public static getWebSocketContainer(): javax.websocket.WebSocketContainer
            // @ts-ignore
            abstract getContainer(): javax.websocket.WebSocketContainer
        }
    }
}
