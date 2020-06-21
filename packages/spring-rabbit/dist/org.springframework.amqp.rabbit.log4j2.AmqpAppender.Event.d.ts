declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace log4j2 {
                    namespace AmqpAppender {
                        /**
                         * Helper class to encapsulate a LoggingEvent, its MDC properties, and the number of retries.
                         */
                        // @ts-ignore
                        class Event extends java.lang.Object {
                            // @ts-ignore
                            constructor(event: LogEvent, properties: java.util.Map<any, any>)
                            // @ts-ignore
                            public getEvent(): LogEvent
                            // @ts-ignore
                            public getProperties(): java.util.Map<any, any>
                            // @ts-ignore
                            public incrementRetries(): number /*int*/
                        }
                    }
                }
            }
        }
    }
}
