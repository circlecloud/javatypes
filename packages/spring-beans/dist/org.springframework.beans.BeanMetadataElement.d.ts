declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Interface to be implemented by bean metadata elements
             * that carry a configuration source object.
             * @author Juergen Hoeller
             * @since 2.0
             */
            // @ts-ignore
            interface BeanMetadataElement {
                /**
                 * Return the configuration source {@code Object} for this metadata element
                 * (may be {@code null}).
                 */
                // @ts-ignore
                getSource(): any
            }
        }
    }
}
