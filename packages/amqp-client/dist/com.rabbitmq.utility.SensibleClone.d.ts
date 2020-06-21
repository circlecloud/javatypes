declare namespace com {
    namespace rabbitmq {
        namespace utility {
            /**
             * This interface exists as a workaround for the annoyingness of java.lang.Cloneable.
             * It is used for generic methods which need to accept something they can actually clone
             * (Object.clone is protected and java.lang.Cloneable does not define a public clone method)
             * and want to provide some guarantees of the type of the cloned object.
             */
            // @ts-ignore
            interface SensibleClone<T extends com.rabbitmq.utility.SensibleClone<T>> extends java.lang.Cloneable {
                /**
                 * Like Object.clone but sensible; in particular, public and declared to return
                 * the right type.
                 */
                // @ts-ignore
                sensibleClone(): T
            }
        }
    }
}
