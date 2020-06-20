declare namespace java {
    namespace awt {
        namespace JobAttributes {
            /**
             * A type-safe enumeration of possible multiple copy handling states.
             * It is used to control how the sheets of multiple copies of a single
             * document are collated.
             * @since 1.3
             */
            // @ts-ignore
            class MultipleDocumentHandlingType extends java.awt.AttributeValue {
                /**
                 * The <code>MultipleDocumentHandlingType</code> instance to use for specifying
                 * that the job should be divided into separate, collated copies.
                 */
                // @ts-ignore
                readonly SEPARATE_DOCUMENTS_COLLATED_COPIES: java.awt.JobAttributes.MultipleDocumentHandlingType
                /**
                 * The <code>MultipleDocumentHandlingType</code> instance to use for specifying
                 * that the job should be divided into separate, uncollated copies.
                 */
                // @ts-ignore
                readonly SEPARATE_DOCUMENTS_UNCOLLATED_COPIES: java.awt.JobAttributes.MultipleDocumentHandlingType
            }
        }
    }
}
