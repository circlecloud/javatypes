declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Base class for AMQP method objects, specialized by autogenerated
                 * code in AMQP.java.
                 */
                // @ts-ignore
                abstract class Method extends java.lang.Object implements com.rabbitmq.client.Method {
                    // @ts-ignore
                    constructor()
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public abstract protocolClassId(): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public abstract protocolMethodId(): number /*int*/
                    /**
                     * {@inheritDoc}
                     */
                    // @ts-ignore
                    public abstract protocolMethodName(): string
                    /**
                     * Tell if content is present.
                     * @return true if the wire-protocol for this method should involve a content header and body,
                     *  or false if it should just involve a single method frame.
                     */
                    // @ts-ignore
                    public abstract hasContent(): boolean
                    /**
                     * Visitor support (double-dispatch mechanism).
                     * @param visitor the visitor object
                     * @return the result of the "visit" operation
                     * @throws IOException if an error is encountered
                     */
                    // @ts-ignore
                    public abstract visit(visitor: com.rabbitmq.client.impl.AMQImpl.MethodVisitor): any
                    /**
                     * Private API - Autogenerated writer for this method.
                     * @param writer interface to an object to write the method arguments
                     * @throws IOException if an error is encountered
                     */
                    // @ts-ignore
                    public abstract writeArgumentsTo(writer: com.rabbitmq.client.impl.MethodArgumentWriter): void
                    /**
                     * Public API - debugging utility
                     * @param buffer the buffer to append debug data to
                     */
                    // @ts-ignore
                    public appendArgumentDebugStringTo(buffer: java.lang.StringBuilder): void
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public toFrame(channelNumber: number /*int*/): com.rabbitmq.client.impl.Frame
                }
            }
        }
    }
}
