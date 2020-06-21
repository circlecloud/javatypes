declare namespace java {
    namespace security {
        namespace spec {
            /**
             * This interface represents an elliptic curve (EC) finite field.
             * All specialized EC fields must implements this interface.
             * @see ECFieldFp
             * @see ECFieldF2m
             * @author Valerie Peng
             * @since 1.5
             */
            // @ts-ignore
            interface ECField {
                /**
                 * Returns the field size in bits. Note: For prime finite
                 * field ECFieldFp, size of prime p in bits is returned.
                 * For characteristic 2 finite field ECFieldF2m, m is returned.
                 * @return the field size in bits.
                 */
                // @ts-ignore
                getFieldSize(): number /*int*/
            }
        }
    }
}
