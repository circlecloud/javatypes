declare namespace com {
    namespace rabbitmq {
        namespace utility {
            // @ts-ignore
            class ValueOrException<V, E extends java.lang.Throwable & com.rabbitmq.utility.SensibleClone<E>> extends java.lang.Object {
                /**
                 * Factory method for values
                 * @param value the value to wrap as a ValueOrException
                 * @return the wrapped value
                 */
                // @ts-ignore
                public static makeValue<V, E extends java.lang.Throwable & com.rabbitmq.utility.SensibleClone<E>>(value: V): com.rabbitmq.utility.ValueOrException<V, E>
                /**
                 * Factory method for exceptions
                 * @param exception the exception to wrap as a ValueOrException
                 * @return the wrapped exception
                 */
                // @ts-ignore
                public static makeException<V, E extends java.lang.Throwable & com.rabbitmq.utility.SensibleClone<E>>(exception: E): com.rabbitmq.utility.ValueOrException<V, E>
                /**
                 * Retrieve value or throw exception
                 * @return the wrapped value, if it's a value
                 * @throws E the wrapped exception, if it's an exception
                 */
                // @ts-ignore
                public getValue(): V
            }
        }
    }
}
