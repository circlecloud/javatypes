declare namespace javax {
    namespace swing {
        namespace SwingWorker {
            /**
             * Values for the {@code state} bound property.
             * @since 1.6
             */
            // @ts-ignore
            class StateValue extends java.lang.Enum<javax.swing.SwingWorker.StateValue> {
                /**
                 * Initial {@code SwingWorker} state.
                 */
                // @ts-ignore
                readonly PENDING: javax.swing.SwingWorker.StateValue
                /**
                 * {@code SwingWorker} is {@code STARTED}
                 * before invoking {@code doInBackground}.
                 */
                // @ts-ignore
                readonly STARTED: javax.swing.SwingWorker.StateValue
                /**
                 * {@code SwingWorker} is {@code DONE}
                 * after {@code doInBackground} method
                 * is finished.
                 */
                // @ts-ignore
                readonly DONE: javax.swing.SwingWorker.StateValue
                // @ts-ignore
                values(): javax.swing.SwingWorker.StateValue[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): javax.swing.SwingWorker.StateValue
            }
        }
    }
}
