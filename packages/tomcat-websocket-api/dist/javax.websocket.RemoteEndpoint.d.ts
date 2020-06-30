declare namespace javax {
    namespace websocket {
        // @ts-ignore
        interface RemoteEndpoint {
            /**
             * Enable or disable the batching of outgoing messages for this endpoint. If
             * batching is disabled when it was previously enabled then this method will
             * block until any currently batched messages have been written.
             * @param batchingAllowed   New setting
             * @throws IOException      If changing the value resulted in a call to
             *                           {#link #flushBatch()} and that call threw an
             *                           {@link IOException}.
             */
            // @ts-ignore
            setBatchingAllowed(batchingAllowed: boolean): void
            /**
             * Obtains the current batching status of the endpoint.
             * @return <code>true</code> if batching is enabled, otherwise
             *          <code>false</code>.
             */
            // @ts-ignore
            getBatchingAllowed(): boolean
            /**
             * Flush any currently batched messages to the remote endpoint. This method
             * will block until the flush completes.
             * @throws IOException If an I/O error occurs while flushing
             */
            // @ts-ignore
            flushBatch(): void
            /**
             * Send a ping message blocking until the message has been sent. Note that
             * if a message is in the process of being sent asynchronously, this method
             * will block until that message and this ping has been sent.
             * @param applicationData   The payload for the ping message
             * @throws IOException If an I/O error occurs while sending the ping
             * @throws IllegalArgumentException if the applicationData is too large for
             *          a control message (max 125 bytes)
             */
            // @ts-ignore
            sendPing(applicationData: java.nio.ByteBuffer): void
            /**
             * Send a pong message blocking until the message has been sent. Note that
             * if a message is in the process of being sent asynchronously, this method
             * will block until that message and this pong has been sent.
             * @param applicationData   The payload for the pong message
             * @throws IOException If an I/O error occurs while sending the pong
             * @throws IllegalArgumentException if the applicationData is too large for
             *          a control message (max 125 bytes)
             */
            // @ts-ignore
            sendPong(applicationData: java.nio.ByteBuffer): void
        }
    }
}
