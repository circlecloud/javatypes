declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Implementation of {@link HttpMessageConverter} that can write a single {@link ResourceRegion},
                 * or Collections of {@link ResourceRegion ResourceRegions}.
                 * @author Brian Clozel
                 * @author Juergen Hoeller
                 * @since 4.3
                 */
                // @ts-ignore
                class ResourceRegionHttpMessageConverter extends org.springframework.http.converter.AbstractGenericHttpMessageConverter<java.lang.Object | any> {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    getDefaultContentType(object: java.lang.Object | any): org.springframework.http.MediaType
                    // @ts-ignore
                    public canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public canRead(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public read(type: java.lang.reflect.Type, contextClass: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): any
                    // @ts-ignore
                    readInternal(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): ResourceRegion
                    // @ts-ignore
                    public canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public canWrite(type: java.lang.reflect.Type, clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    writeInternal(object: java.lang.Object | any, type: java.lang.reflect.Type, outputMessage: org.springframework.http.HttpOutputMessage): void
                    // @ts-ignore
                    writeResourceRegion(region: ResourceRegion, outputMessage: org.springframework.http.HttpOutputMessage): void
                }
            }
        }
    }
}
