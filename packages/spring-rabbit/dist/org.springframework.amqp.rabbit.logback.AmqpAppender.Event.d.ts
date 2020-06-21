declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace logback {
                    namespace AmqpAppender {
                        /**
                         * Small helper class to encapsulate a LoggingEvent, its MDC properties, and the number of retries.
                         */
                        // @ts-ignore
                        class Event extends java.lang.Object {
                            // @ts-ignore
                            constructor(event: ILoggingEvent)
                            // @ts-ignore
                            public getEvent(): ILoggingEvent
                            // @ts-ignore
                            public getProperties(): java.util.Map<java.lang.String | string, java.lang.String | string>
                            // @ts-ignore
                            public incrementRetries(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
