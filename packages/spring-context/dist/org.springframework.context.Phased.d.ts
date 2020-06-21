declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Interface for objects that may participate in a phased
             * process such as lifecycle management.
             * @author Mark Fisher
             * @since 3.0
             * @see SmartLifecycle
             */
            // @ts-ignore
            interface Phased {
                /**
                 * Return the phase value of this object.
                 */
                // @ts-ignore
                getPhase(): number /*int*/
            }
        }
    }
}
