declare namespace java {
    namespace awt {
        namespace event {
            /**
             * The listener interface for receiving adjustment events.
             * @author Amy Fowler
             * @since 1.1
             */
            // @ts-ignore
            interface AdjustmentListener extends java.util.EventListener {
                /**
                 * Invoked when the value of the adjustable has changed.
                 */
                // @ts-ignore
                adjustmentValueChanged(e: java.awt.event.AdjustmentEvent): void
            }
        }
    }
}
