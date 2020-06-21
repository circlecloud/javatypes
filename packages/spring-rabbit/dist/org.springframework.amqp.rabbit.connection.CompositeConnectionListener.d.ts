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
                    class CompositeConnectionListener extends java.lang.Object implements org.springframework.amqp.rabbit.connection.ConnectionListener {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public onCreate(connection: org.springframework.amqp.rabbit.connection.Connection): void
                        // @ts-ignore
                        public onClose(connection: org.springframework.amqp.rabbit.connection.Connection): void
                        // @ts-ignore
                        public onShutDown(signal: ShutdownSignalException): void
                        // @ts-ignore
                        public setDelegates(delegates: java.util.List<any> | Array<any>): void
                        // @ts-ignore
                        public addDelegate(delegate: org.springframework.amqp.rabbit.connection.ConnectionListener): void
                        // @ts-ignore
                        public removeDelegate(delegate: org.springframework.amqp.rabbit.connection.ConnectionListener): boolean
                        // @ts-ignore
                        public clearDelegates(): void
                    }
                }
            }
        }
    }
}
