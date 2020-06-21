declare namespace java {
    namespace lang {
        /**
         * This class provides thread-local variables.  These variables differ from
         * their normal counterparts in that each thread that accesses one (via its
         * {@code get} or {@code set} method) has its own, independently initialized
         * copy of the variable.  {@code ThreadLocal} instances are typically private
         * static fields in classes that wish to associate state with a thread (e.g.,
         * a user ID or Transaction ID).
         * <p>For example, the class below generates unique identifiers local to each
         * thread.
         * A thread's id is assigned the first time it invokes {@code ThreadId.get()}
         * and remains unchanged on subsequent calls.
         * <pre>
         * import java.util.concurrent.atomic.AtomicInteger;
         * public class ThreadId {
         * // Atomic integer containing the next thread ID to be assigned
         * private static final AtomicInteger nextId = new AtomicInteger(0);
         * // Thread local variable containing each thread's ID
         * private static final ThreadLocal&lt;Integer&gt; threadId =
         * new ThreadLocal&lt;Integer&gt;() {
         * &#64;Override protected Integer initialValue() {
         * return nextId.getAndIncrement();
         * }
         * };
         * // Returns the current thread's unique ID, assigning it if necessary
         * public static int get() {
         * return threadId.get();
         * }
         * }
         * </pre>
         * <p>Each thread holds an implicit reference to its copy of a thread-local
         * variable as long as the thread is alive and the {@code ThreadLocal}
         * instance is accessible; after a thread goes away, all of its copies of
         * thread-local instances are subject to garbage collection (unless other
         * references to these copies exist).
         * @author Josh Bloch and Doug Lea
         * @since 1.2
         */
        // @ts-ignore
        class ThreadLocal<T> extends java.lang.Object {
            /**
             * Creates a thread local variable.
             * @see #withInitial(java.util.function.Supplier)
             */
            // @ts-ignore
            constructor()
            /**
             * Returns the current thread's "initial value" for this
             * thread-local variable.  This method will be invoked the first
             * time a thread accesses the variable with the {@link #get}
             * method, unless the thread previously invoked the {@link #set}
             * method, in which case the {@code initialValue} method will not
             * be invoked for the thread.  Normally, this method is invoked at
             * most once per thread, but it may be invoked again in case of
             * subsequent invocations of {@link #remove} followed by {@link #get}.
             * <p>This implementation simply returns {@code null}; if the
             * programmer desires thread-local variables to have an initial
             * value other than {@code null}, {@code ThreadLocal} must be
             * subclassed, and this method overridden.  Typically, an
             * anonymous inner class will be used.
             * @return the initial value for this thread-local
             */
            // @ts-ignore
            initialValue(): T
            /**
             * Creates a thread local variable. The initial value of the variable is
             * determined by invoking the {@code get} method on the {@code Supplier}.
             * @param <S> the type of the thread local's value
             * @param supplier the supplier to be used to determine the initial value
             * @return a new thread local variable
             * @throws NullPointerException if the specified supplier is null
             * @since 1.8
             */
            // @ts-ignore
            public static withInitial<S>(supplier: java.util.function$.Supplier<any>): java.lang.ThreadLocal<S>
            /**
             * Returns the value in the current thread's copy of this
             * thread-local variable.  If the variable has no value for the
             * current thread, it is first initialized to the value returned
             * by an invocation of the {@link #initialValue} method.
             * @return the current thread's value of this thread-local
             */
            // @ts-ignore
            public get(): T
            /**
             * Sets the current thread's copy of this thread-local variable
             * to the specified value.  Most subclasses will have no need to
             * override this method, relying solely on the {@link #initialValue}
             * method to set the values of thread-locals.
             * @param value the value to be stored in the current thread's copy of
             *         this thread-local.
             */
            // @ts-ignore
            public set(value: T): void
            /**
             * Removes the current thread's value for this thread-local
             * variable.  If this thread-local variable is subsequently
             * {@linkplain #get read} by the current thread, its value will be
             * reinitialized by invoking its {@link #initialValue} method,
             * unless its value is {@linkplain #set set} by the current thread
             * in the interim.  This may result in multiple invocations of the
             * {@code initialValue} method in the current thread.
             * @since 1.5
             */
            // @ts-ignore
            public remove(): void
        }
    }
}
