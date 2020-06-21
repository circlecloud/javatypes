declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace connection {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    class CompositeChannelListener extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ChannelListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public onCreate(channel: Channel, transactional: boolean): void
                        // @ts-ignore
                        public onShutDown(signal: ShutdownSignalException): void
                        // @ts-ignore
                        public setDelegates(delegates: java.util.List<any> | Array<any>): void
                        // @ts-ignore
                        public addDelegate(delegate: org.springframework.amqp.rabbit.connection.ChannelListener): void
                    }
                }
            }
        }
    }
}
