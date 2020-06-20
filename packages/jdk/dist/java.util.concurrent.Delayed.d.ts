declare namespace java {
    namespace util {
        namespace concurrent {
            /**
             * A mix-in style interface for marking objects that should be
             * acted upon after a given delay.
             * <p>An implementation of this interface must define a
             * {@code compareTo} method that provides an ordering consistent with
             * its {@code getDelay} method.
             * @since 1.5
             * @author Doug Lea
             */
            // @ts-ignore
            interface Delayed extends java.lang.Comparable<java.util.concurrent.Delayed> {
                /**
                 * Returns the remaining delay associated with this object, in the
                 * given time unit.
                 * @param unit the time unit
                 * @return the remaining delay; zero or negative values indicate
                 *  that the delay has already elapsed
                 */
                // @ts-ignore
                getDelay(unit: java.util.concurrent.TimeUnit): long
            }
        }
    }
}
