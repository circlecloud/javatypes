declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace config {
                // @ts-ignore
                abstract class ConfigurationProvider extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static getProvider(provider: java.lang.Class<any>): net.md_5.bungee.config.ConfigurationProvider
                    // @ts-ignore
                    public abstract save(config: net.md_5.bungee.config.Configuration, file: java.io.File): void
                    // @ts-ignore
                    public abstract save(config: net.md_5.bungee.config.Configuration, writer: java.io.Writer): void
                    // @ts-ignore
                    public abstract load(file: java.io.File): net.md_5.bungee.config.Configuration
                    // @ts-ignore
                    public abstract load(file: java.io.File, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration
                    // @ts-ignore
                    public abstract load(reader: java.io.Reader): net.md_5.bungee.config.Configuration
                    // @ts-ignore
                    public abstract load(reader: java.io.Reader, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration
                    // @ts-ignore
                    public abstract load(jis: java.io.InputStream): net.md_5.bungee.config.Configuration
                    // @ts-ignore
                    public abstract load(jis: java.io.InputStream, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration
                    // @ts-ignore
                    public abstract load(string: java.lang.String | string): net.md_5.bungee.config.Configuration
                    // @ts-ignore
                    public abstract load(string: java.lang.String | string, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration
                }
            }
        }
    }
}
