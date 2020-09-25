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
                public static readonly PENDING: javax.swing.SwingWorker.StateValue
                /**
                 * {@code SwingWorker} is {@code STARTED}
                 * before invoking {@code doInBackground}.
                 */
                // @ts-ignore
                public static readonly STARTED: javax.swing.SwingWorker.StateValue
                /**
                 * {@code SwingWorker} is {@code DONE}
                 * after {@code doInBackground} method
                 * is finished.
                 */
                // @ts-ignore
                public static readonly DONE: javax.swing.SwingWorker.StateValue
                // @ts-ignore
                public static values(): javax.swing.SwingWorker.StateValue[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): javax.swing.SwingWorker.StateValue
            }
        }
    }
}
