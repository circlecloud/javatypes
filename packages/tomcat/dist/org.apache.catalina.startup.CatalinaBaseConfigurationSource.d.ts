declare namespace org {
    namespace apache {
        namespace catalina {
            namespace startup {
                // @ts-ignore
                class CatalinaBaseConfigurationSource extends java.lang.Object implements org.apache.tomcat.util.file.ConfigurationSource {
                    // @ts-ignore
                    constructor(catalinaBaseFile: java.io.File, serverXmlPath: java.lang.String | string)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    public getServerXml(): org.apache.tomcat.util.file.ConfigurationSource.Resource
                    // @ts-ignore
                    public getResource(name: java.lang.String | string): org.apache.tomcat.util.file.ConfigurationSource.Resource
                    // @ts-ignore
                    public getURI(name: java.lang.String | string): java.net.URI
                }
            }
        }
    }
}
