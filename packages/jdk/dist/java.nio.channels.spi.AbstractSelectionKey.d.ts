declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
                /**
                 * Base implementation class for selection keys.
                 * <p> This class tracks the validity of the key and implements cancellation.
                 * @author Mark Reinhold
                 * @author JSR-51 Expert Group
                 * @since 1.4
                 */
                // @ts-ignore
                abstract class AbstractSelectionKey extends java.nio.channels.SelectionKey {
                    /**
                     * Initializes a new instance of this class.
                     */
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public isValid(): boolean
                    /**
                     * Cancels this key.
                     * <p> If this key has not yet been cancelled then it is added to its
                     * selector's cancelled-key set while synchronized on that set.  </p>
                     */
                    // @ts-ignore
                    public cancel(): void
                }
            }
        }
    }
}
