declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    /**
                     * @author Dave Syer
                     * @author Gary Russell
                     */
                    // @ts-ignore
                    class BindingFactoryBean extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setArguments(arguments: java.util.Map<java.lang.String | string, java.lang.Object | any>): void
                        // @ts-ignore
                        public setRoutingKey(routingKey: java.lang.String | string): void
                        // @ts-ignore
                        public setExchange(exchange: java.lang.String | string): void
                        // @ts-ignore
                        public setDestinationQueue(destinationQueue: Queue): void
                        // @ts-ignore
                        public setDestinationExchange(destinationExchange: Exchange): void
                        // @ts-ignore
                        public setShouldDeclare(shouldDeclare: boolean): void
                        // @ts-ignore
                        public setIgnoreDeclarationExceptions(ignoreDeclarationExceptions: java.lang.Boolean): void
                        // @ts-ignore
                        public setAdminsThatShouldDeclare(...adminsThatShouldDeclare: AmqpAdmin[]): void
                        // @ts-ignore
                        public getObject(): Binding
                        // @ts-ignore
                        public getObjectType(): java.lang.Class<any>
                        // @ts-ignore
                        public isSingleton(): boolean
                    }
                }
            }
        }
    }
}
