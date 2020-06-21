declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                /**
                 * Base implementation class for selectors.
                 * <p> This class encapsulates the low-level machinery required to implement
                 * the interruption of selection operations.  A concrete selector class must
                 * invoke the {@link #begin begin} and {@link #end end} methods before and
                 * after, respectively, invoking an I/O operation that might block
                 * indefinitely.  In order to ensure that the {@link #end end} method is always
                 * invoked, these methods should be used within a
                 * <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block:
                 * <blockquote><pre>
                 * try {
                 * begin();
                 * // Perform blocking I/O operation here
                 * ...
                 * } finally {
                 * end();
                 * }</pre></blockquote>
                 * <p> This class also defines methods for maintaining a selector's
                 * cancelled-key set and for removing a key from its channel's key set, and
                 * declares the abstract {@link #register register} method that is invoked by a
                 * selectable channel's {@link AbstractSelectableChannel#register register}
                 * method in order to perform the actual work of registering a channel.  </p>
                 * @author Mark Reinhold
                 * @author JSR-51 Expert Group
                 * @since 1.4
                 */
                // @ts-ignore
                abstract class AbstractSelector extends java.nio.channels.Selector {
                    /**
                     * Initializes a new instance of this class.
                     * @param provider
                     *          The provider that created this selector
                     */
                    // @ts-ignore
                    constructor(provider: java.nio.channels.spi.SelectorProvider)
                    /**
                     * Closes this selector.
                     * <p> If the selector has already been closed then this method returns
                     * immediately.  Otherwise it marks the selector as closed and then invokes
                     * the {@link #implCloseSelector implCloseSelector} method in order to
                     * complete the close operation.  </p>
                     * @throws IOException
                     *           If an I/O error occurs
                     */
                    // @ts-ignore
                    public close(): void
                    /**
                     * Closes this selector.
                     * <p> This method is invoked by the {@link #close close} method in order
                     * to perform the actual work of closing the selector.  This method is only
                     * invoked if the selector has not yet been closed, and it is never invoked
                     * more than once.
                     * <p> An implementation of this method must arrange for any other thread
                     * that is blocked in a selection operation upon this selector to return
                     * immediately as if by invoking the {@link
                     * java.nio.channels.Selector#wakeup wakeup} method. </p>
                     * @throws IOException
                     *           If an I/O error occurs while closing the selector
                     */
                    // @ts-ignore
                    abstract implCloseSelector(): void
                    // @ts-ignore
                    public isOpen(): boolean
                    /**
                     * Returns the provider that created this channel.
                     * @return The provider that created this channel
                     */
                    // @ts-ignore
                    public provider(): java.nio.channels.spi.SelectorProvider
                    /**
                     * Retrieves this selector's cancelled-key set.
                     * <p> This set should only be used while synchronized upon it.  </p>
                     * @return The cancelled-key set
                     */
                    // @ts-ignore
                    cancelledKeys(): Array<java.nio.channels.SelectionKey>
                    /**
                     * Registers the given channel with this selector.
                     * <p> This method is invoked by a channel's {@link
                     * AbstractSelectableChannel#register register} method in order to perform
                     * the actual work of registering the channel with this selector.  </p>
                     * @param ch
                     *          The channel to be registered
                     * @param ops
                     *          The initial interest set, which must be valid
                     * @param att
                     *          The initial attachment for the resulting key
                     * @return A new key representing the registration of the given channel
                     *           with this selector
                     */
                    // @ts-ignore
                    abstract register(ch: java.nio.channels.spi.AbstractSelectableChannel, ops: number /*int*/, att: java.lang.Object | any): java.nio.channels.SelectionKey
                    /**
                     * Removes the given key from its channel's key set.
                     * <p> This method must be invoked by the selector for each channel that it
                     * deregisters.  </p>
                     * @param key
                     *          The selection key to be removed
                     */
                    // @ts-ignore
                    deregister(key: java.nio.channels.spi.AbstractSelectionKey): void
                    /**
                     * Marks the beginning of an I/O operation that might block indefinitely.
                     * <p> This method should be invoked in tandem with the {@link #end end}
                     * method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block as
                     * shown <a href="#be">above</a>, in order to implement interruption for
                     * this selector.
                     * <p> Invoking this method arranges for the selector's {@link
                     * Selector#wakeup wakeup} method to be invoked if a thread's {@link
                     * Thread#interrupt interrupt} method is invoked while the thread is
                     * blocked in an I/O operation upon the selector.  </p>
                     */
                    // @ts-ignore
                    begin(): void
                    /**
                     * Marks the end of an I/O operation that might block indefinitely.
                     * <p> This method should be invoked in tandem with the {@link #begin begin}
                     * method, using a <tt>try</tt>&nbsp;...&nbsp;<tt>finally</tt> block as
                     * shown <a href="#be">above</a>, in order to implement interruption for
                     * this selector.  </p>
                     */
                    // @ts-ignore
                    end(): void
                }
            }
        }
    }
}
