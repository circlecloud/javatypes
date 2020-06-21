declare namespace java {
    namespace lang {
        /**
         * Thrown to indicate that an array has been accessed with an
         * illegal index. The index is either negative or greater than or
         * equal to the size of the array.
         * @author unascribed
         * @since JDK1.0
         */
        // @ts-ignore
        class ArrayIndexOutOfBoundsException extends java.lang.IndexOutOfBoundsException {
            /**
             * Constructs an <code>ArrayIndexOutOfBoundsException</code> with no
             * detail message.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new <code>ArrayIndexOutOfBoundsException</code>
             * class with an argument indicating the illegal index.
             * @param index   the illegal index.
             */
            // @ts-ignore
            constructor(index: number /*int*/)
            /**
             * Constructs an <code>ArrayIndexOutOfBoundsException</code> class
             * with the specified detail message.
             * @param s   the detail message.
             */
            // @ts-ignore
            constructor(s: java.lang.String | string)
        }
    }
}
