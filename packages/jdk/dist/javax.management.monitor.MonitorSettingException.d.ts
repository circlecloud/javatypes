declare namespace javax {
    namespace management {
        namespace monitor {
            /**
             * Exception thrown by the monitor when a monitor setting becomes invalid while the monitor is running.
             * <P>
             * As the monitor attributes may change at runtime, a check is performed before each observation.
             * If a monitor attribute has become invalid, a monitor setting exception is thrown.
             * @since 1.5
             */
            // @ts-ignore
            class MonitorSettingException extends javax.management.JMRuntimeException {
                /**
                 * Default constructor.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Constructor that allows an error message to be specified.
                 * @param message The specific error message.
                 */
                // @ts-ignore
                constructor(message: string)
            }
        }
    }
}
