declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace utils {
                /**
                 * Chained utility methods to simplify some Java repetitive code. Obtain a reference to
                 * the singleton {@link #INSTANCE} and then chain calls to the utility methods.
                 * @author Gary Russell
                 * @since 2.1.4
                 */
                // @ts-ignore
                class JavaUtils extends java.lang.Object {
                    /**
                     * The singleton instance of this utility class.
                     */
                    // @ts-ignore
                    readonly INSTANCE: org.springframework.amqp.utils.JavaUtils
                    /**
                     * Invoke {@link Consumer#accept(Object)} with the value if the condition is true.
                     * @param condition the condition.
                     * @param value the value.
                     * @param consumer the consumer.
                     * @param <T> the value type.
                     * @return this.
                     */
                    // @ts-ignore
                    acceptIfCondition<T>(condition: boolean, value: T, consumer: java.util.function.Consumer<T> | java.util.function$.Consumer<T>): org.springframework.amqp.utils.JavaUtils
                    /**
                     * Invoke {@link Consumer#accept(Object)} with the value if it is not null.
                     * @param value the value.
                     * @param consumer the consumer.
                     * @param <T> the value type.
                     * @return this.
                     */
                    // @ts-ignore
                    acceptIfNotNull<T>(value: T, consumer: java.util.function.Consumer<T> | java.util.function$.Consumer<T>): org.springframework.amqp.utils.JavaUtils
                    /**
                     * Invoke {@link Consumer#accept(Object)} with the value if it is not null or empty.
                     * @param value the value.
                     * @param consumer the consumer.
                     * @return this.
                     */
                    // @ts-ignore
                    acceptIfHasText(value: string, consumer: java.util.function.Consumer<java.lang.String> | java.util.function$.Consumer<java.lang.String>): org.springframework.amqp.utils.JavaUtils
                    /**
                     * Invoke {@link BiConsumer#accept(Object, Object)} with the arguments if the
                     * condition is true.
                     * @param condition the condition.
                     * @param t1 the first consumer argument
                     * @param t2 the second consumer argument
                     * @param consumer the consumer.
                     * @param <T1> the first argument type.
                     * @param <T2> the second argument type.
                     * @return this.
                     */
                    // @ts-ignore
                    acceptIfCondition<T1, T2>(condition: boolean, t1: T1, t2: T2, consumer: java.util.function.BiConsumer<T1, T2> | java.util.function$.BiConsumer<T1, T2>): org.springframework.amqp.utils.JavaUtils
                    /**
                     * Invoke {@link BiConsumer#accept(Object, Object)} with the arguments if the t2
                     * argument is not null.
                     * @param t1 the first argument
                     * @param t2 the second consumer argument
                     * @param consumer the consumer.
                     * @param <T1> the first argument type.
                     * @param <T2> the second argument type.
                     * @return this.
                     */
                    // @ts-ignore
                    acceptIfNotNull<T1, T2>(t1: T1, t2: T2, consumer: java.util.function.BiConsumer<T1, T2> | java.util.function$.BiConsumer<T1, T2>): org.springframework.amqp.utils.JavaUtils
                    /**
                     * Invoke {@link BiConsumer#accept(Object, Object)} with the arguments if the value
                     * argument is not null or empty.
                     * @param t1 the first consumer argument.
                     * @param value the second consumer argument
                     * @param <T> the first argument type.
                     * @param consumer the consumer.
                     * @return this.
                     */
                    // @ts-ignore
                    acceptIfHasText<T>(t1: T, value: string, consumer: java.util.function.BiConsumer<T, java.lang.String> | java.util.function$.BiConsumer<T, java.lang.String>): org.springframework.amqp.utils.JavaUtils
                }
            }
        }
    }
}
