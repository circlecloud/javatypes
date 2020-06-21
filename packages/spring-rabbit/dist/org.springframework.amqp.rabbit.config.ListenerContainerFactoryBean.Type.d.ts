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
                            readonly simple: org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type
                            /**
                             * {@link DirectMessageListenerContainer}.
                             */
                            // @ts-ignore
                            readonly direct: org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type
                            // @ts-ignore
                            values(): org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type[]
                            // @ts-ignore
                            valueOf(name: java.lang.String | string): org.springframework.amqp.rabbit.config.ListenerContainerFactoryBean.Type
                        }
                    }
                }
            }
        }
    }
}
