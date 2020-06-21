declare namespace org {
    namespace apache {
        namespace catalina {
            namespace core {
                /**
                 * Implementation of <code>LifecycleListener</code> that will init and
                 * and destroy APR.
                 * @since 4.1
                 */
                // @ts-ignore
                class AprLifecycleListener extends java.lang.Object implements org.apache.catalina.LifecycleListener {
                    // @ts-ignore
                    constructor()
                    /**
                     * The string manager for this package.
                     */
                    // @ts-ignore
                    static readonly sm: org.apache.tomcat.util.res.StringManager
                    // @ts-ignore
                    static readonly TCN_REQUIRED_MAJOR: number /*int*/
                    // @ts-ignore
                    static readonly TCN_REQUIRED_MINOR: number /*int*/
                    // @ts-ignore
                    static readonly TCN_REQUIRED_PATCH: number /*int*/
                    // @ts-ignore
                    static readonly TCN_RECOMMENDED_MINOR: number /*int*/
                    // @ts-ignore
                    static readonly TCN_RECOMMENDED_PV: number /*int*/
                    // @ts-ignore
                    static SSLEngine: java.lang.String | string
                    // @ts-ignore
                    static FIPSMode: java.lang.String | string
                    // @ts-ignore
                    static SSLRandomSeed: java.lang.String | string
                    // @ts-ignore
                    static sslInitialized: boolean
                    // @ts-ignore
                    static aprInitialized: boolean
                    // @ts-ignore
                    static aprAvailable: boolean
                    // @ts-ignore
                    static useAprConnector: boolean
                    // @ts-ignore
                    static useOpenSSL: boolean
                    // @ts-ignore
                    static fipsModeActive: boolean
                    // @ts-ignore
                    static readonly lock: java.lang.Object | any
                    // @ts-ignore
                    public static isAprAvailable(): boolean
                    /**
                     * Primary entry point for startup and shutdown events.
                     * @param event The event that has occurred
                     */
                    // @ts-ignore
                    public lifecycleEvent(event: org.apache.catalina.LifecycleEvent): void
                    // @ts-ignore
                    public getSSLEngine(): string
                    // @ts-ignore
                    public setSSLEngine(SSLEngine: java.lang.String | string): void
                    // @ts-ignore
                    public getSSLRandomSeed(): string
                    // @ts-ignore
                    public setSSLRandomSeed(SSLRandomSeed: java.lang.String | string): void
                    // @ts-ignore
                    public getFIPSMode(): string
                    // @ts-ignore
                    public setFIPSMode(FIPSMode: java.lang.String | string): void
                    // @ts-ignore
                    public isFIPSModeActive(): boolean
                    // @ts-ignore
                    public setUseAprConnector(useAprConnector: boolean): void
                    // @ts-ignore
                    public static getUseAprConnector(): boolean
                    // @ts-ignore
                    public setUseOpenSSL(useOpenSSL: boolean): void
                    // @ts-ignore
                    public static getUseOpenSSL(): boolean
                    // @ts-ignore
                    public static isInstanceCreated(): boolean
                }
            }
        }
    }
}
