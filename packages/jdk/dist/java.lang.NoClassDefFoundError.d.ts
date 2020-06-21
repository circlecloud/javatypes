declare namespace java {
    namespace lang {
        /**
         * Thrown if the Java Virtual Machine or a <code>ClassLoader</code> instance
         * tries to load in the definition of a class (as part of a normal method call
         * or as part of creating a new instance using the <code>new</code> expression)
         * and no definition of the class could be found.
         * <p>
         * The searched-for class definition existed when the currently
         * executing class was compiled, but the definition can no longer be
         * found.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class NoClassDefFoundError extends java.lang.LinkageError {
            /**
             * Constructs a <code>NoClassDefFoundError</code> with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>NoClassDefFoundError</code> with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
