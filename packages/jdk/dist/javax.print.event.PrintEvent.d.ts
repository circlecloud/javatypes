declare namespace javax {
    namespace print {
        namespace event {
            /**
             * Class PrintEvent is the super class of all Print Service API events.
             */
            // @ts-ignore
            class PrintEvent extends java.util.EventObject {
                /**
                 * Constructs a PrintEvent object.
                 * @param source is the source of the event
                 * @throws IllegalArgumentException if <code>source</code> is
                 *          <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.lang.Object | any)
                /**
                 * @return a message describing the event
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
