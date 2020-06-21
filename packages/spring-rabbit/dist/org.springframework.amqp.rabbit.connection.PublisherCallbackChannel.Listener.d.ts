declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    namespace PublisherCallbackChannel {
                        /**
                         * Listeners implementing this interface can participate
                         * in publisher confirms received from multiple channels,
                         * by invoking addListener on each channel. Standard
                         * AMQP channels do not support a listener being
                         * registered on multiple channels.
                         */
                        // @ts-ignore
                        interface Listener {
                            /**
                             * Invoked by the channel when a confirm is received.
                             * @param pendingConfirm The pending confirmation, containing
                             *  correlation data.
                             * @param ack true when 'ack', false when 'nack'.
                             */
                            // @ts-ignore
                            handleConfirm(pendingConfirm: org.springframework.amqp.rabbit.connection.PendingConfirm, ack: boolean): void
                            // @ts-ignore
                            handleReturn(replyCode: number /*int*/, replyText: java.lang.String | string, exchange: java.lang.String | string, routingKey: java.lang.String | string, properties: AMQP.BasicProperties, body: number /*byte*/[]): void
                            /**
                             * When called, this listener should remove all references to the
                             * channel - it will no longer be invoked by the channel.
                             * @param channel The channel.
                             */
                            // @ts-ignore
                            revoke(channel: Channel): void
                            /**
                             * Returns the UUID used to identify this Listener for returns.
                             * @return A string representation of the UUID.
                             */
                            // @ts-ignore
                            getUUID(): string
                            // @ts-ignore
                            isConfirmListener(): boolean
                            // @ts-ignore
                            isReturnListener(): boolean
                        }
                    }
                }
            }
        }
    }
}
