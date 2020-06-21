declare namespace java {
    namespace nio {
        /**
         * A typesafe enumeration for byte orders.
         * @author Mark Reinhold
         * @author JSR-51 Expert Group
         * @since 1.4
         */
        // @ts-ignore
        class ByteOrder extends java.lang.Object {
            /**
             * Constant denoting big-endian byte order.  In this order, the bytes of a
             * multibyte value are ordered from most significant to least significant.
             */
            // @ts-ignore
            public static readonly BIG_ENDIAN: java.nio.ByteOrder
            /**
             * Constant denoting little-endian byte order.  In this order, the bytes of
             * a multibyte value are ordered from least significant to most
             * significant.
             */
            // @ts-ignore
            public static readonly LITTLE_ENDIAN: java.nio.ByteOrder
            /**
             * Retrieves the native byte order of the underlying platform.
             * <p> This method is defined so that performance-sensitive Java code can
             * allocate direct buffers with the same byte order as the hardware.
             * Native code libraries are often more efficient when such buffers are
             * used.  </p>
             * @return The native byte order of the hardware upon which this Java
             *           virtual machine is running
             */
            // @ts-ignore
            public static nativeOrder(): java.nio.ByteOrder
            /**
             * Constructs a string describing this object.
             * <p> This method returns the string <tt>"BIG_ENDIAN"</tt> for {@link
             * #BIG_ENDIAN} and <tt>"LITTLE_ENDIAN"</tt> for {@link #LITTLE_ENDIAN}.
             * </p>
             * @return The specified string
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
