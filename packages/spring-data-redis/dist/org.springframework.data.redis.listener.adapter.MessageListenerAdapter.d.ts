declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace listener {
                    namespace adapter {
                        /**
                         * Message listener adapter that delegates the handling of messages to target listener methods via reflection, with
                         * flexible message type conversion. Allows listener methods to operate on message content types, completely independent
                         * from the Redis API.
                         * <p/>
                         * Make sure to call {@link #afterPropertiesSet()} after setting all the parameters on the adapter.
                         * <p/>
                         * Note that if the underlying "delegate" is implementing {@link MessageListener}, the adapter will delegate to it and
                         * allow an invalid method to be specified. However if it is not, the method becomes mandatory. This lenient behavior
                         * allows the adapter to be used uniformly across existing listeners and message POJOs.
                         * <p/>
                         * Modeled as much as possible after the JMS MessageListenerAdapter in Spring Framework.
                         * <p>
                         * By default, the content of incoming Redis messages gets extracted before being passed into the target listener
                         * method, to let the target method operate on message content types such as String or byte array instead of the raw
                         * {@link Message}. Message type conversion is delegated to a Spring Data {@link RedisSerializer}. By default, the
                         * {@link JdkSerializationRedisSerializer} will be used. (If you do not want such automatic message conversion taking
                         * place, then be sure to set the {@link #setSerializer Serializer} to <code>null</code>.)
                         * <p>
                         * Find below some examples of method signatures compliant with this adapter class. This first example handles all
                         * <code>Message</code> types and gets passed the contents of each <code>Message</code> type as an argument.
                         * <pre class="code">
                         * public interface MessageContentsDelegate {
                         * void handleMessage(String text);
                         * void handleMessage(byte[] bytes);
                         * void handleMessage(Person obj);
                         * }
                         * </pre>
                         * <p>
                         * In addition, the channel or pattern to which a message is sent can be passed in to the method as a second argument of
                         * type String:
                         * <pre class="code">
                         * public interface MessageContentsDelegate {
                         * void handleMessage(String text, String channel);
                         * void handleMessage(byte[] bytes, String pattern);
                         * }
                         * </pre>
                         * For further examples and discussion please do refer to the Spring Data reference documentation which describes this
                         * class (and its attendant configuration) in detail. <b>Important:</b> Due to the nature of messages, the default
                         * serializer used by the adapter is {@link StringRedisSerializer}. If the messages are of a different type, change them
                         * accordingly through {@link #setSerializer(RedisSerializer)}.
                         * @author Juergen Hoeller
                         * @author Costin Leau
                         * @author Greg Turnquist
                         * @author Thomas Darimont
                         * @author Christoph Strobl
                         * @author Mark Paluch
                         * @see org.springframework.jms.listener.adapter.MessageListenerAdapter
                         */
                        // @ts-ignore
                        class MessageListenerAdapter extends java.lang.Object implements org.springframework.data.redis.connection.MessageListener {
                            /**
                             * Create a new {@link MessageListenerAdapter} with default settings.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Create a new {@link MessageListenerAdapter} for the given delegate.
                             * @param delegate the delegate object
                             */
                            // @ts-ignore
                            constructor(delegate: java.lang.Object | any)
                            /**
                             * Create a new {@link MessageListenerAdapter} for the given delegate.
                             * @param delegate the delegate object
                             * @param defaultListenerMethod method to call when a message comes
                             * @see #getListenerMethodName
                             */
                            // @ts-ignore
                            constructor(delegate: java.lang.Object | any, defaultListenerMethod: java.lang.String | string)
                            /**
                             * Out-of-the-box value for the default listener method: "handleMessage".
                             */
                            // @ts-ignore
                            public static readonly ORIGINAL_DEFAULT_LISTENER_METHOD: java.lang.String | string
                            /**
                             * Logger available to subclasses
                             */
                            // @ts-ignore
                            readonly logger: Log
                            /**
                             * Set a target object to delegate message listening to. Specified listener methods have to be present on this target
                             * object.
                             * <p>
                             * If no explicit delegate object has been specified, listener methods are expected to present on this adapter
                             * instance, that is, on a custom subclass of this adapter, defining listener methods.
                             * @param delegate delegate object
                             */
                            // @ts-ignore
                            public setDelegate(delegate: java.lang.Object | any): void
                            /**
                             * Returns the target object to delegate message listening to.
                             * @return message listening delegation
                             */
                            // @ts-ignore
                            public getDelegate(): any
                            /**
                             * Specify the name of the default listener method to delegate to, for the case where no specific listener method has
                             * been determined. Out-of-the-box value is {@link #ORIGINAL_DEFAULT_LISTENER_METHOD "handleMessage"}.
                             * @see #getListenerMethodName
                             */
                            // @ts-ignore
                            public setDefaultListenerMethod(defaultListenerMethod: java.lang.String | string): void
                            /**
                             * Return the name of the default listener method to delegate to.
                             */
                            // @ts-ignore
                            getDefaultListenerMethod(): string
                            /**
                             * Set the serializer that will convert incoming raw Redis messages to listener method arguments.
                             * <p>
                             * The default converter is a {@link StringRedisSerializer}.
                             * @param serializer
                             */
                            // @ts-ignore
                            public setSerializer(serializer: org.springframework.data.redis.serializer.RedisSerializer<any>): void
                            /**
                             * Sets the serializer used for converting the channel/pattern to a String.
                             * <p>
                             * The default converter is a {@link StringRedisSerializer}.
                             * @param serializer
                             */
                            // @ts-ignore
                            public setStringSerializer(serializer: org.springframework.data.redis.serializer.RedisSerializer<java.lang.String | string>): void
                            // @ts-ignore
                            public afterPropertiesSet(): void
                            /**
                             * Standard Redis {@link MessageListener} entry point.
                             * <p>
                             * Delegates the message to the target listener method, with appropriate conversion of the message argument. In case
                             * of an exception, the {@link #handleListenerException(Throwable)} method will be invoked.
                             * @param message the incoming Redis message
                             * @see #handleListenerException
                             */
                            // @ts-ignore
                            public onMessage(message: org.springframework.data.redis.connection.Message, pattern: number /*byte*/[]): void
                            /**
                             * Initialize the default implementations for the adapter's strategies.
                             * @see #setSerializer(RedisSerializer)
                             * @see JdkSerializationRedisSerializer
                             */
                            // @ts-ignore
                            initDefaultStrategies(): void
                            /**
                             * Handle the given exception that arose during listener execution. The default implementation logs the exception at
                             * error level.
                             * @param ex the exception to handle
                             */
                            // @ts-ignore
                            handleListenerException(ex: java.lang.Throwable | Error): void
                            /**
                             * Extract the message body from the given Redis message.
                             * @param message the Redis <code>Message</code>
                             * @return the content of the message, to be passed into the listener method as argument
                             */
                            // @ts-ignore
                            extractMessage(message: org.springframework.data.redis.connection.Message): any
                            /**
                             * Determine the name of the listener method that is supposed to handle the given message.
                             * <p>
                             * The default implementation simply returns the configured default listener method, if any.
                             * @param originalMessage the Redis request message
                             * @param extractedMessage the converted Redis request message, to be passed into the listener method as argument
                             * @return the name of the listener method (never <code>null</code>)
                             * @see #setDefaultListenerMethod
                             */
                            // @ts-ignore
                            getListenerMethodName(originalMessage: org.springframework.data.redis.connection.Message, extractedMessage: java.lang.Object | any): string
                            /**
                             * Invoke the specified listener method.
                             * @param methodName the name of the listener method
                             * @param arguments the message arguments to be passed in
                             * @see #getListenerMethodName
                             */
                            // @ts-ignore
                            invokeListenerMethod(methodName: java.lang.String | string, arguments: java.lang.Object[] | any[]): void
                        }
                    }
                }
            }
        }
    }
}
