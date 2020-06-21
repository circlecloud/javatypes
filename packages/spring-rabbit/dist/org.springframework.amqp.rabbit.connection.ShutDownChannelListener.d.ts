declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * Functional sub interface enabling a lambda for the onShutDown method.
                     * @author Gary Russell
                     * @since 2.0
                     */
                    // @ts-ignore
                    interface ShutDownChannelListener extends org.springframework.amqp.rabbit.connection.ChannelListener {
                        // @ts-ignore
                        onCreate(channel: Channel, transactional: boolean): void
                        // @ts-ignore
                        onShutDown(signal: ShutdownSignalException): void
                    }
                }
            }
        }
    }
}
