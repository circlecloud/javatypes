declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace rabbit {
                namespace listener {
                    namespace adapter {
                        /**
                         * Message listener adapter that delegates the handling of messages to target listener methods via reflection, with
                         * flexible message type conversion. Allows listener methods to operate on message content types, completely independent
                         * from the Rabbit API.
                         * <p>
                         * By default, the content of incoming Rabbit messages gets extracted before being passed into the target listener
                         * method, to let the target method operate on message content types such as String or byte array instead of the raw
                         * {@link Message}. Message type conversion is delegated to a Spring AMQ {@link MessageConverter}. By default, a
                         * {@link org.springframework.amqp.support.converter.SimpleMessageConverter} will be used.
                         * (If you do not want such automatic message conversion taking place, then
                         * be sure to set the {@link #setMessageConverter MessageConverter} to <code>null</code>.)
                         * <p>
                         * If a target listener method returns a non-null object (typically of a message content type such as
                         * <code>String</code> or byte array), it will get wrapped in a Rabbit <code>Message</code> and sent to the exchange of
                         * the incoming message with the routingKey that comes from the Rabbit ReplyTo property or via
                         * {@link #setResponseRoutingKey(String) specified routingKey}).
                         * <p>
                         * <b>Note:</b> The sending of response messages is only available when using the {@link ChannelAwareMessageListener}
                         * entry point (typically through a Spring message listener container). Usage as {@link MessageListener} does <i>not</i>
                         * support the generation of response messages.
                         * <p>
                         * Find below some examples of method signatures compliant with this adapter class. This first example handles all
                         * <code>Message</code> types and gets passed the contents of each <code>Message</code> type as an argument. No
                         * <code>Message</code> will be sent back as all of these methods return <code>void</code>.
                         * <pre class="code">
                         * public interface MessageContentsDelegate {
                         * void handleMessage(String text);
                         * void handleMessage(Map map);
                         * void handleMessage(byte[] bytes);
                         * void handleMessage(Serializable obj);
                         * }
                         * </pre>
                         * This next example handle a <code>Message</code> type and gets passed the actual (raw) <code>Message</code> as an
                         * argument. Again, no <code>Message</code> will be sent back as all of these methods return <code>void</code>.
                         * <pre class="code">
                         * public interface RawMessageDelegate {
                         * void handleMessage(Message message);
                         * }
                         * </pre>
                         * This next example illustrates a <code>Message</code> delegate that just consumes the <code>String</code> contents of
                         * {@link Message Messages}. Notice also how the name of the <code>Message</code> handling method is different from the
                         * {@link #ORIGINAL_DEFAULT_LISTENER_METHOD original} (this will have to be configured in the attandant bean
                         * definition). Again, no <code>Message</code> will be sent back as the method returns <code>void</code>.
                         * <pre class="code">
                         * public interface TextMessageContentDelegate {
                         * void onMessage(String text);
                         * }
                         * </pre>
                         * This final example illustrates a <code>Message</code> delegate that just consumes the <code>String</code> contents of
                         * {@link Message Messages}. Notice how the return type of this method is <code>String</code>: This will result in the
                         * configured {@link MessageListenerAdapter} sending a {@link Message} in response.
                         * <pre class="code">
                         * public interface ResponsiveTextMessageContentDelegate {
                         * String handleMessage(String text);
                         * }
                         * </pre>
                         * For further examples and discussion please do refer to the Spring reference documentation which describes this class
                         * (and its attendant XML configuration) in detail.
                         * @author Juergen Hoeller
                         * @author Mark Pollack
                         * @author Mark Fisher
                         * @author Dave Syer
                         * @author Gary Russell
                         * @author Greg Turnquist
                         * @see #setDelegate
                         * @see #setDefaultListenerMethod
                         * @see #setResponseRoutingKey(String)
                         * @see #setMessageConverter
                         * @see org.springframework.amqp.support.converter.SimpleMessageConverter
                         * @see org.springframework.amqp.rabbit.listener.api.ChannelAwareMessageListener
                         * @see org.springframework.amqp.rabbit.listener.AbstractMessageListenerContainer#setMessageListener(MessageListener)
                         */
                        // @ts-ignore
                        class MessageListenerAdapter extends org.springframework.amqp.rabbit.listener.adapter.AbstractAdaptableMessageListener {
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
                             * @param messageConverter the message converter to use
                             */
                            // @ts-ignore
                            constructor(delegate: java.lang.Object | any, messageConverter: MessageConverter)
                            /**
                             * Out-of-the-box value for the default listener method: "handleMessage".
                             */
                            // @ts-ignore
                            public static readonly ORIGINAL_DEFAULT_LISTENER_METHOD: java.lang.String | string
                            /**
                             * Set a target object to delegate message listening to. Specified listener methods have to be present on this
                             * target object.
                             * <p> If no explicit delegate object has been specified, listener methods are expected to present on this adapter
                             * instance, that is, on a custom subclass of this adapter, defining listener methods.
                             * @param delegate The delegate listener or POJO.
                             */
                            // @ts-ignore
                            public setDelegate(delegate: java.lang.Object | any): void
                            /**
                             * @return The target object to delegate message listening to.
                             */
                            // @ts-ignore
                            getDelegate(): any
                            /**
                             * Specify the name of the default listener method to delegate to, for the case where no specific listener method
                             * has been determined. Out-of-the-box value is {@link #ORIGINAL_DEFAULT_LISTENER_METHOD "handleMessage"}.
                             * @param defaultListenerMethod The name of the default listener method.
                             * @see #getListenerMethodName
                             */
                            // @ts-ignore
                            public setDefaultListenerMethod(defaultListenerMethod: java.lang.String | string): void
                            /**
                             * @return The name of the default listener method to delegate to.
                             */
                            // @ts-ignore
                            getDefaultListenerMethod(): string
                            /**
                             * Set the mapping of queue name or consumer tag to method name. The first lookup
                             * is by queue name, if that returns null, we lookup by consumer tag, if that
                             * returns null, the {@link #setDefaultListenerMethod(String) defaultListenerMethod}
                             * is used.
                             * @param queueOrTagToMethodName the map.
                             * @since 1.5
                             */
                            // @ts-ignore
                            public setQueueOrTagToMethodName(queueOrTagToMethodName: java.util.Map<java.lang.String | string, java.lang.String | string>): void
                            /**
                             * Add the mapping of a queue name or consumer tag to a method name. The first lookup
                             * is by queue name, if that returns null, we lookup by consumer tag, if that
                             * returns null, the {@link #setDefaultListenerMethod(String) defaultListenerMethod}
                             * is used.
                             * @param queueOrTag The queue name or consumer tag.
                             * @param methodName The method name.
                             * @since 1.5
                             */
                            // @ts-ignore
                            public addQueueOrTagToMethodName(queueOrTag: java.lang.String | string, methodName: java.lang.String | string): void
                            /**
                             * Remove the mapping of a queue name or consumer tag to a method name.
                             * @param queueOrTag The queue name or consumer tag.
                             * @return the method name that was removed, or null.
                             * @since 1.5
                             */
                            // @ts-ignore
                            public removeQueueOrTagToMethodName(queueOrTag: java.lang.String | string): string
                            /**
                             * Spring {@link ChannelAwareMessageListener} entry point.
                             * <p>
                             * Delegates the message to the target listener method, with appropriate conversion of the message argument. If the
                             * target method returns a non-null object, wrap in a Rabbit message and send it back.
                             * @param message the incoming Rabbit message
                             * @param channel the Rabbit channel to operate on
                             * @throws Exception if thrown by Rabbit API methods
                             */
                            // @ts-ignore
                            public onMessage(message: Message, channel: Channel): void
                            /**
                             * Determine the name of the listener method that will handle the given message.
                             * <p>
                             * The default implementation first consults the
                             * {@link #setQueueOrTagToMethodName(Map) queueOrTagToMethodName} map looking for a
                             * match on the consumer queue or consumer tag; if no match found, it simply returns
                             * the configured default listener method, or "handleMessage" if not configured.
                             * @param originalMessage the Rabbit request message
                             * @param extractedMessage the converted Rabbit request message, to be passed into the
                             *  listener method as argument
                             * @return the name of the listener method (never <code>null</code>)
                             * @see #setDefaultListenerMethod
                             * @see #setQueueOrTagToMethodName
                             */
                            // @ts-ignore
                            getListenerMethodName(originalMessage: Message, extractedMessage: java.lang.Object | any): string
                            /**
                             * Build an array of arguments to be passed into the target listener method. Allows for multiple method arguments to
                             * be built from a single message object.
                             * <p>
                             * The default implementation builds an array with the given message object as sole element. This means that the
                             * extracted message will always be passed into a <i>single</i> method argument, even if it is an array, with the
                             * target method having a corresponding single argument of the array's type declared.
                             * <p>
                             * This can be overridden to treat special message content such as arrays differently, for example passing in each
                             * element of the message array as distinct method argument.
                             * @param extractedMessage the content of the message
                             * @return the array of arguments to be passed into the listener method (each element of the array corresponding to
                             *  a distinct method argument)
                             */
                            // @ts-ignore
                            buildListenerArguments(extractedMessage: java.lang.Object | any): any[]
                            /**
                             * Invoke the specified listener method.
                             * @param methodName the name of the listener method
                             * @param arguments the message arguments to be passed in
                             * @param originalMessage the original message
                             * @return the result returned from the listener method
                             * @see #getListenerMethodName
                             * @see #buildListenerArguments
                             */
                            // @ts-ignore
                            invokeListenerMethod(methodName: java.lang.String | string, arguments: java.lang.Object[] | any[], originalMessage: Message): any
                        }
                    }
                }
            }
        }
    }
}
