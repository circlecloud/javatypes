declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * Representation of an import that has been processed during the parsing process.
                     * @author Juergen Hoeller
                     * @since 2.0
                     * @see ReaderEventListener#importProcessed(ImportDefinition)
                     */
                    // @ts-ignore
                    class ImportDefinition extends java.lang.Object implements org.springframework.beans.BeanMetadataElement {
                        /**
                         * Create a new ImportDefinition.
                         * @param importedResource the location of the imported resource
                         */
                        // @ts-ignore
                        constructor(importedResource: string)
                        /**
                         * Create a new ImportDefinition.
                         * @param importedResource the location of the imported resource
                         * @param source the source object (may be {#code null})
                         */
                        // @ts-ignore
                        constructor(importedResource: string, source: any)
                        /**
                         * Create a new ImportDefinition.
                         * @param importedResource the location of the imported resource
                         * @param source the source object (may be {#code null})
                         */
                        // @ts-ignore
                        constructor(importedResource: string, actualResources: Resource[], source: any)
                        /**
                         * Return the location of the imported resource.
                         */
                        // @ts-ignore
                        getImportedResource(): java.lang.String
                        // @ts-ignore
                        getActualResources(): Resource[]
                        // @ts-ignore
                        getSource(): java.lang.Object
                    }
                }
            }
        }
    }
}
