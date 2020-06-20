declare namespace java {
    namespace awt {
        namespace datatransfer {
            /**
             * <code>FlavorEvent</code> is used to notify interested parties
             * that available {@link DataFlavor}s have changed in the
             * {@link Clipboard} (the event source).
             * @see FlavorListener
             * @author Alexander Gerasimov
             * @since 1.5
             */
            // @ts-ignore
            class FlavorEvent extends java.util.EventObject {
                /**
                 * Constructs a <code>FlavorEvent</code> object.
                 * @param source  the <code>Clipboard</code> that is the source of the event
                 * @throws IllegalArgumentException if the {#code source} is {@code null}
                 */
                // @ts-ignore
                constructor(source: java.awt.datatransfer.Clipboard)
            }
        }
    }
}
