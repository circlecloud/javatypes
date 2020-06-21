declare namespace org {
    namespace apache {
        namespace catalina {
            namespace webresources {
                // @ts-ignore
                class Cache extends java.lang.Object {
                    // @ts-ignore
                    constructor(root: org.apache.catalina.webresources.StandardRoot)
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    getResource(path: java.lang.String | string, useClassLoaderResources: boolean): org.apache.catalina.WebResource
                    // @ts-ignore
                    getResources(path: java.lang.String | string, useClassLoaderResources: boolean): org.apache.catalina.WebResource[]
                    // @ts-ignore
                    backgroundProcess(): void
                    // @ts-ignore
                    public getTtl(): number /*long*/
                    // @ts-ignore
                    public setTtl(ttl: number /*long*/): void
                    // @ts-ignore
                    public getMaxSize(): number /*long*/
                    // @ts-ignore
                    public setMaxSize(maxSize: number /*long*/): void
                    // @ts-ignore
                    public getLookupCount(): number /*long*/
                    // @ts-ignore
                    public getHitCount(): number /*long*/
                    // @ts-ignore
                    public setObjectMaxSize(objectMaxSize: number /*int*/): void
                    // @ts-ignore
                    public getObjectMaxSize(): number /*int*/
                    // @ts-ignore
                    public getObjectMaxSizeBytes(): number /*int*/
                    // @ts-ignore
                    public clear(): void
                    // @ts-ignore
                    public getSize(): number /*long*/
                }
            }
        }
    }
}
