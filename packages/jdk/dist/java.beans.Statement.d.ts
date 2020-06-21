declare namespace java {
    namespace beans {
        /**
         * A <code>Statement</code> object represents a primitive statement
         * in which a single method is applied to a target and
         * a set of arguments - as in <code>"a.setFoo(b)"</code>.
         * Note that where this example uses names
         * to denote the target and its argument, a statement
         * object does not require a name space and is constructed with
         * the values themselves.
         * The statement object associates the named method
         * with its environment as a simple set of values:
         * the target and an array of argument values.
         * @since 1.4
         * @author Philip Milne
         */
        // @ts-ignore
        class Statement extends java.lang.Object {
            /**
             * Creates a new {@link Statement} object
             * for the specified target object to invoke the method
             * specified by the name and by the array of arguments.
             * <p>
             * The {@code target} and the {@code methodName} values should not be {@code null}.
             * Otherwise an attempt to execute this {@code Expression}
             * will result in a {@code NullPointerException}.
             * If the {@code arguments} value is {@code null},
             * an empty array is used as the value of the {@code arguments} property.
             * @param target  the target object of this statement
             * @param methodName  the name of the method to invoke on the specified target
             * @param arguments  the array of arguments to invoke the specified method
             */
            // @ts-ignore
            constructor(target: java.lang.Object | any, methodName: java.lang.String | string, arguments: java.lang.Object[] | any[])
            /**
             * Returns the target object of this statement.
             * If this method returns {@code null},
             * the {@link #execute} method
             * throws a {@code NullPointerException}.
             * @return the target object of this statement
             */
            // @ts-ignore
            public getTarget(): any
            /**
             * Returns the name of the method to invoke.
             * If this method returns {@code null},
             * the {@link #execute} method
             * throws a {@code NullPointerException}.
             * @return the name of the method
             */
            // @ts-ignore
            public getMethodName(): string
            /**
             * Returns the arguments for the method to invoke.
             * The number of arguments and their types
             * must match the method being  called.
             * {@code null} can be used as a synonym of an empty array.
             * @return the array of arguments
             */
            // @ts-ignore
            public getArguments(): any[]
            /**
             * The {@code execute} method finds a method whose name is the same
             * as the {@code methodName} property, and invokes the method on
             * the target.
             * When the target's class defines many methods with the given name
             * the implementation should choose the most specific method using
             * the algorithm specified in the Java Language Specification
             * (15.11). The dynamic class of the target and arguments are used
             * in place of the compile-time type information and, like the
             * {@link java.lang.reflect.Method} class itself, conversion between
             * primitive values and their associated wrapper classes is handled
             * internally.
             * <p>
             * The following method types are handled as special cases:
             * <ul>
             * <li>
             * Static methods may be called by using a class object as the target.
             * <li>
             * The reserved method name "new" may be used to call a class's constructor
             * as if all classes defined static "new" methods. Constructor invocations
             * are typically considered {@code Expression}s rather than {@code Statement}s
             * as they return a value.
             * <li>
             * The method names "get" and "set" defined in the {@link java.util.List}
             * interface may also be applied to array instances, mapping to
             * the static methods of the same name in the {@code Array} class.
             * </ul>
             * @throws NullPointerException if the value of the {#code target} or
             *                               {@code methodName} property is {@code null}
             * @throws NoSuchMethodException if a matching method is not found
             * @throws SecurityException if a security manager exists and
             *                            it denies the method invocation
             * @throws Exception that is thrown by the invoked method
             * @see java.lang.reflect.Method
             */
            // @ts-ignore
            public execute(): void
            /**
             * Prints the value of this statement using a Java-style syntax.
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
