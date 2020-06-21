declare namespace org {
    namespace apache {
        namespace catalina {
            /**
             * <p>Decoupling interface which specifies that an implementing class is
             * associated with at most one <strong>Container</strong> instance.</p>
             * @author Craig R. McClanahan
             * @author Peter Donald
             */
            // @ts-ignore
            interface Contained {
                /**
                 * Get the {@link Container} with which this instance is associated.
                 * @return The Container with which this instance is associated or
                 *          <code>null</code> if not associated with a Container
                 */
                // @ts-ignore
                getContainer(): org.apache.catalina.Container
                /**
                 * Set the <code>Container</code> with which this instance is associated.
                 * @param container The Container instance with which this instance is to
                 *   be associated, or <code>null</code> to disassociate this instance
                 *   from any Container
                 */
                // @ts-ignore
                setContainer(container: org.apache.catalina.Container): void
            }
        }
    }
}
