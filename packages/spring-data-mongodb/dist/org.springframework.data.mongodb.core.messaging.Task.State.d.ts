declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace messaging {
                        namespace Task {
                            /**
                             * The {@link Task.State} defining the lifecycle phase the actual {@link Task}.
                             * @author Christoph Strobl
                             * @since 2.1
                             */
                            // @ts-ignore
                            class State extends java.lang.Enum<org.springframework.data.mongodb.core.messaging.Task.State> {
                                // @ts-ignore
                                readonly CREATED: org.springframework.data.mongodb.core.messaging.Task.State
                                // @ts-ignore
                                readonly STARTING: org.springframework.data.mongodb.core.messaging.Task.State
                                // @ts-ignore
                                readonly RUNNING: org.springframework.data.mongodb.core.messaging.Task.State
                                // @ts-ignore
                                readonly CANCELLED: org.springframework.data.mongodb.core.messaging.Task.State
                                // @ts-ignore
                                values(): org.springframework.data.mongodb.core.messaging.Task.State[]
                                // @ts-ignore
                                valueOf(name: java.lang.String | string): org.springframework.data.mongodb.core.messaging.Task.State
                            }
                        }
                    }
                }
            }
        }
    }
}
