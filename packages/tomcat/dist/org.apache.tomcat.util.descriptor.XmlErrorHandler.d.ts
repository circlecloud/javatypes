declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    // @ts-ignore
                    class XmlErrorHandler extends java.lang.Object implements org.xml.sax.ErrorHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public error(exception: org.xml.sax.SAXParseException): void
                        // @ts-ignore
                        public fatalError(exception: org.xml.sax.SAXParseException): void
                        // @ts-ignore
                        public warning(exception: org.xml.sax.SAXParseException): void
                        // @ts-ignore
                        public getErrors(): Array<org.xml.sax.SAXParseException>
                        // @ts-ignore
                        public getWarnings(): Array<org.xml.sax.SAXParseException>
                        // @ts-ignore
                        public logFindings(log: org.apache.juli.logging.Log, source: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
