declare namespace java {
    namespace lang {
        /**
         * Thrown when an application attempts to use {@code null} in a
         * case where an object is required. These include:
         * <ul>
         * <li>Calling the instance method of a {@code null} object.
         * <li>Accessing or modifying the field of a {@code null} object.
         * <li>Taking the length of {@code null} as if it were an array.
         * <li>Accessing or modifying the slots of {@code null} as if it
         * were an array.
         * <li>Throwing {@code null} as if it were a {@code Throwable}
         * value.
         * </ul>
         * <p>
         * Applications should throw instances of this class to indicate
         * other illegal uses of the {@code null} object.
         * {@code NullPointerException} objects may be constructed by the
         * virtual machine as if {@linkplain Throwable#Throwable(String,
         * Throwable, boolean, boolean) suppression were disabled and/or the
         * stack trace was not writable}.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class NullPointerException extends java.lang.RuntimeException {
            /**
             * Constructs a {@code NullPointerException} with no detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a {@code NullPointerException} with the specified
             * detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
