declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace config {
                    namespace ListenerContainerFactoryBean {
                        /**
                         * The container type.
                         */
                        // @ts-ignore
                        class Type extends java.lang.Enum<org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type> {
                            /**
                             * {@link SimpleMessageListenerContainer}.
                             */
                            // @ts-ignore
                            public static readonly simple: org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type
                            /**
                             * {@link DirectMessageListenerContainer}.
                             */
                            // @ts-ignore
                            public static readonly direct: org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type
                            // @ts-ignore
                            public static values(): org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type[]
                            // @ts-ignore
                            public static valueOf(name: java.lang.String | string): org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type
                        }
                    }
                }
            }
        }
    }
}
