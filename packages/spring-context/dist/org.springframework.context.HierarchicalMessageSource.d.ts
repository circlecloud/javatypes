declare namespace org {
    namespace springframework {
        namespace context {
            /**
             * Sub-interface of MessageSource to be implemented by objects that
             * can resolve messages hierarchically.
             * @author Rod Johnson
             * @author Juergen Hoeller
             */
            // @ts-ignore
            interface HierarchicalMessageSource extends org.springframework.context.MessageSource {
                /**
                 * Set the parent that will be used to try to resolve messages
                 * that this object can't resolve.
                 * @param parent the parent MessageSource that will be used to
                 *  resolve messages that this object can't resolve.
                 *  May be {#code null}, in which case no further resolution is possible.
                 */
                // @ts-ignore
                setParentMessageSource(parent: org.springframework.context.MessageSource): void
                /**
                 * Return the parent of this MessageSource, or {@code null} if none.
                 */
                // @ts-ignore
                getParentMessageSource(): org.springframework.context.MessageSource
            }
        }
    }
}
