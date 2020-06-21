declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * XML-specific BeanDefinitionStoreException subclass that wraps a
                     * {@link org.xml.sax.SAXException}, typically a {@link org.xml.sax.SAXParseException}
                     * which contains information about the error location.
                     * @author Juergen Hoeller
                     * @since 2.0.2
                     * @see #getLineNumber()
                     * @see org.xml.sax.SAXParseException
                     */
                    // @ts-ignore
                    class XmlBeanDefinitionStoreException extends org.springframework.beans.factory.BeanDefinitionStoreException {
                        /**
                         * Create a new XmlBeanDefinitionStoreException.
                         * @param resourceDescription description of the resource that the bean definition came from
                         * @param msg the detail message (used as exception message as-is)
                         * @param cause the SAXException (typically a SAXParseException) root cause
                         * @see org.xml.sax.SAXParseException
                         */
                        // @ts-ignore
                        constructor(resourceDescription: java.lang.String | string, msg: java.lang.String | string, cause: org.xml.sax.SAXException)
                        /**
                         * Return the line number in the XML resource that failed.
                         * @return the line number if available (in case of a SAXParseException); -1 else
                         * @see org.xml.sax.SAXParseException#getLineNumber()
                         */
                        // @ts-ignore
                        public getLineNumber(): number /*int*/
                    }
                }
            }
        }
    }
}
