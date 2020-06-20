declare namespace java {
    namespace awt {
        namespace RenderingHints {
            /**
             * Defines the base type of all keys used along with the
             * {@link RenderingHints} class to control various
             * algorithm choices in the rendering and imaging pipelines.
             * Instances of this class are immutable and unique which
             * means that tests for matches can be made using the
             * {@code ==} operator instead of the more expensive
             * {@code equals()} method.
             */
            // @ts-ignore
            class Key extends java.lang.Object {
                /**
                 * Construct a key using the indicated private key.  Each
                 * subclass of Key maintains its own unique domain of integer
                 * keys.  No two objects with the same integer key and of the
                 * same specific subclass can be constructed.  An exception
                 * will be thrown if an attempt is made to construct another
                 * object of a given class with the same integer key as a
                 * pre-existing instance of that subclass of Key.
                 * @param privatekey the specified key
                 */
                // @ts-ignore
                constructor(privatekey: number /*int*/)
                /**
                 * Returns true if the specified object is a valid value
                 * for this Key.
                 * @param val the <code>Object</code> to test for validity
                 * @return <code>true</code> if <code>val</code> is valid;
                 *          <code>false</code> otherwise.
                 */
                // @ts-ignore
                abstract isCompatibleValue(val: any): boolean
                /**
                 * Returns the private integer key that the subclass
                 * instantiated this Key with.
                 * @return the private integer key that the subclass
                 *  instantiated this Key with.
                 */
                // @ts-ignore
                intKey(): int
                /**
                 * The hash code for all Key objects will be the same as the
                 * system identity code of the object as defined by the
                 * System.identityHashCode() method.
                 */
                // @ts-ignore
                hashCode(): int
                /**
                 * The equals method for all Key objects will return the same
                 * result as the equality operator '=='.
                 */
                // @ts-ignore
                equals(o: any): boolean
            }
        }
    }
}
